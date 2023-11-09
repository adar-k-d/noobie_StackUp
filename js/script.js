//let scrollAmount = 0;
//let slider = document.querySelector('.slider');

//function autoScroll() {
   // slider.scrollTo(scrollAmount++, 0);

    // Start over when reaching end of scroll
  //  if (scrollAmount > slider.scrollWidth) {
   //     scrollAmount = 0;
    //}
//}

//let scrollInterval = setInterval(autoScroll, 50); // Adjust speed by changing delay time

let slider = document.querySelector('.slider');
let images = document.querySelectorAll('.slider img');
let imageIndex = 0;

function autoScroll() {
    if (imageIndex >= images.length) {
        imageIndex = 0;
        slider.scrollLeft = 0;
    } else {
        slider.scrollTo({
            top: 0,
            left: images[imageIndex].offsetWidth * imageIndex,
            behavior: 'smooth'
        });
        imageIndex++;
    }
}

let scrollInterval = setInterval(autoScroll, 1000); // Adjust this value to change the delay between scrolls



let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

signinBtn.onclick = function(){
    nameField.style.maxHeight = "0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    nameField.style.maxHeight = "60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

const loginform = document.getElementById('loginform');
        const loginbutton = document.getElementById('loginbutton');

        // Add a click event listener to the "Login" button
        loginbutton.addEventListener('click', function() {
            // Toggle the visibility of the login form
           
            if (loginform.style.display === 'none' || loginform.style.display === '') {
                loginform.style.display = 'block';
            } else {
                loginform.style.display = 'none';
            }
        });
      

const closeButton = document.getElementById("closeButton");
const loginForm = document.getElementById("loginform");

if (closeButton && loginForm) {
    closeButton.addEventListener("click", function () {
        loginForm.style.display = "none";
    });
}
        