<template>
    <div class="container">
        <h1>Lista de Convocatorias Habilitadas</h1>
        <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
    name: 'LisConvocatorias',
        data() {
            return {
                convocatorias: [
                    
                ]
            }
        },
        mounted () {
            this.axios.get('/convocatoria/listar')
            .then( r => {
                console.log(r.data.data);
                //this.convocatorias = r.data.data;
            })
        }
    }
</script>