import React from "react";
import Button from "./Button";
const FormSection = () => {
  return (
    <div className="bg-#f3f2ff min-h-screen flex flex-col lg:flex-row px-20 py-24">
      <div className=" text-left mb-8 lg:mb-0">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-10 w-80  capitalize">
            Let’s talk about your project
          </h2>
          <p className="text-gray-700 font-light mb-10 w-80 lg:w-2/3 ">
            Do you have a project in mind, that you feel our approach would work
            well for? <br></br>
            <br></br>We’re always happy to discuss your project with you and put
            together a free proposal.
          </p>
        </div>
      </div>

      <div className="lg:w-1/2 item-center">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-bold mb-10">
            Just fill out the form below to get started
          </h3>
          <form>
            <div className="mb-4">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Email"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="text"
                id="company"
                name="company"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Company"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                id="phone"
                name="phone"
                className="border border-gray-300 rounded-md px-3 py-2 w-full"
                placeholder="Phone number"
                required
              />
            </div>
            <div className="mb-4">
              <input
                type="file"
                id="file"
                name="file"
                className="border border-gray-300 rounded-md px-3 py-2 w-full "
                placeholder="Send us your brief"
                required
              />
            </div>
            <div className="mb-4">
              <textarea
                id="message"
                name="message"
                className="border border-gray-300 rounded-md px-3 py-2 w-full h-32"
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div className="mb-4">
              <input type="checkbox" id="agree" name="agree" className="mr-2" />
              <label htmlFor="agree" className="text-gray-700">
                I agree to have my information stored{" "}
                <a href="/" className="text-red-500">
                  Privacy Policy.
                </a>
              </label>
            </div>
            <Button
              text="Send your message"
              type="submit"
              className="  py-2 rounded-none w-full lg:w-full "
              variant="button4"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
