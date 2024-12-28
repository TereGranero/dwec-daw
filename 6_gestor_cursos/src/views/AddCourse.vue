<template>
  <CourseForm @add-course="addCourse"/>
</template>

<script>
import CourseForm from '@/components/CourseForm.vue'
export default {
  components: {CourseForm},
  methods: {
    async addCourse(newCourse){
      try{
        console.log("Creant el nou curs")

        // search last id
        const res = await fetch('http://localhost:3000/courses')
        const courses = await res.json()
      
        let id = 1
        if (courses.length > 0){
          id = parseInt(courses[courses.length - 1].id) + 1
        }
        newCourse.id = id.toString()
        
        // post the new course
        const postRes = await fetch('http://localhost:3000/courses', {
          method: 'POST',
          body: JSON.stringify(newCourse),
          headers: {
              'Content-type': 'application/json; charset=UTF-8',
          },
        })
        
        if(!postRes.ok) {
          throw new Error("El curs no s'ha pogut crear.")
        }

        const postResJson= await postRes.json()
        console.log(postResJson)
        
        // return to home
        await this.$router.push("/")

      } catch (err) {
        console.log(`Error: ${err.message}`)
      }
    },
  },
}
</script>

<style>
</style>