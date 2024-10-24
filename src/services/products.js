/*Producto */
import { productoActivo } from "../../main";
import { handleGetProductLocalStorage, setInLocalStorage } from "../persistence/localstorage";
import { handleGetProductsToStore } from "../views/store";
import { handleRenderList } from "../views/store";
import { closeModal } from "../views/modal";


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
    let object = null
    if(productoActivo){
        object = {
            ...productoActivo,
            nombre,
            imagen,
            precio,
            categories
        }
    }else{

        object = {
            id: new Date().toISOString(),
            nombre,
            imagen,
            precio,
            categories
        }
    }
    
    setInLocalStorage(object)
    handleGetProductsToStore()
    closeModal();
}


//Eliminar elemento
export const handleDeleteProduct = () => {
    const products = handleGetProductLocalStorage()
    const result = products.filter((el) => el.id != productoActivo.id)

    localStorage.setItem("products", JSON.stringify(result));
    const newProducts = handleGetProductLocalStorage()
    handleRenderList(newProducts)
    closeModal()
}