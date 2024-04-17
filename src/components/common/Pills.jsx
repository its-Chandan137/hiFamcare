import React from "react";
import { useSelector } from "react-redux";
import { BodyOne } from "../common/CustomComponents";


export const Pills = ({className, data, prob}) => {
    // const pillStyle = "Pill bloodPressure w-1/3 h-32 rounded-2xl shadow-md overflow-hidden";

    const pillStyle = `${className} h-32 relative z-10 col-span-3 bg-slate-800 rounded-xl shadow-lg dark:shadow-none dark:ring-1 dark:ring-inset dark:ring-white/10`;



  return (
    <>
      <div className={`${pillStyle} ${className}`}>
        <div className="relative flex text-slate-400 text-sm leading-6">
            <div className="mt-1 flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center">
                {data.title}
            </div>
            <div className="flex-auto flex pt-2 rounded-tr-xl overflow-hidden">
                <div className="flex-auto -mr-px bg-slate-700/50 border border-slate-500/30 rounded-tl">
                    <p className="mt-2 mr-2 text-xs flex justify-end">Last checked : {data.lastChecked}</p>
                </div>
            </div>
        </div>

        <div className="relative">
            <div className="h-[80px] w-5/6 text-sm leading-6 text-slate-50 flex ligatures-none overflow-auto">
                <data className="w-1/3 h-[90px] p-5 flex flex-col justify-center items-center">
                    <img
                        src="../images/heart.gif"
                        alt=""
                        className="h-[30px] w-[30px]"
                        />
                    <span></span>
                </data>
                <div className="w-2/3 max-h-max p-3 overflow-hidden overflow-y-auto relative">
                    <p className="text-primary-gray">
                        Lorem ipsum dolor, sit  dolorem quae in adipisci officia
                    </p>
                    <details className="text-primary-darkBlue">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elitpsum dolor, sit amet consectetur adipisicing elit.psum dolor, sit amet consectetur adipisicing elit Quaerat, expedita ex enim deserunt dolorem quae in adipisci officia
                    </details> 
                </div>
            </div>
            {/* <BodyOne className="text-sm  absolute right-5 top-10">Weight : <span>58kg</span></BodyOne> */}
        </div>
      </div>
    </>
  );
};
