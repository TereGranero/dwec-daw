<template>
  <div class="hello container">
    <h1>EXEMPLE APLICACIÓ API REST - CRUD COMPLET</h1>
    <p>
      Aquest és un exemple de projecte senzill on s'inclou un component de menú, un ROUTER-VIEW, 
      i es tenen diferents components per a mostrar tots els ports, mostrar un port en concret 
      (fent ús de la id), crear ports nous, editar ports i esborrar.

    </p>
    <p>
      Tenim per tant una senzilla API REST amb un CRUD complet. Evidentment la funcionalitat és molt
       limitada, no hi ha validació de formulari ni gestió d'errades, però vos pot servir per a vore
        un exemple complet.
    </p>
    <p>Les crides AJAX al backend es fan en local, i s'utilitza json-server per a muntar el backend de 
       forma senzilla.
    </p>
    <p>
      Pots consultar la documentació del curs ací:
      <a href="https://xusodocent.github.io/dwec_web/DWEC_UD7_vue_router/" target="_blank" rel="noopener">Pàgina del curs</a>
    </p>
    <p>
      També tens disponible la documentació de VUE:
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>
    </p>
    <p>
      Per a posar en marxa la part del back-end tenin un directori dintre d'aquest projecte que es diu 
      model_backend. Dintre teniu un arxiu ports.json que és el que heu de llençar amb el json-server. 
      Com que el json-server és limitat, en l'exemple teniu una funció que genera ids per als elements 
      nous, que en un back-end més funcional no haurieu d'incloure.
    </p>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    //msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
