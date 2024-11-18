import React, { useState } from "react";
import logo from "../../asset/img/logo.svg";
import { useForm } from "react-hook-form";
import { FORGOT_PASSWORD_API, SEND_OTP_API } from "../../apis/api";
import { Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toastError, toastSuccess } from "../../../services/toastr.service";
import * as yup from "yup";
import { TailSpin } from "react-loader-spinner";
import { GET_CASHE, SET_CASHE } from "../../utils/helper";

const schema = yup.object().shape({
  email: yup
    .string()
    .trim() // Removes unnecessary spaces
    .email("Enter a valid email address (e.g., user@example.com)") // Example format for clarity
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email must be in a proper format and not contain spaces"
    ) // Ensures no spaces or invalid characters
    .required("Email is required"),
  agree: yup.boolean().oneOf([true], "You must agree to the Privacy Policy"),
});

const resetPasswordValidationSchema = yup.object().shape({
  otp: yup
    .string()
    .required("OTP is required")
    .matches(/^\d{4}$/, "OTP must be a 4-digit number"),
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters long")
    .matches(/[a-z]/, "Password must include at least one lowercase letter")
    .matches(/[A-Z]/, "Password must include at least one uppercase letter")
    .matches(/\d/, "Password must include at least one number")
    .matches(
      /[!@#$%^&*()\-_"=+{}; :,<.>]/,
      "Password must include at least one special character"
    ),
  confirmPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
  agree: yup.boolean().oneOf([true], "You must agree to the Privacy Policy"),
});

const Forgot = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showResetPassword, setShowResetPassword] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const {
    register: registerForgot,
    handleSubmit: handleForgotSubmit,
    reset: resetForgot,
    formState: { errors: forgotErrors },
  } = useForm({
    resolver: yupResolver(resetPasswordValidationSchema),
  });

  const onSubmit = async (data) => {
    console.log("data: ", data);
    setLoading(true);
    try {
      const response = await SEND_OTP_API({
        email: data?.email,
      });

      console.log("response:SEND_OTP_API ", response);
      if (response?.success) {
        setShowResetPassword(true);
        setLoading(false);
        toastSuccess(response?.message);
        SET_CASHE("email", data?.email);
        reset();
      }

      console.log(data);
    } catch (e) {
      console.log("e: ", e);
      toastError(e?.data?.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  // Handle forgot password form submission
  const onForgotPasswordSubmit = async (data) => {
    console.log("data: ", data);
    try {
      setLoading(true);
      const payload = {
        otp: data?.otp,
        email: GET_CASHE("email"),
        newPassword: data.password,
      };

      const response = await FORGOT_PASSWORD_API(payload);
      console.log("response: ", response);

      if (response?.success) {
        toastSuccess(response?.message);
        registerForgot();
        navigate("/signIn");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      toastError(error?.data?.message);
    }
  };

  return (
    <>
      {/* <!-- page wrap --> */}
      <div className="section section--content">
        <div className="section__content">
          {/* <!-- form --> */}
          {!showResetPassword ? (
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form form--content"
              role="form"
            >
              <div className="form__logo-wrap">
                <a href="index.html" className="form__logo">
                  <img src={logo} alt="Loading" />
                </a>
                <span className="form__tagline">
                  Arbitrage trading <br />
                  HTML Template
                </span>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Email"
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                />
                {errors.email && (
                  <div className="text-danger">{errors.email.message}</div>
                )}
              </div>
              <div className="form__group form__group--checkbox">
                <input id="agree" type="checkbox" {...register("agree")} />
                <label htmlFor="agree">
                  I agree to the <a href="privacy.html">Privacy Policy</a>
                </label>
                {errors.agree && (
                  <p className="form__error">{errors.agree.message}</p>
                )}
              </div>

              <button type="submit" className="form__btn" disabled={loading}>
                {loading ? (
                  <TailSpin color="#fff" height={20} width={20} />
                ) : (
                  "Submit"
                )}
              </button>

              <span className="form__text form__text--center">
                We will send a password to your Email
              </span>
              <span className="block-icon block-icon--purple">
                <i className="ti ti-lock"></i>
              </span>
              <span className="screw screw--big-tr"></span>
              <span className="screw screw--big-bl"></span>
              <span className="screw screw--big-br"></span>
            </form>
          ) : (
            <form
              onSubmit={handleForgotSubmit(onForgotPasswordSubmit)}
              role="form"
              className="form form--content"
            >
              <div className="form__logo-wrap">
                <a className="form__logo">
                  <img src={logo} alt="Loading" />
                </a>
                <span className="form__tagline">
                  Arbitrage trading <br />
                  HTML Template
                </span>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="OTP"
                  {...registerForgot("otp", {
                    required: "Required",
                  })}
                />
                {forgotErrors.otp && (
                  <div className="text-danger">{forgotErrors.otp.message}</div>
                )}
              </div>
              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  placeholder="Password"
                  {...registerForgot("password", {
                    required: "Required",
                  })}
                />
                {forgotErrors.password && (
                  <div className="text-danger">
                    {forgotErrors.password.message}
                  </div>
                )}
              </div>
              <div className="form__group">
                <input
                  type="password"
                  className="form__input"
                  placeholder="Confirm Password"
                  {...registerForgot("confirmPassword", {
                    required: "Required",
                  })}
                />
                {forgotErrors.confirmPassword && (
                  <div className="text-danger">
                    {forgotErrors.confirmPassword.message}
                  </div>
                )}
              </div>
              <div className="form__group form__group--checkbox">
                <input id="remember" name="remember" type="checkbox" />
                <label htmlFor="remember">
                  I agree to the <a href="privacy.html">Privacy Policy</a>
                </label>
              </div>

              <div className="form__group form__group--checkbox">
                <input
                  id="agree"
                  type="checkbox"
                  {...registerForgot("agree")}
                />
                <label htmlFor="agree">
                  I agree to the <a href="privacy.html">Privacy Policy</a>
                </label>
                {errors.agree && (
                  <p className="form__error">{errors.agree.message}</p>
                )}
              </div>

              <button type="submit" className="form__btn">
                {loading ? (
                  <TailSpin color="#fff" height={20} width={20} />
                ) : (
                  "Submit"
                )}
              </button>

              <span className="form__text form__text--center">
                We will send a password to your Email
              </span>
              <span className="block-icon block-icon--purple">
                <i className="ti ti-lock"></i>
              </span>
              <span className="screw screw--big-tr"></span>
              <span className="screw screw--big-bl"></span>
              <span className="screw screw--big-br"></span>
            </form>
          )}
          {/* <!-- end form --> */}
        </div>
        {/* <!-- animation background --> */}
        <div
          className="section__canvas section__canvas--full section__canvas--third gradient-background"
          id="canvas3"
        ></div>
      </div>
      {/* <!-- end page wrap --> */}
    </>
  );
};

export default Forgot;
