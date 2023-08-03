import { Input } from "@/components/Input";
import { NeuButton } from "@/components/NeuButton";
import PasswordEye from "@/components/PasswordEye";
import { CardContainer, Navbar } from "@/features/auth";
import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { MoonLoader } from "react-spinners";

export default function ChangePassword() {
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const [isVisible, setIsVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Navbar />

      <CardContainer showGoogle={false} title="Reset your password">
        <form onSubmit={handleSubmit} className="space-y-6 mt-0">
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-black "
            >
              Password
            </label>

            <div className="mt-2 w-full">
              <Input
                className="w-full"
                name="password"
                required
                type={isVisible ? "text" : "password"}
                value={form.password}
                onChange={handleChange}
                endIcon={
                  <PasswordEye
                    isVisible={isVisible}
                    onClick={() => setIsVisible(!isVisible)}
                  />
                }
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium leading-6 text-black "
            >
              Confirm Password
            </label>

            <div className="mt-2 w-full">
              <Input
                className="w-full"
                name="confirmPassword"
                required
                type={isVisible ? "text" : "password"}
                value={form.confirmPassword}
                onChange={handleChange}
                endIcon={
                  <PasswordEye
                    isVisible={isVisible}
                    onClick={() => setIsVisible(!isVisible)}
                  />
                }
              />
            </div>
          </div>

          <div>
            <NeuButton className="w-fit">
              <MoonLoader
                size={20}
                color="white"
                className="mr-2 text-white"
                loading={isLoading}
              />
              Update password
            </NeuButton>
          </div>
        </form>
      </CardContainer>
    </Fragment>
  );
}
