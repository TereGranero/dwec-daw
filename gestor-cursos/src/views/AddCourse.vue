<template>
    <div>
        <h2>Afegir curs</h2>
        <CourseForm :course="newCourse" @submit="handleSubmit"/>
    </div>
</template>

<script>
import CourseForm from '@/components/CourseForm.vue'
export default {
    components: { CourseForm },
    data(){
        return {
            newCourse: {
                name: '',
                duration: '',
                level: 'Principiant'
            }
        }
    },
    methods: {
        cancelEdition(){
            this.$router.push({ name: 'home'})
        },
        async handleSubmit(newCourse){
            try{
                const response = await fetch('http://localhost:3000/courses', {
                    method: 'POST',
                    body: JSON.stringify(newCourse),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                if (!response.ok) {alert("El nou curs no s'ha afegit...")}
                this.$router.push({ name: 'home'})
            } catch (error) {
                {alert("No és possible la conexió amb el servidor...")}
            }
        }
    }
}
</script>

<style>
   form {
      max-width: 420px;
      margin: 30px auto;
      background: white;
      text-align: left;
      padding: 40px;
      border-radius: 10px;
   }
   label {
      color: #aaa;
      display: inline-block;
      margin: 25px 0 15px;
      font-size: 0.6em;
      text-transform: uppercase;
      letter-spacing: 1px;
      font-weight: bold;
   }
   input, select {
      display:block;
      padding: 10px 6px;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-bottom: 1px solid #ddd;
      color: #555;
   }
   .form-buttons {
        text-align: center;
        margin-top: 30px;
   }
   .form-buttons .submit{
        background: rgb(164, 246, 164);
   }
   .form-buttons .cancel {
        background: rgb(200, 199, 198);
    }
</style>