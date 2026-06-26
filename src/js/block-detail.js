import "../sass/_block-detail.scss";
import "../sass/_component-related-blogs.scss";

function initDiscoverSlider() {
  const sliderEl = document.querySelector(".discoverBlogsSlider");
  if (sliderEl && !sliderEl.swiper) {
    new Swiper(".discoverBlogsSlider", {
      effect: "slide",
      loop: false,
      speed: 1000,
      allowTouchMove: true,
      watchOverflow: true,
      initialSlide: 0,
      navigation: {
        nextEl: '.discover-blogs .nav-next',
        prevEl: '.discover-blogs .nav-prev',
      },
      scrollbar: {
        el: '.discoverBlogsSlider .swiper-scrollbar',
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
          spaceBetween: 20,
          allowTouchMove: false
        }
      }
    });
  }
}

function initTocSpy() {
  const sections = document.querySelectorAll(".content-section");
  const tocItems = document.querySelectorAll(".toc-item");

  if (sections.length === 0 || tocItems.length === 0) return;

  // Smooth scroll
  tocItems.forEach(item => {
    const link = item.querySelector("a");
    if (link) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href");
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }
      });
    }
  });

  // IntersectionObserver for active class
  const observerOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px",
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute("id");
        tocItems.forEach(item => {
          const link = item.querySelector("a");
          if (link && link.getAttribute("href") === `#${id}`) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => observer.observe(section));
}

// Run immediately
initDiscoverSlider();
initTocSpy();

// Fallback
document.addEventListener("DOMContentLoaded", () => {
  initDiscoverSlider();
  initTocSpy();
});
