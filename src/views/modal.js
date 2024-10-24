/*POPUP*/

import { setProductoActivo } from "../../main"
import { productoActivo } from "../../main"

const cancelButton = document.getElementById("cancelButton")
cancelButton.addEventListener('click', () =>{
    closeModal();
})

//Abrir y cerrar
export const openModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display= "flex"
    if(productoActivo){
        const nombre = document.getElementById("nombre"),
        imagen = document.getElementById("img"),
        precio = document.getElementById("precio"),
        categories = document.getElementById("categoria");
        nombre.value = productoActivo.nombre
        imagen.value = productoActivo.imagen
        precio.value = productoActivo.precio
        categories.value = productoActivo.categories
    }
}

export const closeModal = () => {
    const modal = document.getElementById("modalPopUP");
    modal.style.display= "none"
    setProductoActivo(null)
    resetModal();
}

const resetModal = () =>{
    const nombre = document.getElementById("nombre"),
    imagen = document.getElementById("img"),
    precio = document.getElementById("precio"),
    categories = document.getElementById("categoria");
    nombre.value = ""
    imagen.value = ""
    precio.value = 0
    categories.value = "Seleccione una categoria"
}
 