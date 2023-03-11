import React from "react";
import { useNavigate } from "react-router";
import WestRoundedIcon from '@mui/icons-material/WestRounded';

export default function Login() {
  const Navigate = useNavigate();

  return (
      <section class="h-screen flex items-center justify-center bg-[#f7f5f3]">
        <div class="bg-white p-20 rounded-2xl">
        <button
          type="button"
          onClick={() => Navigate("/")}
          className="bg-[#355ffe] text-white h-10 rounded-xl w-40 flex items-center justify-center gap-1 group"
        >
          <WestRoundedIcon className="transition-transform transform translate-x-0 group-hover:-translate-x-2" />
          Home Page{" "}
        </button>
          <div class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div class="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://img.freepik.com/premium-vector/volunteering-volunteer-organization-collects-humanitarian-aid-volunteers-are-holding-letters_491047-317.jpg"
                class="w-full"
                alt="Sample_image"
              />
            </div>
            <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form>
                <div class="flex flex-row items-center justify-center lg:justify-start">
                  <p class="mb-0 mr-4 text-lg">Sign in with</p>
                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal bg-[#355ffe] text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    {/* <!-- Facebook --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal bg-[#355ffe] text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    {/* <!-- Twitter --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    class="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal bg-[#355ffe] text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                  >
                    {/* <!-- Linkedin --> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="mx-auto h-3.5 w-3.5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                    </svg>
                  </button>
                </div>

                <div class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p class="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>

                {/* <!-- Email input --> */}
                <div class="mb-6 flex flex-col">
                  <label htmlFor="email" className="mb-1">
                    Email Address:
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="h-10 border border-[#355ffe] rounded-md pl-2"
                    placeholder="Please Enter Email Address"
                  />
                </div>

                {/* <!-- Password input --> */}
                <div class="mb-6 flex flex-col">
                  <label htmlFor="password" className="mb-1">
                    Password:
                  </label>
                  <input
                    id="password"
                    type="password"
                    className="h-10 border border-[#355ffe] rounded-md pl-2"
                    placeholder="Please Enter Your Password"
                  />
                </div>

                <div class="mb-6 flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      className="w-5 h-5"
                      type="checkbox"
                      id="exampleCheck2"
                    />
                    <label
                      class="inline-block pl-1 hover:cursor-pointer"
                      for="exampleCheck2"
                    >
                      Remember me
                    </label>
                  </div>
                  <a href="#!">Forgot password?</a>
                </div>

                <div class="text-center lg:text-left">
                  <button
                    type="button"
                    class="inline-block rounded bg-primary px-7 h-10 bg-[#355ffe] text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="light"
                    onClick={() => Navigate("/dashboard")}
                  >
                    Login
                  </button>
                  <p class="mt-2 mb-0 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <a
                      href="#!"
                      class="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
  );
}
