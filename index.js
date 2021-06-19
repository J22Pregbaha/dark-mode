// Select the stylesheet <link>
const theme = document.querySelector("#theme-link");
const fancyButton = document.querySelector(".container");

fancyButton.addEventListener("click", () => {
	document.querySelector(".sun-logo").classList.toggle("animate-sun");
	document.querySelector(".moon-logo").classList.toggle("animate-moon");
	// If the current URL contains "light-theme.css"
	if (theme.getAttribute("href") == "light-theme.css") {
		// ... then switch it to "dark-theme.css"
		theme.href = "dark-theme.css";
	} else { // Otherwise...
		// ... switch it to "light-theme.css"
		theme.href = "light-theme.css";
	}
});


// This script is to check if the user's system settings is set to dark mode already and set the web page accordingly
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

if (prefersDarkScheme.matches) {
	theme.href = "dark-theme.css";
} else {  
	theme.href = "light-theme.css";
}