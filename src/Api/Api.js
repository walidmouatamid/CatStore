import products from './products.json'


export  function getProducts(type){
    if(type=="cats_lover")
        return Promise.resolve(products.cats_lover);
    else if(type=="cats")
    return Promise.resolve(products.cats);
    else{
        return Promise.resolve(products.shop_for_cats);
    }
}

export function getProductDetails(id,type){
    var product=""
    if(type=="cats_lover")
    product = products.cats_lover.find(item => item.id === id);
    else if(type=="cats")
    product = products.cats.find(item => item.id === id);
    else
    product = products.shop_for_cats.find(item => item.id === id);
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