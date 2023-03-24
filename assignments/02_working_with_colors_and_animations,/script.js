"use strict";

const button = document.querySelector(".toggle_dark_mode");

const useDark = window.matchMedia("(prefers-color-scheme: dark)");

function toggleDarkMode(state) {
  document.documentElement.classList.toggle("dark-mode", state);
}
