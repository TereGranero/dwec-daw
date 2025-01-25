<template>
  <div>
    <h3>{{ course.name }}</h3>
    <p>Duració: {{ course.duration }}</p>
    <p>Nivell: {{ course.level }}</p>
    <button @click="$emit('edit', course.id)">Editar</button>
    <button @click="$emit('delete', course.id)">Esborrar</button>
  </div>
</template>

<script>
export default {
  props: {
    course: Object
  }
}
</script>

<style>
h3 {
  margin: 40px 0 0;
}
</style>