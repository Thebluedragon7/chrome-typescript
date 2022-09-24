import React from "react";
import ReactDOM from "react-dom/client";
import App from "../components/App";

const root = ReactDOM.createRoot(
  document.getElementById("popup") as HTMLElement
);

const Popup = () => {
  return (
    <>
      <App />
    </>
  );
};

root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
