import "../sass/_component-countdown.scss";

export function initCountdown(elementOrSelector, targetDateString) {
    const container = typeof elementOrSelector === "string" 
        ? document.querySelector(elementOrSelector) 
        : elementOrSelector;
    
    if (!container) return;

    const daysEl = container.querySelector("#days");
    const hoursEl = container.querySelector("#hours");
    const minutesEl = container.querySelector("#minutes");
    const secondsEl = container.querySelector("#seconds");

    const targetDate = new Date(targetDateString).getTime();

    function update() {
        const now = new Date().getTime();
        const diff = targetDate - now;

        if (diff <= 0) {
            if (daysEl) daysEl.textContent = "00";
            if (hoursEl) hoursEl.textContent = "00";
            if (minutesEl) minutesEl.textContent = "00";
            if (secondsEl) secondsEl.textContent = "00";
            clearInterval(timer);
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        if (daysEl) daysEl.textContent = days.toString().padStart(2, "0");
        if (hoursEl) hoursEl.textContent = hours.toString().padStart(2, "0");
        if (minutesEl) minutesEl.textContent = minutes.toString().padStart(2, "0");
        if (secondsEl) secondsEl.textContent = seconds.toString().padStart(2, "0");
    }

    const timer = setInterval(update, 1000);
    update();
}

// Auto-init on page load if element has a data-end-date attribute
document.addEventListener("DOMContentLoaded", () => {
    const countdowns = document.querySelectorAll(".countdown[data-end-date]");
    countdowns.forEach(el => {
        const endDate = el.getAttribute("data-end-date");
        if (endDate) {
            initCountdown(el, endDate);
        }
    });
});
