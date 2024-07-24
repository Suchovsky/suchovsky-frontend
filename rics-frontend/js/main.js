// imageStamp rotation

const scrollObject = document.getElementById("imageStamp");

if (scrollObject !== null) {

  window.addEventListener("scroll", () => {
    scrollObject.style.transform = `rotate(${window.scrollY/8}deg)`;
  });

}