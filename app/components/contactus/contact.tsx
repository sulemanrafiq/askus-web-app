"use client";

import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";

export default function ContactForm() {
  const [errorMsg, setErrorMsg] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setErrorMsg("");

    if (!firstName || !lastName || !email || !subject || !message) {
      setErrorMsg("Please fill out all fields");
      window.scrollTo(0, 0);
      return;
    }
  };

  return (
    <div className="max-w-[600px] w-full">
      <div
        className={`${
          errorMsg ? "" : "w-0 h-0 pointer-events-none opacity-0"
        } transition-all duration-700 bg-warning rounded-lg py-2 px-4 mb-3`}
      >
        <p className="">{errorMsg}</p>
      </div>

      <form
        onSubmit={(e: any) => handleSubmit(e)}
        className="text-black w-full md:h-[600px] sm:h-auto mb-4 border-t-primary border-t-[8px]  bg-white border-2 rounded-lg shadow-xl pt-10 md:px-8 px-2 flex flex-col gap-4"
      >
        <div className="md:flex justify-center sm:flex-col md:flex-row  items-center gap-4">
          <div className="flex w-full flex-col">
            <h1 className="text-black font-medium pl-2">First Name <span className="text-danger">*</span></h1>
            <Input
              type="text"
              required
              variant="bordered"
              label="Enter your FirstName"
              className=""
              onChange={(e: any) => setFirstName(e.target.value)}
            />
          </div>
          <div className="flex w-full flex-col">
            <h1 className="text-black font-medium pl-2">Last Name <span className="text-danger">*</span></h1>
            <Input
              type="text"
              required
              variant="bordered"
              label="Enter your FirstName"
              className="outline-"
              onChange={(e: any) => setLastName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <h1 className="text-black font-medium pl-2">Email <span className="text-danger">*</span></h1>
          <Input
            type="Email"
            required
            variant="bordered"
            label="Email"
            className="outline-"
            onChange={(e: any) => setEmail(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-medium pl-2">Subject <span className="text-danger">*</span></h1>
          <Input
            type="text"
            required
            variant="bordered"
            label="Select"
            className=""
            onChange={(e: any) => setSubject(e.target.value)}
          />
        </div>
        <div className="flex flex-col">
          <h1 className="text-black font-medium pl-2">How can we help? <span className="text-danger">*</span></h1>
          <Textarea
          required
            label="Enter your message..."
            // placeholder=""
            variant="bordered"
            className="w-full h-[150px]"
            onChange={(e: any) => setMessage(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-center ">
          <Button
          aria-label="submit button"
            type="submit"
            className=" bg-primary mb-10 text-white rounded-[10px] w-full"
            size="lg"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
