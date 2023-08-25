import React from "react";
import { Container } from "../components/Container";
import { SecondaryInput } from "../components/Inputs/SecondaryInput";
import { AuthInput } from "../components/Inputs/AuthInput";
import { Formik } from "formik";
import { Form } from "../components/Form/Form";
import { AuthForm } from "../components/Form/AuthForm";

const page = () => {
  const onSubmit = () =>{
    console.log('submit');
    
  }
  return (
    <main className=" pt-[129px]">
      <Container>
        <div>
          <p className="text-gray text-[14px]  text-center">
            Home / Create New Customer Account
          </p>
          <h1 className="text-[48px] leading-[68px] pt-[13px]  text-center ">
            Create New Customer Account
          </h1>

          <div className="mt-[24px] mb-[59px] pt-[53px] pb-[124px] border-[1px] border-solid border-divider
           flex justify-center items-center  flex-col
          
           ">
            <div className="flex flex-col items-start justify-start w-[500px]">
              <h2 className="text-[24px] leading-[68px]">
                Personal Information
              </h2>
              <AuthForm/>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
};
export default page;
