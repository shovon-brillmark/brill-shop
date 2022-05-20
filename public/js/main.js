let popup = document.getElementById("popup");

function openpopup() {
    popup.classList.add("openpopup");
}

function closepopup() {
    popup.classList.remove("openpopup");
}

window.addEventListener('load', function() {
    openpopup();
});