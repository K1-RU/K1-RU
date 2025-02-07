function nextPage() {
    window.location.href = "yes.html";
}

function moveButton() {
    const button = document.getElementById("noButton");
    const container = document.querySelector(".container");

    const containerRect = container.getBoundingClientRect();
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    const maxX = containerRect.width - buttonWidth;
    const maxY = containerRect.height - buttonHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;

    button.classList.add("wiggle");
    setTimeout(() => button.classList.remove("wiggle"), 500);
}