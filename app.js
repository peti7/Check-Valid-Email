'use strict';

const input = document.querySelector("input");
const errorIcon = document.querySelector(".error-icon");
const checkIcon = document.querySelector(".check-icon");
const icons = document.querySelector(".icons");
const text = document.querySelector(".text");
const validEmail =
  /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

input.addEventListener("keyup", () => {
    if(input.value.match(validEmail)){
        input.style.borderColor = "rgba(34, 192, 34, 0.904)";
        errorIcon.style.display = "none";
        checkIcon.style.display = "inline";
        text.textContent = "";
    }else{
        checkIcon.style.display = "none";
        errorIcon.style.display = "inline";
        input.style.borderColor = 'rgba(255, 0, 0, 0.774)';
        text.textContent = "Please enter valid email"
    }
    if(input.value === ""){
        input.style.borderColor = "#ccc";
        icons.style.display = "none";
        text.textContent = "";
    }else{
        icons.style.display = "block";
    }
});