"use client";

import React, { useState } from "react";
import { Form } from "./Form";
import { useFormik } from "formik";
import { AuthInput } from "../Inputs/AuthInput";
import Link from "next/link";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import RestClient from "@/app/RestClient/RequestTypes";
import BaseUrl from "@/app/RestClient/ApiUrls";
import { toast  } from "react-toastify";

export const LoginForm = () => {
  const router = useRouter();
  const [isLoading,setIsLoading] = useState<boolean>(false)

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
      setIsLoading(true)
      try {
        const res = await RestClient.postRequest(BaseUrl.login, values).finally(()=>{setIsLoading(false)});
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 3);
        const { firstname, email } = res.data;
        setCookie("accessToken", res.data.accessToken, {
          expires: expirationDate,
        }); 
        localStorage.setItem("userInfo", JSON.stringify({ firstname, email }));
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
        disabled={isLoading}
        value={formik.values.email}
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
        disabled={isLoading}
        value={formik.values.password}
      />
      <div className="flex justify-between items-center w-full xs:flex-nowrap flex-wrap">
        <button
          className={`w-fit  font-medium select-none
        tracking-[0.5px] uppercase bg-black
        lg:hover:bg-secondary text-white transition-colors duration-200
        px-[3rem] py-2 
        ${isLoading && 'cursor-not-allowed opacity-75'}
        `}
          type="submit"
          disabled={isLoading}
        >
          Submit
        </button>
        <Link
          className={` text-gray font-medium text-[14px] tracking-[0.5px] uppercase select-none transition-all duration-200 ${isLoading && 'opacity-75 cursor-not-allowed'}`}
          href={"/"}
          aria-disabled={isLoading}
        >
          Back
        </Link>
      </div>
    </Form>
  );
};
