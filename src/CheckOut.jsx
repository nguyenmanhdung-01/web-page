import React from "react";

const CheckOut = () => {
  return (
    <div className="mx-auto container mt-10">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-10">
        <div>
          <h1 className="text-[#000] text-[34px] font-medium leading-6">
            Checkout
          </h1>
          <span className="text-[#000] my-10 inline-block">
            Returning customer?{" "}
            <span className="text-[#8F78F0]">Click here to login</span>
          </span>
          <h1 className="text-[#000] text-[24px] font-medium leading-6">
            Billing details
          </h1>

          <form className="mt-10 text-[#7F7F7F]">
            <div class="grid gap-6 mb-6 md:grid-cols-2">
              <div>
                <label for="first_name" class="block mb-2 text-sm font-medium ">
                  First name
                </label>
                <input
                  type="text"
                  id="first_name"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="John"
                  required
                />
              </div>
              <div>
                <label for="last_name" class="block mb-2 text-sm font-medium ">
                  Last name
                </label>
                <input
                  type="text"
                  id="last_name"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Doe"
                  required
                />
              </div>
              <div className="col-span-2">
                <label for="company" class="block mb-2 text-sm font-medium ">
                  Company Name (optional)
                </label>
                <input
                  type="text"
                  id="company"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Company"
                  required
                />
              </div>
              <div className="col-span-2">
                <label for="countries" class="block mb-2 text-sm font-medium ">
                  Country / Region
                </label>
                <select
                  id="countries"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                >
                  <option selected>Choose a country</option>
                  <option value="US">United States</option>
                  <option value="CA">Canada</option>
                  <option value="FR">France</option>
                  <option value="DE">Germany</option>
                </select>
              </div>
              <div className="col-span-2">
                <label for="address" class="block mb-2 text-sm font-medium ">
                  Street address
                </label>
                <input
                  type="text"
                  id="address"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="House number and street name"
                  required
                />
                <input
                  type="text"
                  id="address"
                  class="mt-2 bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Apartment, suite, unit, etc. (optional)"
                  required
                />
              </div>
              <div className="col-span-2">
                <label for="visitors" class="block mb-2 text-sm font-medium ">
                  Town / City
                </label>
                <input
                  type="text"
                  id="visitors"
                  class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="col-span-2">
              <label for="countries" class="block mb-2 text-sm font-medium ">
                State
              </label>
              <select
                id="countries"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              >
                <option selected>Choose a country</option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div class="mb-6 col-span-2">
              <label for="phone" class="block mb-2 text-sm font-medium ">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="0938363"
                required
              />
            </div>

            <div class="mb-6 col-span-2">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="john.doe@company.com"
                required
              />
            </div>

            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 "
            >
              Order notes (optional)
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 w-full text-sm  bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Notes about your order, e.g. special notes for delivery."
            ></textarea>
            <div class="flex items-start mb-6">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                  required
                />
              </div>
              <label for="remember" class="ms-2 text-sm font-medium  ">
                Keep me up to date with everything I need for digital
                excellence.
              </label>
            </div>
          </form>
        </div>
        <div className=" px-14">
          <div className="bg-slate-100 px-10 py-8 mt-16">
            <h1 className="text-[#000] text-[24px] font-medium leading-6 mb-6">
              Your Order
            </h1>
            <div className="flex justify-between items-center">
              <div>
                <h2>Product</h2>
                <p className="font-medium my-4">Sprint subscription</p>
                <p className="my-4">Subtotal</p>
                <br />
                <p className="my-4">Total</p>
                <p className="my-4">Subtotal</p>
                <p className="my-4">Recurring total</p>
              </div>
              <div>
                <h2>Subtotal</h2>
                <p className="my-4">$2,999 every 2 weeks</p>
                <p className="my-4">$2,999</p>
                <p className="my-4">Recurring totals</p>
                <p className="my-4">$2,999</p>
                <p className="my-4">$2,999 every 2 weeks</p>
                <p className="my-4">
                  $2,999 every 2 weeks
                  <span className="block text-[11px]">
                    First renewal: May 30, 2024
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
