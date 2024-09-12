function esconderAba() {
    let aba = document.getElementById('Aba');
    let toggleIcon = document.getElementById('toggleIcon');
    if (aba.style.display === "flex" || aba.style.display === "") {
        aba.style.display = "none";
        toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e8eaed">
            <path d="m309.67-81.33-61-61.67L587-481.33 248.67-819.67l61-61.66 400 400-400 400Z"/>
        </svg>`;
    } else {
        aba.style.display = "flex";
        toggleIcon.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="34px" fill="#e8eaed">
            <path d="M400-80 0-480l400-400 61 61.67L122.67-480 461-141.67 400-80Z" />
        </svg>`;
    }
}