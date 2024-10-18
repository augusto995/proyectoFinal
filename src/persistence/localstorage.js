export const handleGetProductLocalStorage = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    if(products){
        return products
    } else{
        return[]
    }
}

//Guardar en el localstorage
//Recibir un producto
export const setInLocalStorage = (productIn) =>{
    //Traer elementos
    let productsInLocal = handleGetProductLocalStorage();

    const existingIndex = productsInLocal.findIndex((productsLocal) =>
    productsLocal.id === productIn.id
    )

    //Verificar si el elemento existe
    if(existingIndex !== -1){
        productsInLocal[existingIndex] = productIn;
    } else{
        productsInLocal.push(productIn)
    }
localStorage.setItem("products", JSON.stringify(productsInLocal));
    
} 