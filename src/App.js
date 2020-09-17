import React, { useReducer, useEffect } from "react";
import { useImmerReducer } from "use-immer";
import "./App.css";

import Routing from "./AppRouting";
import StateContext from "./context/StateContext";
import FlashMessages from "./components/flash/FlashMessage";
import DispatchContext from "./context/DispatchContext";
import { storeInLocal } from "./storage/LocalStorage";

function App(props) {
  const initialState = {
    user: {
      userId: localStorage.getItem("userId"),
      username: localStorage.getItem("username"),
      role: localStorage.getItem("Role"),
      name: localStorage.getItem("name"),
      jwt: localStorage.getItem("token"),
    },
    userLoggedIn: Boolean(localStorage.getItem("token")),
    flashMessage: { showMessage: false, message: "I love You" },
    picChanged: false,
  };

  function ourReducer(draft, action) {
    switch (action.type) {
      case "login":
        draft.userLoggedIn = true;
        draft.user = action.data;
        break;

      case "logout":
        draft.userLoggedIn = false;
        break;

      case "invalidMessage":
        draft.flashMessage.showMessage = true;
        draft.flashMessage.message = action.message;
        return;

      case "hideFlashMessage":
        draft.flashMessage.showMessage = false;
        return;
      case "change":
        draft.picChanged = !draft.picChanged;
        console.log(draft.picChanged);

        return;

      default:
        break;
    }
  }

  const [state, dispatch] = useImmerReducer(ourReducer, initialState);

  useEffect(() => {
    if (state.userLoggedIn) {
      storeInLocal(state.user);
    } else {
      localStorage.clear();
    }
  }, [state.userLoggedIn]);

  return (
    <div className="App">
      <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
          <Routing />
        </DispatchContext.Provider>
      </StateContext.Provider>
    </div>
  );
}

export default App;
