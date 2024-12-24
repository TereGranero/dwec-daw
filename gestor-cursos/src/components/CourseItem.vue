<template>
    <div v-if="course">
      <h3>{{ course.name }}</h3>
      <p>Duració: {{ course.duration }}</p>
      <p>Nivell: {{ course.level }}</p>
      <button @click="$emit('edit', course.id)" class="edit">Editar</button>
      <button @click="$emit('delete', course.id)" class="delete">Esborrar</button>
    </div>
    <div v-else>
        <p>Carregant curs...</p>
    </div>
</template>

<script>
export default {
    props: {
        course: Object
    }
};
</script>
<style>
    .course h3 {
        background: rgb(7, 145, 92);
        color: white;
        padding: 10px;
        border-radius: 10px;
        margin: 20px auto;
        max-width: 600px;
    }
    button {
        margin:0 10px 10px 10px;
        padding: 10px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .course .edit {
        background: rgb(164, 246, 164);
    }
    .course .delete {
        background: rgb(200, 199, 198);
    }

</style>