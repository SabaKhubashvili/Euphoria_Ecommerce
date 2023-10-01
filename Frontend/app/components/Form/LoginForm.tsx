"use client";

import React from "react";
import { Form } from "./Form";
import { useFormik } from "formik";
import { AuthInput } from "../Inputs/AuthInput";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { ToastContainer, toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = () => {
  const router = useRouter();
  const formik = useFormik({
    validateOnBlur:false,
    validateOnChange:false,
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: any = {};
      if (!values.email) {
        errors.email = "Email is required";
      }
      if (!values.password) {
        errors.password = "Password is required";
      }
      return errors;
    },
    onSubmit: async (values) => {
      try {
        const res = await RestClient.postRequest(BaseUrl.login, values);
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 3);
        const { username, email } = res.data;
        setCookie("accessToken", res.data.accessToken, {
          expires: expirationDate,
        });
        localStorage.setItem("userInfo", JSON.stringify({ username, email }));
        router.refresh();
        router.push("/");
      } catch (err:any) {
        toast.error(err.response.data.message, {
          position: "top-center",
          autoClose: 2500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      }
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
