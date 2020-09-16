import React from "react";
import { Provider } from "react-redux";
import "./App.scss";
import store from "./redux/store";
import Header from "./components/Header";
import Main from "./components/main/Main";
const App = () => {
  return (
    <Provider store={store}>
      <Header></Header>
      <div className="app">
        <Main></Main>
        <div>
          <h1>Setup React Redux</h1>
        </div>
      </div>
    </Provider>
  );
};

export default App;
