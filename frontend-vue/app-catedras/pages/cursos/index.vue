<template>
  <v-data-table :headers="headers" :items="catedras" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Cursos</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon @click="editar(item)" small class="mr-2">
        mdi-pencil
      </v-icon>
      <v-icon @click="deleteItem(item)" small>
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn @click="initialize" color="primary">Reset</v-btn>
    </template>
  </v-data-table>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  head: {
    title: 'Cursos'
  },
  data() {
    return {
      search: '',
      headers: [
        { text: 'ID', value: 'id' },
        { text: 'Descripcion', value: 'descripcion' },
        { text: 'Año', value: 'anio' },
        { text: 'Acciones', value: 'action', sortable: false }
      ]
    }
  },
  computed: mapState('catedras', ['catedras']),
  async mounted() {
    await this.GetData()
  },
  methods: {
    ...mapActions('catedras', ['GetData']),

    editar(item) {
      this.$router.push({
        name: 'cursos-editar-id',
        params: { id: item.id, curso: item }
      })
    },

    deleteItem(item) {
      this.$router.push({
        name: 'cursos-eliminar-id',
        params: { id: item.id, curso: item }
      })
    }
  }
}
</script>
