<template>
    <div>
    <div>
        <h1>{{ msg }}</h1>
    </div>
    <div class="container">
        <button type="button" class="btn btn-outline-info" @click="this.afegirPort()">Afegir port</button>
        <br>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Port de Muntanya</th>
                    <th>Altura (m)</th>
                    <th>Ubicació</th>
                    <th>Descripció</th>
                    <th>ID</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="port in ports" :key="port.nombre">
                    <td>{{ port.nombre }}</td>
                    <td>{{ port.altura_metros }}</td>
                    <td>{{ port.ubicacion }}</td>
                    <td>{{ port.descripcion }}</td>
                    <td>
                        <button class="btn btn-outline-info" @click=this.VisualitzaPort(port.id)>Visualitza</button>
                        <button class="btn btn-outline-warning" @click=this.editaPort(port.id)>Edita</button>
                        <button class="btn btn-outline-danger" @click=this.deletePort(port.id)>🗑️ Borrar</button></td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
  
<script>
export default {
    name: 'Ports',
    data() {
        return {
            msg: "Llista de ports",
            ports: Array, 
        };
    },

    props: {
        //msg: String
    },
    methods: {
        async getPorts() {
            try {
                const response = await fetch('http://localhost:3000/ports');
                this.ports = await response.json();
            } catch (error) {
                console.error(error);
            }
        },
        async deletePort(identificador) {
            try {
                await fetch(`http://localhost:3000/ports/${identificador}`, {
                    method: "DELETE",
                });
                await this.getPorts();
            } catch (error) {
                console.error(error);
            }
        },
        afegirPort(){
            this.$router.push("nouport");
        },
        VisualitzaPort(identificador){
            this.$router.push({name: 'port', params: {id: identificador}});
        },
        editaPort(identificador){
            this.$router.push({name: 'EditaPort', params: {id: identificador}});
        }
    },
    mounted() {
        this.getPorts();
    } 

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  