import { internalAxios } from './internal-axios'

export const getContent = async (token:any) => {
  return  await internalAxios.post('/requests',token);;
}
export const getManagerPrevious = async(token:any)=>{
  return await internalAxios.post('/requests/manager/previous',token);
}
export const getContentID = async (token:any,id:number) => {
  return await internalAxios.post('/requests/employee/'+id,token);;
}
export const getEmployeePrevious = async(token:any,id:number)=>{
  return await internalAxios.post('/requests/employee/previous/'+id,token);
}
export const submitReq = async (payload:any)=>{
  let reader = new FileReader();
  console.log(payload.image)
  reader.readAsDataURL(payload.image);
  const promise = new Promise((resolve, reject)=>{
    
    reader.onload = async ()=>{
      payload.image = await reader.result;
      const response = await internalAxios.post('/requests/new',payload);
      resolve(response);
    }
  });
  return promise;
}
export const approve = async(payload:any)=>{
  return await internalAxios.post('requests/approve',payload);
}
export const reject = async(payload:any)=>{
  return await internalAxios.post('requests/reject',payload);
}