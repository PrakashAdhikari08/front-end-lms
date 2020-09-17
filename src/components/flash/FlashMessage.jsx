import React, { useContext } from "react";
import StateContext from "../../context/StateContext";
import "./Flash.css";
import DispatchContext from "../../context/DispatchContext";

const FlashMessages = () => {
  const appState = useContext(StateContext);
  const appDispatch = useContext(DispatchContext);

  const message = appState.flashMessage.message;
  const showMessage = appState.flashMessage.showMessage;

  setTimeout(() => appDispatch({ type: "hideFlashMessage" }), 4000);

  return (
    <>
      {showMessage && (
        <div className="flash_main">
          <p>{message}</p>
        </div>
      )}
    </>
  );
};

export default FlashMessages;
