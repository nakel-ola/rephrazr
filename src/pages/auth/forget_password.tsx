import { CardContainer, Navbar } from "@/features/auth";
import React, { FormEvent, Fragment, useState } from "react";
import { MoonLoader } from "react-spinners";
import { Input } from "../../components/Input";
import { NeuButton } from "../../components/NeuButton";

export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <Fragment>
      <Navbar />

      <CardContainer
        showGoogle={false}
        title="Reset your password"
        link={{
          href: "/auth/sign_in",
          label: "Back to login",
          title: "Changed your mind?",
        }}
      >
        <form onSubmit={handleSubmit} className="space-y-6 mt-0">
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
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
              Send password reset
            </NeuButton>
          </div>
        </form>
      </CardContainer>
    </Fragment>
  );
}
