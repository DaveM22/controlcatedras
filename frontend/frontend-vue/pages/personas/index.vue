<template>
  <v-data-table :headers="headers" :items="personas" class="elevation-1">
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Personas</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <template>
          <v-btn color="primary" dark class="mb-2" to="/personas/nuevo"
            >Nueva persona</v-btn
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
        { text: 'Id', value: 'id' },
        { text: 'Legajo', value: 'legajo' },
        { text: 'Dni', value: 'dni' },
        { text: 'Apellido', value: 'apellido' },
        { text: 'Nombre', value: 'nombre' },
        { text: 'E-Mail', value: 'email' },
        { text: 'Acciones', value: 'action', sortable: false }
      ]
    }
  },
  head() {
    return {
      title: 'Personas'
    }
  },
  computed: mapState('personas', ['personas']),
  async mounted() {
    await this.GetData()
  },
  methods: {
    ...mapActions('personas', ['GetData']),

    editar(item) {
      this.$router.push({
        name: 'cursos-editar-id',
        params: { id: item.id, curso: item }
      })
    }
  }
}
</script>
