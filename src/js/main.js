import "../css/style.css";

import "./navigation.js";
import { renderAll } from "./render.js";
import { observeReveals } from "./observer.js";

document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    observeReveals();
});
