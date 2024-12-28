<template>
  <div class="home">
    <button type="text" @click="addNewCourse">Afegir curs</button><br>
    <CourseList :courses="courses" @delete="deleteCourse" />
  </div>
</template>

<script>
import CourseList from '@/components/CourseList.vue'

export default {
  name: 'Home',
  components: {CourseList},
  data(){
    return{
      courses: [],
    }
  },
  methods: {
    async getCourses() {
      try{
        const res = await fetch('http://localhost:3000/courses')
        this.courses = await res.json();
      } catch (err) {
        console.error(err);
      }
    },
    async deleteCourse(id){ 
      try{
        const res = await fetch(`http://localhost:3000/courses/${id}`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
        })

        if (!res.ok) {
          throw new Error(`Error en la crida al servidor: ${res}`)
        }

        console.log(`Curs ${id} eliminat correctament`)
        await this.getCourses()    

      } catch (err){
        console.error(err)
      }
    },
    addNewCourse(){
      this.$router.push({name: 'AddCourse'})
    },
  },
  mounted(){
    this.getCourses()
  },
}
</script>
