import React, { useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import { BodyOne, Title } from "../common/CustomComponents";

export const Reports = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [repoDisplay, setRepoDisplay] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div id="family" className="w-full h-[80lvh]  px-16 mb-20">
        <div className="w-full h-full flex justify-start">
          <div className="search  h-[100%] w-1/4 p-2 pt-0 bg-slate-900 relative pointer-events-auto hidden lg:block inset-0 pb-10 pl-8 pr-6 overflow-y-auto">
            <div className="QuickSearch sticky top-0 h-12 w-full flex justify-center items-center">
              <button
                onClick={openModal}
                className="hidden h-9 w-full lg:flex items-center justify-start gap-4 text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-3 pr-3 bg-slate-800 highlight-white/5 hover:bg-slate-700"
              >
                <span>
                  <IoSearch size={21} />
                </span>
                <p className="w-2/3 flex font-semibold text-primary-gray mr-4">
                  Quick Search...
                </p>
                <p className="text-sm text-primary-darkBlue font-semibold animate-pulse">
                  click
                </p>
              </button>
            </div>

            <div className="div  overflow-hidden p-5">
              <ul className="fade">
                <li className="flex gap-5 items-center font-semibold">
                  <img src="../images/Male.png" alt="" className="h-10 w-10" />{" "}
                  Mr. Vijay Sai Ram
                </li>
                <li className="flex gap-5 items-center font-semibold">
                  <img
                    src="../images/Female.png"
                    alt=""
                    className="h-10 w-10"
                  />{" "}
                  Mrs. Angela
                </li>
                <li className="flex gap-5 items-center font-semibold">
                  <img
                    src="../images/Brother.png"
                    alt=""
                    className="h-10 w-10"
                  />{" "}
                  Mr. Shiv Sai Ram
                </li>
                <li>
                  <Title level={3} className="text-primary-gray">
                    Important Reports
                  </Title>
                  <BodyOne className="text-sm">Text one</BodyOne>
                  <ul>
                    <li>Pronouns</li>
                    <li>Pronouns</li>
                    <li>Pronouns</li>
                    <li>Pronouns</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-transparent border border-slate-800 rounded-md h-full w-3/4 px-1 py-5 ">
            <div className="flex justify-between items-center px-5">
              <Title level={3} className="text-primary-darkBlue mb-5">
                All Reports
                <BodyOne className="text-sm">text here</BodyOne>
              </Title>
              <div className="flex items-center text-sm">copy</div>
            </div>

            <div className="reports fade h-[80%] w-full flex flex-col justify-start overflow-hidden overflow-y-auto gap-2">
              <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                Reports
              </div>
              <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                Reports
              </div>
              <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                Reports
              </div>
              <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                Reports
              </div>
              <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                Reports
              </div>
              <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                Reports
              </div>
              <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                Reports
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <>
          <div className="overlay-bg" onClick={closeModal}>
            <div
              className="modal-overlay bg-slate-800 border border-transparent rounded-xl"
              onClick={closeModal}
            >
              <div
                className="w-full h-14 mb-1 mt-1 flex justify-start border border-b-gray-500 border-t-0 border-l-0 border-r-0"
                onClick={(e) => e.stopPropagation()}
              >
                <input
                  type="text"
                  className="w-[90%] h-full mx-5 px-4 border-none outline-none bg-transparent text-gray-400"
                  placeholder="Search..."
                />
              </div>
              <div
                className="modal-content flex justify-between mx-5"
                onClick={(e) => e.stopPropagation()}
              >
                <div className=" w-3/5 h-[400px] p-2 relative">
                  <button className="feature-btn bg-indigo-500 mb-5 fixed rounded-sm">
                    Reports
                  </button>

                  <div className="pt-1">
                    <div className="flex items-center gap-1 mt-10">
                      <div className="reports fade h-[350px] w-full flex flex-col justify-start overflow-hidden overflow-y-scroll gap-2">
                        <div
                          onClick={setRepoDisplay}
                          className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center"
                        >
                          Reports
                        </div>
                        <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                          Reports
                        </div>
                        <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                          Reports
                        </div>
                        <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                          Reports
                        </div>
                        <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                          Reports
                        </div>
                        <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                          Reports
                        </div>
                        <div className="blocks w-full min-h-28 rounded-lg bg-slate-700 flex justify-center items-center">
                          Reports
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-2/5 h-[386px] overflow-hidden p-2 mt-4 bg-slate-700 rounded-md">
                  <div className="p-1  h-full flex flex-col gap-2">
                    <h2 className="text-center underline underline-offset-4">
                      Report
                    </h2>
                    <p className="text-gray-300">
                      Lorem ipsum dolor sit consectetur adipisicing elit.
                      Dolorem nulla nesciunt ducimus maiores, eum facere officia
                      aspernatur ipsum quam ullam hic ab veritatis dolore
                      perferendis et recusandae quia, nisi tempore?
                    </p>
                  </div>
                </div>

                <hr className="my-5" />

                <div className="flex flex-col gap-4"></div>
                <button
                  className="close-btn overflow-hidden absolute top-0 right-0 w-16 h-[60px] flex justify-center items-center bg-primary-darkBlue border border-transparent text-white rounded-tr-xl"
                  onClick={closeModal}
                >
                  <IoClose size={27} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
