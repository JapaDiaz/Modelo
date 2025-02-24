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
// Alterna entre as abas de conteúdo
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

// Abre o modal e adiciona a funcionalidade de zoom
function openModal(img) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "flex";
    modalImg.src = img.src;

    modalImg.classList.remove('zoom');
    modalImg.style.cursor = "zoom-in"; // Define cursor inicial

    modalImg.onclick = function () {
        if (modalImg.classList.contains('zoom')) {
            modalImg.classList.remove('zoom');
            modalImg.style.cursor = "zoom-in";
        } else {
            modalImg.classList.add('zoom');
            modalImg.style.cursor = "zoom-out";
        }
    };

    // Fecha o modal ao clicar fora da imagem
    modal.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    // Fecha o modal ao pressionar a tecla Esc
    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}

// Fecha o modal
function closeModal() {
    document.getElementById("imageModal").style.display = "none";
}

// Copia o template para a área de transferência
document.getElementById("copyButton").addEventListener("click", function () {
    var text = document.getElementById("prTemplate").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Template copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
});
