<template>
<div>
   <h1>Job Details Page</h1>
    <p>The job id is {{ id }} </p> 
</div>
</template>

<script>
export default {
   props: ['id'],
   // the alternative to props is data
   // data() {
   //    return{
   //       //id is how the parameter is called in index.js
   //       //route is the object containing info about current route
   //       id: this.$route.params.id
   //    }
   // }
}
</script>

<style>

</style>