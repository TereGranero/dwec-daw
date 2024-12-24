<template>
    <div v-if="courses.length">
      <CourseItem
        v-for="course in courses"
        :key="course.id"
        :course="course"
        @edit="editCourse"
        @delete="deleteCourse"
        class="course"
      />
    </div>
    <div v-else>
        <p>No hi ha cap curs...</p>
    </div>
</template>

<script>
import CourseItem from './CourseItem.vue';

export default {
components: { CourseItem },
props: {
    courses: Array
},
methods: {
    editCourse(id) {
        this.$router.push(`/editar/${id}`);
    },
    deleteCourse(id) {
        this.$emit('delete', id);
    }
}
};
</script>
