<template>
  <div v-if="courses.length" class="home">
    <h2>Llistat de cursos</h2>
    <CourseList :courses="courses" @delete="deleteCourse"/>
  </div>
  <div v-else>
    <p>Carregant cursos...</p>
  </div>
</template>

<script>
import CourseList from '@/components/CourseList.vue'

export default {
  name: 'Home',
  components: {
    CourseList
  },
  data() {
      return {
        courses: []
      }
   },
  mounted() {
    fetch('http://localhost:3000/courses')
    .then(res => res.json())
    .then(data => this.courses = data)
    .catch(err => console.log(err.message))
  },
  methods: {
    deleteCourse(idToDelete){
      this.courses = this.courses.filter(
        item => item.id !== idToDelete
      )
    }
  }
}
</script>
