import { setInLocalStorage } from "./src/persistence/localstorage";
import { renderCategories } from "./src/services/categories";
import { handleGetProductsToStore } from "./src/views/store";
import { handleGetProductsToStore } from "./src/view/store";
import './style.css'

//Aplicacion
handleGetProductsToStore()

/*Aplicacion */

handleGetProductsToStore()


renderCategories();
/*Producto */

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener("click", () => {
    openModal();
})

/*POPUP*/

const cancelButton = document.getElementById("cancelButton")

cancelButton.addEventListener('click', () =>{
    handleCancelButton()
})

const handleCancelButton = () =>{
    closeModal();
}

//Abrir y cerrar
const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display= "flex"
}

const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display= "none"
}

//Guardar o modificar elementos

const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener("click", () =>{
    handleSaveOrModifyElements();
})

const handleSaveOrModifyElements = () =>{
    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categories = document.getElementById("categoria").value;
    let object = {
        id: new Date().toISOString(),
        nombre,
        imagen,
        precio,
        categories
    }
    setInLocalStorage(object)

    closeModal();

}