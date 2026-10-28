const buttons = document.querySelectorAll(".programme-toggle");

buttons.forEach(function (button) {
    const details = document.querySelector("#" + button.getAttribute("aria-controls"));
    const icon = button.querySelector(".bi");

    button.addEventListener("click", function () {
        const isHidden = details.classList.toggle("hidden");
        button.setAttribute("aria-expanded", String(!isHidden));
        icon.classList.toggle("rotate-180", !isHidden);
    });
});
