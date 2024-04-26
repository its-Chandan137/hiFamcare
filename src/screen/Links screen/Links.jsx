import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  BodyOne,
  BodyTwo,
  Caption,
  Span,
} from "../../components/common/CustomComponents";
import { MdArrowCircleRight } from "react-icons/md";
import { linkData } from "../../assets/data/data";

export const Links = () => {
  return (
    <>
      <div className="flex justify-center items-center w-full h-[80lvh] mt-20 gap-6 flex-col ">
        {linkData.map((x, i) => {
          return (
            <a
              href={x.link}
              className={`linkPill w-[40%] h-[60px] overflow-hidden flex gap-3 justify-start items-center bg-gray-800 border border-transparent hover:border-primary-darkBlue transition rounded-full p-2`}
            >
              <div className="w-[15%] h-full flex justify-center items-center">
                <FaGithub size={40} />
              </div>
              <div className="w-[65%] h-full flex flex-col justify-center overflow-y-scroll">
                <div>
                  <Caption>
                    <a href="https://github.com/its-Chandan137/hiFamcare">
                      {x.name}
                    </a>
                  </Caption>
                  <Span>{x.description}</Span>
                </div>
              </div>
              <div className="relative w-[20%] h-full flex justify-center items-center">
                <input type="checkbox" id={`${x.name}`} className="moveInput mr-4" />
                <div className="relative bg-gray-900 h-7 w-24 rounded-full flex justify-start items-center">
                  <label for={`${x.name}`} className="moveLabel absolute translate-x-16 bg-red-500 h-6 w-6 rounded-full flex justify-center items-center">
                    {/* <MdArrowCircleRight
                      size={35}
                      className="movingBtn absolute"
                    /> */}
                  </label>
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </>
  );
};
