"use client";

import React from "react";
import { Form } from "./Form";
import { useFormik } from "formik";
import { AuthInput } from "../Inputs/AuthInput";

export const AuthForm = () => {
  const formik = useFormik({
    initialValues: {
        email: '',
        password: '',
      },
    validate: (values) => {
      const errors: any = {};

      if (!values.email) {
        errors.email = "Email is required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      console.log("submited");
    },
  });

  return (
    <Form onSubmit={formik.handleSubmit} className="w-full">
      <AuthInput
        id={'email'}
        name={'email'}
        placeholder={'Email'}
        label="Email"
        type={'text'}
        required
        feedback={formik.errors.email}
        onChange={formik.handleChange}
      />
      <button>submit</button>
    </Form>
  );
};
