function toggleDarkMode() {
    const container = document.querySelector('.container');
    const boxes = document.querySelectorAll('.box');
    const modeSelect = document.getElementById("mode");
    const projectLinks = document.querySelectorAll('.projects');

    if (modeSelect.value === "dark") {
        container.style.backgroundColor = 'rgb(15, 15, 15)';
        container.style.color = 'white';
        boxes.forEach(box => {
            box.style.backgroundColor = 'rgb(50, 50, 50)';
            box.style.color = 'white';
            box.style.border = '1px solid white';
            const portfolioTitle = box.querySelector('h2.portfolio');
            if (portfolioTitle) {
                portfolioTitle.style.color = 'red';
            }
        });
        projectLinks.forEach(link => {
            link.style.backgroundColor = 'red';
        });
    } else {
        container.style.backgroundColor = 'rgb(225, 225, 225)';
        container.style.color = 'black';
        boxes.forEach(box => {
            box.style.backgroundColor = 'white';
            box.style.color = 'black';
            box.style.border = '1px solid rgb(112, 112, 112)';
            const portfolioTitle = box.querySelector('h2.portfolio');
            if (portfolioTitle) {
                portfolioTitle.style.color = 'blue';
            }
        });
        projectLinks.forEach(link => {
            link.style.backgroundColor = '#0032fc';
        });
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const modeSelect = document.getElementById("mode");
    modeSelect.addEventListener("change", toggleDarkMode);
});
