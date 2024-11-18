import React, { useState } from "react";
import logo from "../../asset/img/logo.svg";
import { useForm } from "react-hook-form";
import { SEND_OTP_API } from "../../apis/api";
import { Navigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toastError } from "../../../services/toastr.service";
import * as yup from "yup";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
});
const Forgot = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // await new Promise((resolve) => setTimeout(resolve, 2000));

      const response = await SEND_OTP_API({
        username: data?.name,
        email: data?.email,
        password: data?.password,
      });

      if (response?.success) {
        Navigate("/");
        setLoading(false);
      }

      console.log(data);
    } catch (e) {
      console.log("", e);
      toastError("");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* <!-- page wrap --> */}
      <div className="section section--content">
        <div className="section__content">
          {/* <!-- form --> */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="form form--content"
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

              {errors.confirmpassword && (
                <div className="text-danger">
                  {errors.confirmpassword.message}
                </div>
              )}
            </div>
            <div className="form__group form__group--checkbox">
              <input id="remember" name="remember" type="checkbox" />
              <label htmlFor="remember">
                I agree to the <a href="privacy.html">Privacy Policy</a>
              </label>
            </div>
            <input type="submit" className="form__btn" />

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
