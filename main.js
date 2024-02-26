
// Prevents the default form submission behavior and check for email validation
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 
	let email = document.querySelector("#email")
	let error = document.querySelector(".error")
	let button = document.querySelector("form button");
	let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

	console.log(email.value)
	if (!regex.test(email)){
		error.style.display = "flex"
	}


});

// modify the layout from the size of the screen
visualViewport.addEventListener("resize", () => {
	let imgDesktop = document.querySelector(".hero-desktop")
	let imgMobile = document.querySelector(".hero-mobile")
	let logoDesktop = document.querySelector(".logo-desktop")
	let logoMobile = document.querySelector(".logo-mobile")

	if (visualViewport.width < 800) {
		imgDesktop.style.display = "none";
		imgMobile.style.display = "flex";
		logoDesktop.style.display = "none";
		logoMobile.style.display = "flex"
	} else {
		imgDesktop.style.display = "flex";
		imgMobile.style.display = "none";
		logoDesktop.style.display = "flex";
		logoMobile.style.display = "none"
	}
})