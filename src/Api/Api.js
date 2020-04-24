import products from './products.json'


export  function getProducts(){
        return Promise.resolve(products);
}

export function getProductDetails(id){
    const product = products.find(item => item.id === id);

    return Promise.resolve(product);
}

/*
export async function getProducts(){
    const response = await axios.get('http://192.168.1.191:3000/cats');
    return response;
}

export async function getProductDetails(id){
    const response = await axios.get('http://192.168.1.191:3000/cats/'+id);
    return response;
}*/
export default {
    getProducts,
    getProductDetails
}