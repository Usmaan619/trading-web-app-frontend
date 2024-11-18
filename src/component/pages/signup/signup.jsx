import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import logo from "../../asset/img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import { SINGUP_API } from "../../apis/api";
import { toastError } from "../../../services/toastr.service";

// Validation schema
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .trim() // Removes unnecessary spaces
    .email("Enter a valid email address (e.g., user@example.com)") // Example format for clarity
    .matches(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      "Email must be in a proper format and not contain spaces"
    ) // Ensures no spaces or invalid characters
    .required("Email is required"),
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
  agree: yup.boolean().oneOf([true], "You must agree to the Privacy Policy"),
});

const SignUp = () => {
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

      const response = await SINGUP_API({
        username: data?.name,
        email: data?.email,
        password: data?.password,
      });

      if (response?.success) {
        navigate("/");
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
                HTML Template
              </span>
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Name"
                {...register("name")}
                required
              />
              {errors.name && (
                <p className="form__error">{errors.name.message}</p>
              )}
            </div>

            <div className="form__group">
              <input
                type="text"
                className="form__input"
                placeholder="Email"
                {...register("email")}
                required
              />
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
              {errors.password && (
                <p className="form__error">{errors.password.message}</p>
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
                "Sign Up"
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
              Already have an account? <NavLink to="/signIn">Sign in!</NavLink>
            </span>

            <span className="block-icon block-icon--purple">
              <NavLink to="/">
                <i className="ti ti-logout"></i>
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

export default SignUp;
