"use client";

import React from "react";
import { Form } from "./Form";
import { useFormik } from "formik";
import { AuthInput } from "../Inputs/AuthInput";
import Link from "next/link";
import axios from "axios";
import { PostRequest } from "@/app/RestClient/RequestTypes";
import { apiUrls } from "@/app/RestClient/ApiUrls";

export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
        const errors:any = {}
        if(!values.email){
            errors.email = 'Email is required'
        }
        if(!values.password){
            errors.password = 'Password is required'
        }
        return errors
    },
    onSubmit: (values) => {
      axios.post('http://localhost:5000/api/auth/login',values)
      .then(res=>console.log(res))
      .catch(err=>console.log(err))
    },
  });

  return (
    <Form
      className="w-full flex flex-col gap-[15px]"
      onSubmit={formik.handleSubmit}
    >
      <AuthInput
        name="email"
        id="email"
        label="Email"
        placeholder="Email"
        onChange={formik.handleChange}
        feedback={formik.errors.email}
        required
      />
      <AuthInput
        name="password"
        id="password"
        label="Password"
        placeholder="Password"
        type="password"
        onChange={formik.handleChange}
        feedback={formik.errors.password}
        required
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
        <Link
          className=" text-gray font-medium text-[14px] tracking-[0.5px] uppercase"
          href={"/"}
        >
          Back
        </Link>
      </div>
    </Form>
  );
};
