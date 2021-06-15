"use strict";
// control mobile menu
(function () {
  const btnOpen = document.querySelector("header button.mobile-menu-open");
  const btnClose = document.querySelector("header button.mobile-menu-close");
  const menu = document.querySelector("header nav");
  const flag = "show";

  btnOpen.addEventListener("click", () => {
    btnClose.classList.toggle(flag);
    menu.classList.toggle(flag);
  });

  btnClose.addEventListener("click", () => {
    btnClose.classList.toggle(flag);
    menu.classList.toggle(flag);
  });

  menu.addEventListener("click", () => {
    btnClose.classList.toggle(flag);
    menu.classList.toggle(flag);
  });
})();

//toggle the logo in the navigation bar
(function () {
  const a = 0;
})();
//control the slider in hero-2 section
(function () {
  const slidesContainer = document.querySelector(".hero-2 .slider .inner");
  let slides = [...slidesContainer.querySelectorAll(".slide")];
  const btnPrev = document.querySelector(".hero-2 .previous");
  const btnNext = document.querySelector(".hero-2 .next");

  // This solution only work for sliders that have more than 3 slides
  // The key is to show the second slide, not the first slide
  // We use the updateSlider function to show the second slide
  // If we show the first slide, then the first slide will be removed before finishing the animation
  // and causes a blank slide while the animation is running.

  // places slides after the side loaded
  const updateSlider = () => {
    slides.forEach((item, index) => {
      item.style.left = `${index * 100 - 100}%`;
    });
  };
  updateSlider();

  btnNext.addEventListener("click", () => {
    // move first slide to the end and update the slider
    const firstChild = slides.shift();
    slides.push(firstChild);
    slidesContainer.appendChild(firstChild);
    updateSlider();
  });

  btnPrev.addEventListener("click", () => {
    //move the last slide to the beginning the the slider
    const lastChild = slides.pop();
    slides.unshift(lastChild);
    slidesContainer.insertAdjacentElement("beforebegin", lastChild);
    updateSlider();
  });
})();

// auto play slider in section hero-2
(function () {
  const section = document.querySelector(".hero-2");
  const slidesContainer = document.querySelector(".hero-2 .slider .inner");
  let slides = [...slidesContainer.querySelectorAll(".slide")];

  // function updates slides' position
  const updateSlider = () => {
    slides.forEach((item, index) => {
      item.style.left = `${index * 100 - 100}%`;
    });
  };

  // autoplay function
  let inter = null;
  const play = (flag) => {
    if (flag) {
      inter = setInterval(() => {
        const firstChild = slides.shift();
        firstChild.remove();
        slides.push(firstChild);
        slidesContainer.appendChild(firstChild);
        updateSlider();
      }, 5000);
      return;
    }
    clearInterval(inter);
  };

  play(true);

  // turn off the autoplay when the mouse hovers over the slideshow
  section.addEventListener(
    "mouseover",
    function () {
      play(false);
    },
    false
  );

  // turn on the autoplay when the mouse leaves the slideshow
  section.addEventListener(
    "mouseout",
    function () {
      play(true);
    },
    false
  );
})();

// copy info
(function () {
  const infoContainer = document.querySelector(".info");
  const notification = document.querySelector(".notification");
  const placeHolder = document.querySelector(".notification .info-type");

  infoContainer.addEventListener("click", function (e) {
    // check if user click on an element that contains business information
    if (e.target.classList.contains("information") === false) return;

    // copy the information contained in the clicked tag
    const target = document.getElementById(e.target.id);

    const info = target.dataset.info;

    let range = document.createRange();
    range.selectNode(target);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    window.getSelection().removeAllRanges();

    // update notification content
    placeHolder.innerHTML = info;
    console.log(placeHolder);
    notification.classList.add("show");

    // show notification
    setTimeout(() => {
      notification.classList.remove("show");
    }, 1000);
  });
})();

// control menu
(function () {
  const menu = document.querySelector(".list-menu");
  const slider = document.querySelector(".services-container");
  let listMenu = [...menu.querySelectorAll("li")];
  let slides = [...slider.querySelectorAll("ul")];
  const btnPrev = document.querySelector(".services button.prev");
  const btnNext = document.querySelector(".services button.next");

  const updateSlider = (slides) => {
    slides.forEach((item, index) => {
      item.style.left = `${index * 100 - 100}%`;
      item.classList.remove("show");
    });
    const currentSlide = slides[1];
    currentSlide.classList.add("show");
  };

  // arrange slides after the website is loaded
  updateSlider(listMenu);
  updateSlider(slides);

  const moveToNextSlide = (slider, slides) => {
    const first = slides.shift();
    slides.push(first);
    slider.insertAdjacentElement("beforeend", first);
    updateSlider(slides);
  };

  const moveToPreviousSlide = (slider, slides) => {
    const last = slides.pop();
    slides.unshift(last);
    slider.insertAdjacentElement("afterbegin", last);
    updateSlider(slides);
  };

  btnPrev.addEventListener("click", () => {
    moveToPreviousSlide(menu, listMenu);
    moveToPreviousSlide(slider, slides);
  });

  btnNext.addEventListener("click", () => {
    moveToNextSlide(menu, listMenu);
    moveToNextSlide(slider, slides);
  });
})();

// control mobile services menu
(function () {
  const menu = document.querySelector(".menu");
  const menuBtns = [...document.querySelectorAll(".menu-btn")];
  const servicesMenu = document.querySelector(".services-container");
  const slides = [...servicesMenu.querySelectorAll("ul")];
  const closeBtn = document.querySelector(".close-service-menu");
  let positionY;

  const hideSlides = () => {
    slides.forEach((slide) => {
      slide.classList.remove("show");
      slide.style.left = "0%";
    });
  };

  const showSlide = (ID) => {
    slides.forEach((slide) => {
      if (slide.id.localeCompare(ID) === 0) {
        slide.classList.add("show");
      }
    });
  };

  menu.addEventListener("click", (e) => {
    e.preventDefault();
    const clickedTarget = e.target;

    if (!clickedTarget.classList.contains("menu-btn")) return;

    // hide unselected slides
    hideSlides();

    // show selected slide
    let slideId = clickedTarget.parentElement.parentElement.dataset.servicemenu;
    showSlide(slideId);
    servicesMenu.classList.add("show");

    // get current window position
    positionY = window.scrollY;

    // disable scroll in main page
    window.onscroll = function () {
      window.scrollTo({ top: positionY });
    };
  });

  closeBtn.addEventListener("click", () => {
    hideSlides();
    servicesMenu.classList.remove("show");
    window.onscroll = function () {};
    //window.scrollBy(0, positionY);
  });
})();

// control navigation scroll
(function () {
  const navigationBar = document.querySelector(".navigation");
  const navs = [...navigationBar.querySelectorAll("li")];
  const navigationBarHeight = navigationBar.offsetHeight;

  navigationBar.addEventListener("click", (e) => {
    e.preventDefault();
    const target = e.target;
    if (target.tagName.toLowerCase() != "a") return;

    const destinationId = target.getAttribute("href");
    document
      .querySelector(destinationId)
      .scrollIntoView({ behavior: "smooth" });
  });
})();

// control appointment section
(function () {
  // prepare data for the appointment section
  const listMenu = [...document.querySelectorAll(".list-menu li")];
  const listsServices = [
    ...document.querySelectorAll(".services-container ul"),
  ];
  let menu = new Map();

  //const category = listMenu.map(item => )
})();
