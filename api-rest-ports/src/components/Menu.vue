<template>
    <nav>
    <router-link to="/">Inici</router-link> |
    <router-link to="/ports">Mostra ports</router-link> 
  </nav>
</template>

<script>
export default {
    name: 'Menu',
    data() {
        return {
            //msg: "Llista de ports",
            //ports: Array, 
        };
    },

    props: {
        //msg: String
    },
    methods: {
        
    },
    mounted() {
    } 

}
</script>

<style>

</style>