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

function productNewSlider() {
    if (document.querySelector(".product-new .productsSlider")) {
        new Swiper(".product-new .productsSlider", {
            //modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: '.product-new .swiper-scrollbar',
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
                    slidesPerView: 1.5,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            },
            navigation: {
                nextEl: ".product-new .nav-next",
                prevEl: ".product-new .nav-prev",
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
        });
    }
}

function productPromotionSlider() {
    if (document.querySelector(".product-promotion .productsSlider")) {
        new Swiper(".product-promotion .productsSlider", {
            //modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 4,
            spaceBetween: 0,
            freeMode: true,
            grabCursor: true,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            scrollbar: {
                el: '.product-promotion .swiper-scrollbar',
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
                    slidesPerView: 1.5,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 0
                }
            },
            navigation: {
                nextEl: ".product-promotion .nav-next",
                prevEl: ".product-promotion .nav-prev",
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
        });
    }
}

function whatnowSlider() {

    const setCurrent = (target) => {
        // nav
        document.querySelectorAll('.nav-overlay li').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });

        // banner
        document.querySelectorAll('.whatnow_banner--item').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });
        //item
        document.querySelectorAll('.whatnow_thumb--item').forEach((elm) => {
            const _target = elm.getAttribute('data-target');
            if (_target === target) {
                elm.classList.add('current');
            } else {
                elm.classList.remove('current');
            }
        });
    }

    if (document.querySelector(".whatnowSlider")) {
        document.querySelectorAll('.whatnow_thumb--item').forEach((elm) => {
            const slide = elm.querySelector('.whatnowSlider')
            new Swiper(slide, {
                //modules: [Navigation],
                effect: "slide",
                loop: false,
                speed: 1000,
                preloadImages: false,
                lazy: true,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                slidesPerView: 3,
                spaceBetween: 10,
                allowTouchMove: true,
                watchOverflow: true,
                initialSlide: 0,
                autoHeight: false,
                breakpoints: {
                    320: {
                        slidesPerView: 2.1,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 10
                    }
                },
                navigation: {
                    nextEl: elm.querySelector('.nav-next'),
                    prevEl: elm.querySelector('.nav-prev'),
                },
                on: {
                    init: function (swiper) {
                    },
                    transitionStart: function (swiper) {
                    },
                    transitionEnd: function () { },
                    click(swiper) {
                    }
                },
            });
        });


    }

    //filter nav
    const navTab = document.querySelector('.whatnow .nav-overlay');
    if (navTab) {
        navTab.addEventListener("click", (e) => {
            const target = e.target.closest(".nav-overlay li");
            if (target) {
                if (!target.classList.contains('current')) {
                    const tab = target.getAttribute('data-target');
                    setCurrent(tab);
                }
            }
        });
    }

}

function promotionSlider() {
    if (document.querySelector(".promotionSlider")) {
        new Swiper(".promotionSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            preloadImages: false,
            lazy: true,
            disableOnInteraction: true,
            pauseOnMouseEnter: true,
            slidesPerView: 2,
            spaceBetween: 0,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoHeight: false,
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 0
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 0
                }
            },
            on: {
                init: function (swiper) {
                },
                transitionStart: function (swiper) {
                },
                transitionEnd: function () { },
                click(swiper) {
                }
            },
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
    productNewSlider();
    productPromotionSlider();
    whatnowSlider();
    promotionSlider();
    homeBestsellerSlider();
    homeWhySlider();
    homePurposeSlider();
})();
