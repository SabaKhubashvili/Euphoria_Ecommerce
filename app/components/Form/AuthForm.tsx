"use client";

import React from "react";
import { Form } from "./Form";
import { useFormik } from "formik";
import { AuthInput } from "../Inputs/AuthInput";
import { MainButton } from "../buttons/MainButton";
import Link from "next/link";

export const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      firstname: "",
      lastname: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors: any = {};
      if(!values.firstname){
        errors.firstname = 'Firstname is required'
      }
      if(!values.lastname){
        errors.lastname = 'Lastname is required'
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 5) {
        errors.password = "Password length must be over 5 characters";
      } else if (!/\d/.test(values.password)) {
        errors.password = "Password must contain at least 1 number";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Passwords dont match";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <Form
      onSubmit={formik.handleSubmit}
      className="w-full flex flex-col xs:gap-[15px] gap-[25px] justify-start items-start"
    >
      <AuthInput
        id={"firstname"}
        name={"firstname"}
        placeholder={"Firstname"}
        label="Firstname"
        type={"text"}
        required
        feedback={formik.errors.firstname}
        onChange={formik.handleChange}
      />
      <AuthInput
        id={"lastname"}
        name={"lastname"}
        placeholder={"Lastname"}
        label="Lastname"
        type={"text"}
        required
        feedback={formik.errors.lastname}
        onChange={formik.handleChange}
      />
      <AuthInput
        id={"email"}
        name={"email"}
        placeholder={"Email"}
        label="Email"
        type={"text"}
        required
        feedback={formik.errors.email}
        onChange={formik.handleChange}
      />
      <AuthInput
        id={"password"}
        name={"password"}
        placeholder={"password"}
        label="password"
        type={"password"}
        required
        feedback={formik.errors.password}
        onChange={formik.handleChange}
      />
      <AuthInput
        id={"confirmPassword"}
        name={"confirmPassword"}
        placeholder={"Confirm password"}
        label="Confirm password"
        type={"password"}
        required
        feedback={formik.errors.confirmPassword}
        onChange={formik.handleChange}
      />
      <div className="flex justify-between items-center w-full xs:flex-nowrap flex-wrap">
        <button
          className={`w-fit  font-medium select-none
        tracking-[0.5px] uppercase bg-black
        lg:hover:bg-secondary text-white transition-colors duration-200
        px-[3rem] py-2
        `}
          type="submit"
        >
          Submit
        </button>
        <Link className=" text-gray font-medium text-[14px] tracking-[0.5px] uppercase" href={'/'}>
          Back
        </Link>
      </div>
    </Form>
  );
};
