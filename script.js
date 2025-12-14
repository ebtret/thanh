// Countdown function
const countdownDate = new Date("December 25, 2025 00:00:00").getTime();
const countdownDisplay = document.getElementById("countdown");

const countdownFunction = setInterval(() => {
    const now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdownDisplay.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(countdownFunction);
        countdownDisplay.innerHTML = "Merry Christmas!";
    }
}, 1000);

// Hiệu ứng cuộn
const elements = document.querySelectorAll('.about-text, .about-image, .cta-btn');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
});

elements.forEach(element => {
    observer.observe(element);
});