import axios from 'axios'
export async function getProducts(){
    const response = await axios.get('http://192.168.1.191:3000/cats');
    return response;
}

export async function getProductDetails(id){
    const response = await axios.get('http://192.168.1.191:3000/cats/'+id);
    return response;
}