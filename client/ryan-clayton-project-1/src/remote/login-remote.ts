import { internalAxios } from './internal-axios'

export const validate = async (credentials:any) => {
    const response = await internalAxios.get<String>('/login',credentials);
    return response;
}
