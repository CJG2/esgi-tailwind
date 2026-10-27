function setupDetails(buttonId, detailsId, showLabel, hideLabel) {
    const button = document.querySelector("#" + buttonId);
    const details = document.querySelector("#" + detailsId);

    button.addEventListener("click", function () {
        const isHidden = details.classList.toggle("hidden");
        button.setAttribute("aria-expanded", String(!isHidden));
        button.textContent = isHidden ? showLabel : hideLabel;
    });
}

setupDetails("details-button", "details", "Voir les conditions", "Masquer les conditions");
setupDetails("details-button-2", "details-2", "Voir les horaires", "Masquer les horaires");
