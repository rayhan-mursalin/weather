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

	if (listItemsArray.length > 0) {
		const filteredArray = listItemsArray.filter(el => {
		  let content = "";
		  //athens,gr
		  if (inputVal.includes(",")) {
			//athens,grrrrrr->invalid country code, so we keep only the first part of inputVal
			if (inputVal.split(",")[1].length > 2) {
			  inputVal = inputVal.split(",")[0];
			  content = el
				.querySelector(".city-name span")
				.textContent.toLowerCase();
			} else {
			  content = el.querySelector(".city-name").dataset.name.toLowerCase();
			}
		  } else {
			//athens
			content = el.querySelector(".city-name span").textContent.toLowerCase();
		  }
		  return content == inputVal.toLowerCase();
		});
  });