import Swiper, { Autoplay, Pagination, Navigation, Scrollbar, Mousewheel } from "swiper";

export function lookSlider() {

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
