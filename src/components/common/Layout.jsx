import { useEffect } from "react";
import { Chat } from "./Chat";
import { Footer } from "./Footer";
import { Header } from "./Header";
import PropTypes from "prop-types";
import { AccountAction } from "../../redux/slices/accountSlice";
import { useDispatch, useSelector } from "react-redux";
import { Rain } from "./Rain";

export const Layout = ({ children }) => {
  const chatOpen = useSelector((state) => state.account.chatOpen);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        console.log("Escape key pressed");
        dispatch(AccountAction.openingChat(!chatOpen));
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [chatOpen, dispatch]);

  return (
    <div className="relative">
      <Header />
      <main style={{ minHeight: "90lvh" }}>{children}</main>
      <div>
        <button className="chat fixed top-[40rem] right-[4rem] rounded-full w-20 h-20 overflow-hidden">
          <Chat />
        </button>
        <div className="fixed top-[42rem] right-[4rem] w-20 h-24">
          <Rain />
        </div>
      </div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.isRequired,
};
