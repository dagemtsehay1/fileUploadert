import Axios from 'axios';
const baseUrl = "http://localhost:3002";
export  const getFiles = async () => {
    try{
        const response =  await Axios.get(baseUrl+'/getAll');
        return {status:"ok",data:response.data}

    }catch(e){
        return {status:"error",data:[]};
    }
}

export const deleteFile = async(id:any) =>{
    try{
        const response = await Axios.delete(baseUrl+"/delete/"+id);
        return {status:"ok",message:"File Deleted Success-fully"}
    }catch(e){
        return {status:"error",message:"Error"}
    }
}