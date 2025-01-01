import axios from 'axios';
//import router from '@/router';

const API_URL = 'http://localhost:3000';

export const authService = {
  login: async (username, password) => {
    const response = await axios.post(`${API_URL}/login`, { "email": username, "password": password });
    //await console.log(response.data);
    const token  = await response.data;
    //await console.log(token);
    await localStorage.setItem('token', JSON.stringify(token));
    return token;
  },
  register: async (username, password) => {
    const response = await axios.post(`${API_URL}/register`, { "email": username, "password": password });
    const token  = await response.data;
    await localStorage.setItem('token', JSON.stringify(token));
    return token;
    /*if (token) {
      // No hay token, redirigir a la página de inicio de sesión
      this.$router.push('/login');
    } else {
      this.$router.push('/register');
    }*/
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  getToken: () => {
    return localStorage.getItem('token');
  },
};
