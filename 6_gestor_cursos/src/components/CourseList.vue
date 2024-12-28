<template>
   <div>
     <CourseItem
       v-for="course in courses"
       :key="course.id"
       :course="course"
       @edit=this.editCourse(course.id)
       @delete=this.deleteCourse(course.id)
     />
   </div>
 </template>
 
 <script>
 import CourseItem from './CourseItem.vue';
 
 export default {
   components: { CourseItem },
   props: {
     courses: Array,
   },
   methods: {
     editCourse(id) {
       this.$router.push({name: 'EditCourse', params: {id: id}});
     },
     deleteCourse(id) {
       this.$emit('delete', id);
     }
   }
 };
 </script>

<style>

</style>