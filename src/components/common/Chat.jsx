import React, { useState, useEffect } from "react";
import { CustomNavLink2 } from "./CustomComponents";
import LogoImg from "../../assets/common/logo.png";
import { searchData } from "../../assets/data/data";
import { useNavigate } from "react-router-dom";

export const Chat = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);
  const [suggestion, setSuggestion] = useState([]);
  const nav = useNavigate();

  const initialMsg = [
    {
      id: 1,
      name: "Search for page...",
      path: "#",
    }
  ];

  const noResults = [
    {
      id: 222,
      name: "No Results found!",
      path: "#",
    }
  ];

  useEffect(() => {
    const fetchLink = () => {
      if (search.trim() === "") {
        setSuggestion(initialMsg);
      } else {
        const filteredData = searchData.filter((user) =>
          user.name.toLowerCase().includes(search.toLowerCase())
        );
        if (filteredData.length === 0) {
          setSuggestion(noResults);
        } else {
          setSuggestion(filteredData);
        }
      }
    };
    fetchLink();
  }, [search]);

  function handleKeyDown(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      if (suggestion.length > 0) {
        const ctrl = suggestion[selected].path;
        console.log("Selected Path:", ctrl);
        nav(ctrl);
        setSelected(0);
        setSearch("");
      }
    } else if (event.key === "ArrowRight" && selected < suggestion.length - 1) {
      event.preventDefault();
      setSelected(selected + 1);
    } else if (event.key === "ArrowLeft" && selected > 0) {
      event.preventDefault();
      setSelected(selected - 1);
    } else if (event.key === "Escape") {
      event.preventDefault();
      setSelected(0);
      setSearch("");
      openup();
    }
  }

  const openup = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <>
      <div className="overflow-hidden w-full h-full flex justify-center items-center rounded-full border-2 border-transparent hover:border-primary-darkBlue transition">
        <img
          src={LogoImg}
          alt="hi famcare"
          onClick={openup}
          className="text-blue-600 hover:text-blue-700 h-12 opacity-100 hover:opacity-70 transition"
        />
        <div onClick={openup} className="waves absolute -bottom-14 opacity-70">
          <div className="wave" id="wave1"></div>
          <div className="wave" id="wave2"></div>
          <div className="wave" id="wave3"></div>
          <div className="wave" id="wave4"></div>
        </div>
      </div>

      {chatOpen && (
        <div className="chatOpen">
          <div className="h-[200px] w-[200px] backdrop-blur-lg bg-transparent border border-primary-darkBlue fixed top-[28rem] right-[10.9rem] rounded-2xl">
            <ul className="flex flex-col gap-2 p-2 py-3 text-sm">
              <li>
                <CustomNavLink2
                  className="dark:hover:text-sky-400"
                  href="/login"
                >
                  Login
                </CustomNavLink2>
              </li>
              <li>
                <CustomNavLink2
                  className="dark:hover:text-sky-400"
                  href="/assistant"
                >
                  Assistant
                </CustomNavLink2>
              </li>
              <li>
                <ul className="linkShow suggestion-list w-full p-2 h-16 overflow-y-aut flex gap-3 flex-wrap justify-center items-center text-blue-500 text-lg">
                  {suggestion.map((user, i) => {
                    const isSelected = i === selected;
                    const className = `innerLink text-sm flex items-center gap-3 font-[cursive] dark:hover:text-sky-400 ${
                      isSelected ? "selected" : ""
                    }`;
                    return (
                      <li key={user.id}>
                        <CustomNavLink2
                          className={className}
                          href={user.path}
                          onClick={() => setSelected(i)}
                        >
                          {user.name}
                        </CustomNavLink2>
                      </li>
                    );
                  })}
                </ul>
              </li>
            </ul>
          </div>
          <div className="fixed top-[41.5rem] right-[10rem]">
            <input
              autoFocus
              className="w-[200px] h-10 mx-3 px-4 backdrop-blur-lg font-semibold border-blue-400 hover:border-opacity-75 rounded-2xl border-2 outline-none bg-transparent text-gray-400"
              type="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              onKeyDown={handleKeyDown}
            />
          </div>
        </div>
      )}
    </>
  );
};
