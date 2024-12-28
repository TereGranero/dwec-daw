<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-12"> 
        <h1>Personas</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <formulario-persona @add-persona="agregarPersona" />
        <tabla-personas 
          :personas="personas" 
          @delete-persona="eliminarPersona" 
          @actualizar-persona="actualizarPersona"/>
      </div>
    </div>
  </div>
</template>

<script>
import TablaPersonas from './components/TablaPersonas.vue'
import FormularioPersona from './components/FormularioPersona.vue'

export default {
  name: 'App',
  components: {
    TablaPersonas,
    FormularioPersona
  },
  data() {
    return {
      personas: [
        {
          id: 1,
          nombre: 'Jon',
          apellido: 'Nieve',
          email: 'jon@email.com',
        },
        {
          id: 2,
          nombre: 'Tyrion',
          apellido: 'Lannister',
          email: 'tyrion@email.com',
        },
        {
          id: 3,
          nombre: 'Daenerys',
          apellido: 'Targaryen',
          email: 'daenerys@email.com',
        }
      ]
    }
  },
  methods: {
    agregarPersona(persona) {
      let id = 1;

      if (this.personas.length > 0) {
        id = this.personas[this.personas.length - 1].id + 1;
      }

      this.personas = [...this.personas, {...persona, id}]; // Add object to array of object to avoid nesting
    },
    eliminarPersona(id) {
      this.personas = this.personas.filter(  // those which fullfill condition remain
        persona => persona.id !== id
      );
    },
    actualizarPersona(personaActualizada, id) {
      this.personas = this.personas.map(
        persona => persona.id === id ? personaActualizada : persona
      );
    }
  }
}
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }
</style>
