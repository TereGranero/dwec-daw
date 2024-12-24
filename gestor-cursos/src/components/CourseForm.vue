<template>
    <form @submit.prevent="submit">
      <input v-model="course.name" placeholder="Nom del curs" />
      <input v-model="course.duration" placeholder="Duració" />
      <select v-model="course.level">
        <option>Principiant</option>
        <option>Intermedi</option>
        <option>Avançat</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
</template>

<script>
export default {
props: {
    course: Object
},
emits: ['submit'],
methods: {
    submit() {
    this.$emit('submit', this.course);
    }
}
};
</script>