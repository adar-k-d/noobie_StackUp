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

let scrollInterval = setInterval(autoScroll, 3000); // Adjust this value to change the delay between scrolls
