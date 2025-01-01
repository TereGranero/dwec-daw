<!-- Register.vue -->

<template>
    <div>
      <form @submit.prevent="register">
        <h1>Formulari de Register</h1>
        <label>Usuario: <input v-model="username" /></label>
        <label>Contraseña: <input type="password" v-model="password" /></label>
        <button type="submit">Registrar-se</button>
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
      async register() {
        try {
          const token = await authService.register(this.username, this.password);
          console.log('Token obtenido:', token);
          // Redirigir a la página después del inicio de sesión
          this.$router.push('/');
        } catch (error) {
          console.error('Error al iniciar sesión:', error.message);
        }
      },
    },
  };
  </script>
  