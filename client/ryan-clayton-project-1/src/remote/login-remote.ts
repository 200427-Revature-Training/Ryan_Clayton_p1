import { internalAxios } from './internal-axios'

export const login = async (credentials: any) => {

  let role = await internalAxios.post('/login', credentials)
    .then((response) => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('role', response.data.userRole);
      return response.data.userRole;
    }, (error) => {
      console.log(error);
    });
  return role;
}
