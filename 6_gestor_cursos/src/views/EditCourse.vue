<template>
   <CourseForm :id="id" @update-course="updateCourse"/>
 </template>
 
 <script>
 import CourseForm from '@/components/CourseForm.vue'
 export default {
   components: {CourseForm},
   props: {
      id: {
         type: String,
         required: true,
      }
   },
   methods: {
     async updateCourse(course){
       try{
         console.log("Actualitzant el curs")

         const res = await fetch(`http://localhost:3000/courses/${this.id}`, {
           method: 'PUT',
           body: JSON.stringify(course),
           headers: {
               'Content-type': 'application/json; charset=UTF-8',
           },
         })
         
         if(!res.ok) {
           throw new Error("El curs no s'ha pogut actualitzar.")
         }
 
         const resJson= await res.json()
         console.log(resJson)
         
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