// Variables
const form = document.querySelector(".top-banner form");
const input = document.querySelector(".top-banner input");
const msg = document.querySelector(".top-banner .msg");
const list = document.querySelector(".ajax-section .cities");

// Openweather API key
const apiKey = "dc6e3a6b851e183c0095950485f4c863";

form.addEventListener("submit", e => {
	e.preventDefault();
	let inputVal = input.value;
  
	//check if there's already a city
	const listItems = list.querySelectorAll(".ajax-section .city");
	const listItemsArray = Array.from(listItems);
  });