import React from "react";
import * as ReactDOMClient from "react-dom/client";
import App from "./App.js";

const container = document.getElementById("app");
// Create a root.
const root = ReactDOMClient.createRoot(container);
// Initial render: Render an element to the root.
root.render(<App />);
