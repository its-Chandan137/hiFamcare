import React, { useState } from "react";
import { Pills } from "../common/Pills";
import Slider from "react-slick";
import { Reports, memberInfo, pillData } from "../../router";
import PropTypes from "prop-types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useSelector } from "react-redux";
import { BodyOne } from "../common/CustomComponents";

export const Hero = () => {

    function SampleNextArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="absolute bottom-0 left-1/2 lg:left-1/2 slider-btn"
            onClick={onClick}
          >
            <button className="next">
              <MdKeyboardArrowRight size={50} />
            </button>
          </div>
        );
      }
    
      function SamplePrevArrow(props) {
        const { onClick } = props;
        return (
          <div
            className="absolute bottom-0 bg-white text-primary left-[40%] lg:left-[45.5%] slider-btn z-10"
            onClick={onClick}
          >
            <button className="next">
              <MdKeyboardArrowLeft size={50} />
            </button>
          </div>
        );
      }

  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => (
        <div style={{
            color: 'white'
        }}>
            <ul className="dots" style={{color: "white"}}>{dots}</ul>
        </div>
    )
  };

  const member = useSelector((state)=> state.memberInfo)

//   console.log(member)

  return (
    <div className="slideContainer overflow-y-scroll">
      <section className="h-lvh relative z-1 slides  border-t-0 border-r-0 border-l-0 border-slate-600 border-opacity-35">
        <Slider {...settings}>
          {member.map((item) => (
            <MemberDetails
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              relation={item.relation}
              problem={item.problem}
              image={item.image}
            />
          ))}
        </Slider>
      </section>
      <section className="slides">
        <Reports/>
      </section>
    </div>
  );
};

export const MemberDetails = ({ id, title, description, relation, problem, image }) => {

    console.log(problem)

  return (
    <>
      <div className="mt-20 min-h-[80lvh]">
        <div className="w-full h-full bg-transparent flex justify-between items-center box-border px-8">
          <section className="w-[56%] min-h-full pl-16 py-12">
            <head className="mb-10 md:flex md:items-start">
              <div className="flex-auto max-w-4xl relative">
                <a href="#family" className="mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400 animate-pulse">
                  {relation}
                </a>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200">
                  {title}
                </h1>
              </div>
            </head>
            <div className="moniters flex flex-wrap justify-center items-start gap-3 w-[750px] h-[300px] border border-t-0 border-b-0 border-l-0 border-slate-600 border-opacity-35 my-4 p-2 overflow-y-auto overflow-hidden">
              {pillData.map((x, i) => (
                <Pills key={i} data={x} className={x.size} prob={problem}/>
              ))}
            </div>
          </section>

          <section className="h-full w-2/5 py-5 mt-16">
            <div className="flex justify-center items-center h-full w-full">
              <img
                src={image}
                alt="hi famcare"
                className="h-96 bigLogo"
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
