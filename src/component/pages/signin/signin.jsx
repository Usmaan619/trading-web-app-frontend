import React, { useEffect, useState } from "react";
import logo from "../../asset/img/logo.svg";
import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import { FORGOT_PASSWORD_API, LOGIN_API } from "../../apis/api";
import { TailSpin } from "react-loader-spinner";
import { SET_CASHE } from "../../utils/helper";
import { toastError, toastSuccess } from "../../../services/toastr.service";
// Define the validation schema
const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const SignIn = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  const onSubmit = async (data) => {
    try {
      data.role = window?.location?.pathname === "/a/login" ? "Admin" : "";
      

      setIsLoading(true);

      const response = await LOGIN_API(data);
      const { login, token, name, message } = response?.data || {};

      if (login) {
        SET_CASHE("token", token);
        SET_CASHE("name", name);
        toastSuccess(message);
        navigate("/");
      }
    } catch (error) {
      toastError(
        error?.response?.data?.message || "An error occurred during login."
      );
    } finally {
      setIsLoading(false);
    }
  };

  // Handle forgot password form submission
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  const onForgotPasswordSubmit = async (data) => {
    try {
      setIsLoading(true);

      const payload = {
        email: data.email,
        newPassword: data.newPassword,
      };

      const response = await FORGOT_PASSWORD_API(payload);

      if (response?.success) {
        toastSuccess("Password has been reset successfully");
        setIsForgotPassword(false);
      }
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toastError(error?.data?.message);
    }
  };

  const [title, setTitle] = useState();
  useEffect(() => {
    window?.location?.pathname === "/a/login"
      ? setTitle("Admin Sign In")
      : setTitle("Sign In");
  }, []);

  return (
    <>
      <div className="section section--content">
        <div className="section__content">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form form--content"
          >
            <div className="form__logo-wrap">
              <NavLink to="/" className="form__logo">
                <img src={logo} alt="Loading" />
              </NavLink>
              <span className="form__tagline">
                Arbitrage trading <br />
                {title}
              </span>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Email"
                {...register("email")}
                required
              />
              {/* Display email validation error */}
              {errors.email && (
                <p className="form__error">{errors.email.message}</p>
              )}
            </div>

            <div className="form__group">
              <input
                type="password"
                className="form__input"
                placeholder="Password"
                {...register("password")}
                required
              />
              {/* Display password validation error */}
              {errors.password && (
                <p className="form__error">{errors.password.message}</p>
              )}
            </div>

            <div className="form__group form__group--checkbox">
              <input id="remember" name="remember" type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>

            <button type="submit" className="form__btn" disabled={isLoading}>
              {isLoading ? (
                <TailSpin color="#fff" height={20} width={20} />
              ) : (
                "Sign in"
              )}
            </button>

            <span className="form__delimiter">or</span>

            <div className="form__social">
              <a className="fb" href="#">
                <i className="ti ti-brand-facebook"></i>
              </a>
              <a className="tw" href="#">
                <i className="ti ti-brand-x"></i>
              </a>
              <a className="gl" href="#">
                <i className="ti ti-brand-google"></i>
              </a>
            </div>

            <span className="form__text form__text--center">
              Don't have an account? <NavLink to="/signUp">Sign up!</NavLink>
              <br /> <NavLink to="/forgot">Forgot password?</NavLink>
            </span>

            <span className="block-icon block-icon--purple">
              <NavLink to="/">
                <i className="ti ti-login"></i>
              </NavLink>
            </span>
            <span className="screw screw--big-tr"></span>
            <span className="screw screw--big-bl"></span>
            <span className="screw screw--big-br"></span>
          </form>
        </div>

        <div
          className="section__canvas section__canvas--full section__canvas--third gradient-background"
          id="canvas3"
        ></div>
      </div>
    </>
  );
};

export default SignIn;
