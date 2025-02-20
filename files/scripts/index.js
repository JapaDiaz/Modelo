function openTab(evt, tabName) {
    let i, content, tabs;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;
}
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}
