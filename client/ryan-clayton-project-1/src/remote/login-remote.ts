import { internalAxios } from './internal-axios'

export const validate = async (credentials:any) => {
    console.log(credentials);
    let role;
    role = await internalAxios.post('/login', credentials).then((response) => {
        return response.data.role;
      }, (error) => {
        console.log(error);
      });
    return role;
}
