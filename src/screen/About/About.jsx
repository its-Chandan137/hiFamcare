import React, { useEffect } from "react";
import { BodyTwo, Title } from "../../components/common/CustomComponents";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { CustomerViews } from "../../router";

export const About = () => {
  const one = () => {
    console.log("one");
  };
  function two() {
    console.log("two");
  }

  useEffect(() => {});
  return (
    <>
      <div className="w-full h-[600px] flex justify-between flex-row mt-20 p-28">
        <div className="w-3/4 h-full px-6">
          <div>
            <Title level={2} className="text-primary-blue uppercase">
              About Us
            </Title>
          </div>
          <hr className="opacity-35" />
          <div className="w-3/4 flex justify-start flex-col mt-2">
            <BodyTwo>A Brief Story About Smart Health Assist</BodyTwo>
            <p className="mt-2">
              At the heart of our mission is the belief that every family member
              deserves personalized care and support. Our platform seamlessly
              integrates health data, medical records, and real-time assistance
              to provide comprehensive healthcare solutions tailored to each
              family member's unique needs.
            </p>
            <p className="mt-4">
              With our user-friendly interface and intuitive design, families
              can effortlessly track their health metrics, communicate with
              healthcare providers, and access resources to make informed
              decisions about their care.
            </p>
          </div>
          <div className="mt-6">
            <button onClick={two} className="primary-btn">
              Read More
            </button>
          </div>
          <div className="h-12 w-36 mt-2 py-1 px-3">
            <div className="h-full w-full flex gap-4 justify-center items-center">
              <FaInstagram
                size={26}
                className="text-primary-gray hover:text-white transition"
              />
              <FaFacebook
                size={26}
                className="text-primary-gray hover:text-white transition"
              />
              <FaTwitter
                size={26}
                className="text-primary-gray hover:text-white transition"
              />
            </div>
          </div>
        </div>

        <div className="w-1/4 h-full border border-dashed flex justify-center items-center font-semibold">
          Logo
        </div>
      </div>

      <div>
        <CustomerViews/>
      </div>
    </>
  );
};
