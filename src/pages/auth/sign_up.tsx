import Link from "next/link";
import React, { ChangeEvent, FormEvent, Fragment, useState } from "react";
import { Input } from "../../components/Input";
import { NeuButton } from "../../components/NeuButton";
import PasswordEye from "../../components/PasswordEye";
import { CardContainer, Navbar } from "../../features/auth";
import MoonLoader from "react-spinners/MoonLoader";

export default function SignUp() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <Navbar />

      <CardContainer>
        <form onSubmit={handleSubmit} className="space-y-6 mt-8">
          <div>
            <label
              htmlFor="nall"
              className="block text-sm font-medium leading-6 text-black"
            >
              Full name
            </label>
            <div className="mt-2">
              <Input
                className="w-full"
                name="name"
                autoComplete="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-black"
            >
              Email address
            </label>
            <div className="mt-2">
              <Input
                className="w-full"
                name="email"
                autoComplete="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
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
            <NeuButton className="w-fit">
              <MoonLoader
                size={20}
                color="white"
                className="mr-2 text-white"
                loading={isLoading}
              />
              Sign up
            </NeuButton>
          </div>
        </form>
      </CardContainer>
    </Fragment>
  );
}
