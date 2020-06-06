import { internalAxios } from './internal-axios'

export const validate = async (credentials: any) => {

  let role = await internalAxios.post('/login', credentials)
    .then((response) => {
      localStorage.setItem('token', response.data.token)
      return response.data.userRole;
    }, (error) => {
      console.log(error);
    });
  return role;
}
