function lookSlider() {

    const setCurrent = (target) => {
        // Banner
        document.querySelectorAll(".look_banner--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });

        // Hot pot
        document.querySelectorAll(".look_pot").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });

        // Desktop Tabs
        document.querySelectorAll(".look_tab--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
    };

    // Desktop Tabs event listener
    const tabsContainer = document.querySelector(".look_tabs");
    if (tabsContainer) {
        tabsContainer.addEventListener("click", (e) => {
            const tabItem = e.target.closest(".look_tab--item");
            if (tabItem) {
                const target = tabItem.getAttribute("data-target");
                setCurrent(target);
            }
        });
    }
}

function projectSlider() {
    if (document.querySelector(".projectsSlider")) {
        const slide = document.querySelector(".projectsSlider");
        const elm = document.querySelector("#projects");
        new Swiper(slide, {
            //modules: [Navigation],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1,
            spaceBetween: 40,
            slidesPerGroup: 1,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 40
                }
            },
            navigation: {
                nextEl: elm.querySelector(".nav-next"),
                prevEl: elm.querySelector(".nav-prev"),
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function (swiper) { },
                click(swiper) { },
            },
        });
    }
}

function collectionSlider() {
    const setCurrent = (target) => {
        // nav
        // banner
        document.querySelectorAll(".collection_banner--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
        //item
        document.querySelectorAll(".collection_product--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });
    };

    if (document.querySelector(".collectionNavSlider")) {
        const elm = document.querySelector("#slider-nav");
        const slide = elm.querySelector(".collectionNavSlider");
        new Swiper(slide, {
            //modules: [Navigation],
            effect: "slide",
            loop: true,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 1,
            spaceBetween: 10,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            navigation: {
                nextEl: elm.querySelector(".nav-next"),
                prevEl: elm.querySelector(".nav-prev"),
            },
            on: {
                init: function (swiper) { },
                transitionStart: function (swiper) { },
                transitionEnd: function (swiper) {
                    const activeSlide = swiper.slides[swiper.activeIndex];
                    const target = activeSlide.getAttribute("data-target");

                    console.log(
                        "Active slide element:",
                        activeSlide.getAttribute("data-target")
                    );
                    setCurrent(target);
                },
                click(swiper) { },
            },
        });
    }
}


function brandAccordion() {
    const elm = document.querySelector(".brand__personal-accordion");
    if (elm) {
        const accordions = elm.querySelectorAll(".accordion-item .title");
        accordions.forEach((item) => {
            item.addEventListener("click", (e) => {
                const parent = item.closest(".accordion-item");
                if (!parent) return;

                if (parent.classList.contains("current")) {
                    // Đã có class current rồi → không làm gì
                    return;
                }

                // Xóa class current ở tất cả các accordion-item khác
                const allItems = elm.querySelectorAll(".accordion-item");
                allItems.forEach((el) => el.classList.remove("current"));

                // Thêm class current vào item được click
                parent.classList.add("current");
            });
        });
    }
}

function homeBestsellerSlider() {
    if (document.querySelector(".homeBestsellerSlider")) {
        new Swiper(".homeBestsellerSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            scrollbar: {
                el: '.homeBestsellerSlider .swiper-scrollbar',
                hide: false,
                draggable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            }
        });
    }
function homeWhySlider() {
    if (document.querySelector(".homeWhySlider")) {
        new Swiper(".homeWhySlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            pagination: {
                el: '.homeWhySlider .swiper-pagination',
                clickable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            }
        });
    }
}

function homePurposeSlider() {
    if (document.querySelector(".homePurposeSlider")) {
        new Swiper(".homePurposeSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            scrollbar: {
                el: '.homePurposeSlider .swiper-scrollbar',
                hide: false,
                draggable: true
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 16
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 32,
                    allowTouchMove: false
                }
            }
        });
    }
}

(function () {
    lookSlider();
    projectSlider();
    collectionSlider();
    brandAccordion();
    homeBestsellerSlider();
    homeWhySlider();
    homePurposeSlider();
})();