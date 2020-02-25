<template>
  <v-data-table :headers="headers" :items="comisiones" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Comisiones</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template>
          <v-btn color="primary" dark class="mb-2" to="/comisiones/nuevo"
            >Nueva comision</v-btn
          >
        </template>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon small class="mr-2" @click="editar(item)">
        mdi-pencil
      </v-icon>
      <v-icon small @click="deleteItem(item)">
        mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Nivel', value: 'nivel' },
        { text: 'Acciones', value: 'action', sortable: false }
      ]
    }
  },
  head() {
    return {
      title: 'Cursos'
    }
  },
  computed: mapState('comisiones', ['comisiones']),
  async mounted() {
    await this.GetData()
  },
  methods: {
    ...mapActions('comisiones', ['GetData']),

    editar(item) {
      this.$router.push({
        name: 'comisiones-editar-id',
        params: { id: item.id, comision: item }
      })
    }
  }
}
</script>
