<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>Usuari logged: {{ usuari }}</p>
    <p>AccessToken: {{ token.accessToken }}</p>
    <button @click="logout">Logout</button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      usuari: "",
      token: {"accessToken": "",
              "user": {
                "email": "",
                "id": ""
            }},
    }
  },
  methods: {
    logout() {
      localStorage.removeItem('token');
      this.$router.push('/login');
    }
  },
  mounted(){
    this.token = JSON.parse(localStorage.getItem('token'));
    console.log("Este és el token: ");
    console.log(this.token);
    this.usuari = this.token.user.email;
  }
    
}
</script>