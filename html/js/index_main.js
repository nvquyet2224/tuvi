function lookSlider() {
    let mobileSlider = null;

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

        // Detail Descriptions
        document.querySelectorAll(".look_detail--item").forEach((elm) => {
            const _target = elm.getAttribute("data-target");
            if (_target === target) {
                elm.classList.add("current");
            } else {
                elm.classList.remove("current");
            }
        });

        // Sync Mobile Slider
        if (mobileSlider) {
            const slideIndex = parseInt(target) - 1;
            if (!isNaN(slideIndex) && mobileSlider.activeIndex !== slideIndex) {
                mobileSlider.slideTo(slideIndex);
            }
        }
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

    // Initialize Mobile Slider
    if (document.querySelector(".cardSlider")) {
        mobileSlider = new Swiper(".cardSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            grabCursor: true,
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
            scrollbar: {
                el: ".cardSlider .swiper-scrollbar",
                hide: false,
                draggable: true,
            },
            mousewheel: {
                sensitivity: 1,
                forceToAxis: true,
                releaseOnEdges: true,
            },
            navigation: {
                nextEl: ".look .nav-next",
                prevEl: ".look .nav-prev",
            },
            on: {
                transitionStart: function (swiper) {
                    const currentIndex = swiper.activeIndex;
                    const currentSlide = swiper.slides[currentIndex];
                    if (currentSlide) {
                        const cur = currentSlide.querySelector(".look_pot");
                        if (cur) {
                            const target = cur.getAttribute("data-target");
                            setCurrent(target);
                        }
                    }
                },
            },
        });
    }
}


function productPromotionSlider() {
    document.querySelectorAll(".product-promotion").forEach((section) => {
        const slider = section.querySelector(".productsSlider");
        if (slider) {
            new Swiper(slider, {
                //modules: [Navigation, Scrollbar, FreeMode, Mousewheel],
                effect: "slide",
                loop: false,
                speed: 1000,
                preloadImages: false,
                lazy: true,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
                slidesPerView: 4,
                spaceBetween: 20,
                freeMode: true,
                grabCursor: true,
                allowTouchMove: true,
                watchOverflow: true,
                initialSlide: 0,
                autoHeight: false,
                scrollbar: {
                    el: section.querySelector('.swiper-scrollbar'),
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
                        slidesPerView: 1.2,
                        spaceBetween: 8
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20
                    }
                },
                navigation: {
                    nextEl: section.querySelector(".nav-next"),
                    prevEl: section.querySelector(".nav-prev"),
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
    });
}


function homeBestsellerSlider() {
    if (document.querySelector(".homeBestsellerSlider")) {
        new Swiper(".homeBestsellerSlider", {
            effect: "slide",
            loop: false,
            speed: 1000,
            grabCursor: true,
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
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 30,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            pagination: {
                el: '.home-why_wrap .swiper-pagination',
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
            freeMode: true,
            grabCursor: true,
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
                    spaceBetween: 12
                },
                1024: {
                    slidesPerView: 2,
                    spaceBetween: 20
                }
            }
        });
    }
}

function homeEthosTilt() {
    var section = document.querySelector(".home-ethos");
    if (!section) return;

    var card = section.querySelector(".home-ethos_card");
    if (!card) return;

    var maxTilt = 15;
    var maxScale = 1.08;

    section.addEventListener("mousemove", function(e) {
        var rect = section.getBoundingClientRect();
        var x = (e.clientX - rect.left) / rect.width - 0.5;
        var y = (e.clientY - rect.top) / rect.height - 0.5;
        var ry = x * maxTilt;
        var rx = y * -maxTilt;
        // Distance from center (0 = center, ~0.7 = corner)
        var dist = Math.sqrt(x * x + y * y);
        // Scale: closer to center = bigger, max at center
        var scale = maxScale - dist * (maxScale - 1) * 2;
        if (scale < 1) scale = 1;
        card.style.transform = "perspective(800px) rotateX(" + rx + "deg) rotateY(" + ry + "deg) scale(" + scale.toFixed(3) + ")";
    });

    section.addEventListener("mouseleave", function() {
        card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    });
}

function homeBannerSlider() {
    if (document.querySelector(".homeBannerSlider")) {
        new Swiper(".homeBannerSlider", {
            effect: "slide",
            loop: true,
            speed: 1000,
            grabCursor: true,
            slidesPerView: 1,
            spaceBetween: 0,
            allowTouchMove: true,
            watchOverflow: true,
            initialSlide: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.homeBannerSlider .swiper-pagination',
                clickable: true
            }
        });
    }
}

function initProductDetail() {
    // Color selection
    const colorItems = document.querySelectorAll(".metadata_color-thumb");
    const colorLabel = document.getElementById("selected-color-label");
    colorItems.forEach((item) => {
        item.addEventListener("click", () => {
            colorItems.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
            if (colorLabel) {
                colorLabel.textContent = item.getAttribute("data-color");
            }
        });
    });

    // Size selection
    const sizeItems = document.querySelectorAll(".metadata_tag--item");
    const sizeLabel = document.getElementById("selected-size-label");
    sizeItems.forEach((item) => {
        item.addEventListener("click", () => {
            sizeItems.forEach((i) => i.classList.remove("active"));
            item.classList.add("active");
            if (sizeLabel) {
                sizeLabel.textContent = item.textContent.trim();
            }
        });
    });

    // Quantity dropdown sync
    const qtySelectContainer = document.querySelector(".metadata_cart-qty-select");
    if (qtySelectContainer) {
        const qtyItems = qtySelectContainer.querySelectorAll(".select-box li");
        qtyItems.forEach((item) => {
            item.addEventListener("click", () => {
                const val = item.getAttribute("data-value");
                console.log("Selected quantity:", val);
                qtySelectContainer.setAttribute("data-selected-qty", val);
            });
        });
    }

    // Accordions
    const accordionHeaders = document.querySelectorAll(".accordion-header");
    accordionHeaders.forEach((header) => {
        header.addEventListener("click", () => {
            const item = header.closest(".accordion-item");
            if (item) {
                item.classList.toggle("active");
            }
        });
    });
}

(function () {
    homeBannerSlider();
    lookSlider();
    productPromotionSlider();
    homeBestsellerSlider();
    homeWhySlider();
    homePurposeSlider();
    homeEthosTilt();
    initProductDetail();
})();


