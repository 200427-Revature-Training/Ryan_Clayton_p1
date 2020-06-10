import { internalAxios } from './internal-axios'

export const getContent = async (token:any) => {
  let role = await internalAxios.post('/requests',token);
  return role;
}

export const getContentID = async (token:any,id:number) => {
  let role = await internalAxios.post('/requests/'+id,token);
  return role;
}
