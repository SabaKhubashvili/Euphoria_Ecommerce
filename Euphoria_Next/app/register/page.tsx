import React from "react";
import { Container } from "../components/Container";
import { AuthForm } from "../components/Form/AuthForm";

const page = () => {

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
            <div className="flex flex-col items-start justify-start  sm:w-[600px] w-full px-[20px]">
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
