const faceImage = document.getElementById("faceImage");
const faceTwo = document.getElementById("faceImage-two");
const productsBox = document.querySelectorAll(".product-card");
const productsTwo = document.querySelectorAll(".product-card-two");
const pOne = document.getElementById("p-one");
const pTwo = document.getElementById("p-two");
const pThree = document.getElementById("p-three");
const pFour = document.getElementById("p-four");
const pFive = document.getElementById("p-five");
const pSix = document.getElementById("p-six");
const wbody = document.body;
const beautySecrets = document.getElementById("beauty-secrets");
const cards = document.querySelectorAll(".card");
const cap = document.getElementById("cap");
const sk = document.getElementById("sk");
const cir = document.getElementById("cir");
const nav = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".links");
const onIns =document.getElementById('on-ins')
const cnUS =document.getElementById('cn-us')
//////////////////////////////////////
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 730) {
    sk.style.opacity = 1;
    sk.style.transform = "translate(0px,20px)";
    sk.style.transition = "3s";
  } else {
    sk.style.opacity = 0;
    sk.style.transform = "translate(0px,0px)";
    sk.style.transition = "3s";
  }
});
//////////////////////////////////////
window.addEventListener("scroll", () => {
  if (window.scrollY > 720) {
    nav.style.backgroundColor = "white";
    nav.style.color = "black";
    nav.style.transition=".4s"
    navLinks.forEach((i) => {
      i.style.color = "black";
      nav.style.transition=".4s"
    });
  } else {
    nav.style.backgroundColor = "transparent";
    nav.style.color = "white";
    navLinks.forEach((i) => {
      i.style.color = "white";
    });
  }
});
/////////////////////////////////////
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  setTimeout(() => {
    if (scrollY > 2090) {
      faceImage.style.opacity = 1;
      faceImage.style.transition = "3s";
      pOne.style.transform = "translate(0px, -50px)";
      pTwo.style.transform = "translate(0px, 100px)";
      pThree.style.transform = "translate(0px, -50px)";
      pOne.style.transition = "3s";
      pTwo.style.transition = "3s";
      pThree.style.transition = "3s";
    } else {
      faceImage.style.opacity = 0;
      faceImage.style.transition = "3s";
      pOne.style.transform = "translate(0px, 0px)";
      pTwo.style.transform = "translate(0px, 0px)";
      pThree.style.transform = "translate(0px, 0px)";
      pOne.style.transition = "3s";
      pTwo.style.transition = "3s";
      pThree.style.transition = "3s";
    }
  }, 10);
});
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  setTimeout(() => {
    if (scrollY > 2500) {
      faceTwo.style.opacity = 1;
      faceTwo.style.transition = "4s";
      pSix.style.transform = "translate(0px, -50px)";
      pFour.style.transform = "translate(0px, -50px)";
      pFive.style.transform = "translate(0px, 100px)";
      pFour.style.transition = "3s";
      pFive.style.transition = "3s";
      pSix.style.transition = "3s";
      wbody.style.overflowX = "hidden";
    } else {
      faceTwo.style.opacity = 0;
      faceTwo.style.transition = "4s";
      pSix.style.transform = "translate(0px, 0px)";
      pFour.style.transform = "translate(0px, 0px)";
      pFive.style.transform = "translate(0px, 0px)";
      pFour.style.transition = "3s";
      pFive.style.transition = "3s";
      pSix.style.transition = "3s";
      wbody.style.overflowX = "hidden";
    }
  }, 100);
});
///////////////////////////////////
productsBox.forEach((i) => {
  i.addEventListener("mouseover", () => {
    i.style.transform = "scale(1.5)";
    i.addEventListener("mouseout", () => {
      i.style.transform = "scale(1)";
    });
  });
});

productsTwo.forEach((i) => {
  i.addEventListener("mouseover", () => {
    i.style.transform = "scale(1.5)";
    i.addEventListener("mouseout", () => {
      i.style.transform = "scale(1)";
    });
  });
});
////////////////////////////////////
console.log(beautySecrets)
window.addEventListener("scroll", () => {
  if (window.screenY > 100) {
    beautySecrets.style.transform = "translate(0px, 400px)";
  } else {
    beautySecrets.style.transform = "translate(0px, 0px)";
  }
});
///////////////////////////////////
window.addEventListener("scroll", () => {
  cards.forEach((i) => {
    // console.log(i);
    if (window.scrollY > 740) {
      i.style.transform = "translate(0px , -40px)";
      i.style.transition = "3s";
    } else {
      i.style.transform = "translate(0px , 0px)";
      i.style.transition = "3s";
    }
  });
});
/////////////////////////////////////
window.addEventListener("scroll", () => {
  if (window.scrollY > 4100) {
    cap.style.opacity = 1;
    cap.style.transition = "10s";
    cap.style.transform = "translate(0px, 40px)";
  } else {
    cap.style.opacity = 0;
    cap.style.transition = "10s";
    cap.style.transform = "translate(0px, 0px)";
  }
});
///////////////////////////////////
window.addEventListener("scroll", () => {
  if (window.scrollY > 4400) {
    cir.style.transform = "translate(-200px , 0px)";
    cir.style.transition = "3s";
  } else {
    cir.style.transform = "translate(0px , 0px)";
    cir.style.transition = "3s";
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 5040) {
    cnUS.style.opacity="1"
    cnUS.style.transform = "translate(0px , 70px)";
    cnUS.style.transition = "3s";
  } else {
    cnUS.style.opacity="0"
    cnUS.style.transform = "translate(0px , 0px)";
    cnUS.style.transition = "3s";
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 5080) {
    onIns.style.opacity="1"
    onIns.style.transform = "translate(0px , -70px)";
    onIns.style.transition = "3s";
  } else {
    onIns.style.opacity="0"
    onIns.style.transform = "translate(0px , 0px)";
    onIns.style.transition = "3s";
  }
});

