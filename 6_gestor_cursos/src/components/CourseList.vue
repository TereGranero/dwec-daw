<template>
   <div>
     <CourseItem
       v-for="course in courses"
       :key="course.id"
       :course="course"
       @edit="editCourse" 
       @delete="deleteCourse"
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
       this.$router.push({name: 'EditCourse', params: { id }});
     },
     deleteCourse(id) {
       this.$emit('delete', id);
     }
   }
 };
 </script>

<style>
</style>