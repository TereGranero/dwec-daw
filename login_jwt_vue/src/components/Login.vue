<!-- Login.vue -->

<template>
    <div>
      <form @submit.prevent="login">
        <h1>Formulari de Login</h1>
        <label>Usuario: <input v-model="username" /></label>
        <label>Contraseña: <input type="password" v-model="password" /></label>
        <button type="submit">Iniciar sesión</button>
        <br><br>
        <button @click="anarRegistrar">Registrar-se</button>
      </form>
    </div>
  </template>
  
  <script>
  import { authService } from '@/services/auth.js';
  
  export default {
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      async login() {
        try {
          const token = await authService.login(this.username, this.password);
          console.log('Token obtenido:', token);
          // Redirigir a la página después del inicio de sesión
          this.$router.push('/');
        } catch (error) {
          console.error('Error al iniciar sesión:', error.message);
        }
      },
      anarRegistrar(){
        this.$router.push('/register');
      }
    },
  };
  </script>
  