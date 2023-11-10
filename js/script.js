
const contentDivs = document.querySelectorAll('#description');
const aDivs = document.querySelectorAll('.slide1');
const bDivs = document.querySelectorAll('.slide2');
const cDivs = document.querySelectorAll('.slide3');

const aPic = document.querySelectorAll('.detail1');
const bPic = document.querySelectorAll('.detail2');
const cPic = document.querySelectorAll('.detail3');

contentDivs.forEach((description) => {
    description.style.display = 'none';
});

// Add click event listeners to each button div
aDivs.forEach((slide1) => {
    slide1.addEventListener('click', () => {
                aPic.forEach((detail1) => {
                detail1.style.display = 'block';
                });
                bPic.forEach((detail2) => {
                    detail2.style.display = 'none';
                });
                cPic.forEach((detail3) => {
                    detail3.style.display = 'none';
                });
        // Show the corresponding content div
        description.style.display = 'block';


    });
});
bDivs.forEach((slide2) => {
    slide2.addEventListener('click', () => {
        bPic.forEach((detail2) => {
            detail2.style.display = 'block';
            });
                aPic.forEach((detail1) => {
                    detail1.style.display = 'none';
                });
                cPic.forEach((detail3) => {
                    detail3.style.display = 'none';
                });
      
        description.style.display = 'block';


    });
});
cDivs.forEach((slide3) => {
    slide3.addEventListener('click', () => {
        cPic.forEach((detail3) => {
            detail3.style.display = 'block';
            });
                aPic.forEach((detail1) => {
                    detail1.style.display = 'none';
                });
                bPic.forEach((detail2) => {
                    detail2.style.display = 'none';
                });
      
        description.style.display = 'block';


    });
});


// slider codes
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

let scrollInterval = setInterval(autoScroll, 2000); 



let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let nameField=document.getElementById("nameField");
let title=document.getElementById("title");

signinBtn.onclick = function(){
    signIn();
    nameField.style.maxHeight = "0";
    title.innerHTML="Sign In";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick = function(){
    signUp();
    nameField.style.maxHeight = "60px";
    title.innerHTML="Sign Up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}
let loginLink = document.getElementById("loginLink");
let formBox = document.getElementById("formBox");

loginLink.onclick = function(){
    formBox.style.display = "block";
}
let closeButton = document.getElementById("closeButton");

closeButton.onclick = function(){
    formBox.style.display = "none";
}
const logoutLink = document.querySelectorAll('#logoutLink');
logoutLink.forEach((vis) => {
    vis.style.display = 'none';
});
const loginL = document.querySelectorAll('.inlink');

//setting up firebase with our website
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCh6RFwRkcKwoeo4gpgp5zztoXfHJXTVDM",
    authDomain: "eventia-bdc12.firebaseapp.com",
    databaseURL: "https://eventia-bdc12-default-rtdb.firebaseio.com",
    projectId: "eventia-bdc12",
    storageBucket: "eventia-bdc12.appspot.com",
    messagingSenderId: "430577851020",
    appId: "1:430577851020:web:d808d1f5b2309106a4f9a9"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const signUp = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // console.log(email,password)
    //firecode
    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((result) => {
    // Signed in 
    console.log("you are signed up");
    formBox.style.display = "none";
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
    // ..
  });
}
const signIn = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
firebase.auth().signInWithEmailAndPassword(email, password)
  .then((result) => {
    desap();
    // Signed in
    // document.write("u are in");
    // ...
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message);
  });
}
const desap = () => {
    
    loginL.forEach((vis) => {
        loginL.style.display = 'none';
    });
    logoutLink.forEach((vis) => {
        vis.style.display = 'block';
    });
    formBox.style.display = "none";
}