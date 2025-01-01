<template>
    <div class="container">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Port de Muntanya</th>
                    <th>Altura (m)</th>
                    <th>Categoria</th>
                    <th>Ubicació</th>
                    <th>Etapas Destacades</th>
                    <th>Descripció</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ port.id }}</td>
                    <td>{{ port.nombre }}</td>
                    <td>{{ port.altura_metros }}</td>
                    <td>{{ port.categoria }}</td>
                    <td>{{ port.ubicacion }}</td>
                    <td>{{ port.etapas_destacadas.join(', ') }}</td>
                    <td>{{ port.descripcion }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
export default {
    name: 'Port',
    data() {
        return {
            msg: "Llista de ports",
            id: 1,
            port: {
                "id": 1,
                "nombre": "Col du Tourmalet",
                "altura_metros": 2115,
                "categoria": "HC",
                "ubicacion": "Pirineos",
                "etapas_destacadas": [],
                "descripcion": "Uno de los puertos más icónicos del Tour de Francia, con vistas impresionantes y desafíos para los ciclistas."
            },

        };
    },

    props: {
        //msg: String
    },
    methods: {
        async getPort() {
            try {
                const response = await fetch(`http://localhost:3000/ports/${this.id}`);
                this.port = await response.json();
            } catch (error) {
                console.error(error);
            }
        }
    },

    mounted() {
        this.id = this.$route.params.id;
        console.log(this.id);
        this.getPort();
    }

}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>