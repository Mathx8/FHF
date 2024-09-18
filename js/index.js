function esconderAba() {
    let aba = document.getElementById('Aba');
    let toggleIcon = document.getElementById('toggleIcon');
    if (aba.style.display === "flex" || aba.style.display === "") {
        aba.style.display = "none";
        toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="44px" fill="#e8eaed">
            <path d="M200-200v-240h80v160h160v80H200Zm480-320v-160H520v-80h240v240h-80Z"/>
        </svg>`;
    } else {
        aba.style.display = "flex";
        toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="44px" fill="#e8eaed">
            <path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z"/>
        </svg>`;
    }
}