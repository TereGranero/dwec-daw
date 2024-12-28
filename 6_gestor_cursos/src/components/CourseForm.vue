<template>
   <form @submit.prevent="submit">
     <input v-model="course.name" placeholder="Nom del curs" />
     <input v-model="course.duration" placeholder="Duració" />
     <select v-model="course.level">
       <option value="Principiant">Principiant</option>
       <option value="Intermedi">Intermedi</option>
       <option value="Avançat">Avançat</option>
     </select>
     <button type="submit">Guardar</button>
   </form>
 </template>
 
 <script>
 export default {
   props: {
     id: {
      type: String,
      default: null,
     },
   },
   data(){
    return{
      editing: false,
      course: {
        name: '',
        duration: '',
        level: 'Principiant'
      },
    }
   },
   methods: {
    async getCourse(id){
      try{
        console.log(`Carregant el curs: ${id}`)
        const res = await fetch(`http://localhost:3000/courses/${id}`)
        const data = await res.json()

        if (res.ok){
          this.course = {...data}
        } else {
          throw new Error(`Curs ${id} no trobat`)
        }

      } catch(err) {
        console.log(`Error: ${err.message}`)
      }
    },
    submit() {
      if (!this.editing) {
        this.$emit('add-course', this.course)
      }
      else{
        this.editing = false
        this.$emit('update-course', this.course)
      }
    }
   },
   created(){
    if (this.id){
      this.editing = true
      this.getCourse(this.id)
    }
   }
 }
 </script>