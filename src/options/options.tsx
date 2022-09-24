import * as React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("manifest-option") as HTMLElement
);

const Options = () => {
  return (
    <>
      <div>Hi I am Option</div>
    </>
  );
};

root.render(
  <React.StrictMode>
    <Options />
  </React.StrictMode>
);
