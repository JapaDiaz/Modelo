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

    if (!modal || !modalImg) {
        console.error("Modal ou imagem modal não encontrados.");
        return;
    }

    modal.style.display = "flex";
    modalImg.src = img.src;

    // Removendo zoom ao abrir
    modalImg.classList.remove('zoom');
    modalImg.style.cursor = "zoom-in";

    modalImg.onclick = function () {
        if (modalImg.classList.contains('zoom')) {
            modalImg.classList.remove('zoom');
            modalImg.style.cursor = "zoom-in";
        } else {
            modalImg.classList.add('zoom');
            modalImg.style.cursor = "zoom-out";
        }
    };

    modal.onclick = function (event) {
        if (event.target === modal) {
            closeModal();
        }
    };

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeModal();
        }
    });
}

function closeModal() {
    let modal = document.getElementById("imageModal");
    if (modal) {
        modal.style.display = "none";
    }
}



document.getElementById("copyButton").addEventListener("click", function () {
    var text = document.getElementById("prTemplate").innerText;
    navigator.clipboard.writeText(text).then(() => {
        alert("Template copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar o texto: ", err);
    });
});

// Abre o modal de ícones
function openIconsModal() {
    let modal = document.getElementById("iconsModal");
    modal.style.display = "flex";

    // Adiciona evento para fechar ao pressionar ESC
    document.addEventListener("keydown", escCloseModal);
}

// Fecha o modal de ícones
function closeIconsModal() {
    let modal = document.getElementById("iconsModal");
    modal.style.display = "none";

    // Remove evento de ESC ao fechar
    document.removeEventListener("keydown", escCloseModal);
}

// Fecha modal ao pressionar ESC
function escCloseModal(event) {
    if (event.key === "Escape") {
        closeIconsModal();
    }
}


document.getElementById("openIconsButton").addEventListener("click", openIconsModal);
document.addEventListener("DOMContentLoaded", function () {
    let icons = document.querySelectorAll(".copy-icon");

    icons.forEach(icon => {
        icon.style.cursor = "pointer";

        icon.addEventListener("click", function () {
            let iconText = icon.innerText;
            navigator.clipboard.writeText(iconText).then(() => {
                alert("Ícone copiado: " + iconText);
            }).catch(err => {
                console.error("Erro ao copiar o ícone: ", err);
            });
        });
    });
});
