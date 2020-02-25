<template>
  <v-container fluid>
    <v-row align="center">
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="descripcion"
          :counter="25"
          :rules="descripcionRules"
          label="Descripcion"
          required
        ></v-text-field>
        <v-text-field
          v-model="nivel"
          :rules="nivelRules"
          label="Nivel"
          required
        >
        </v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          class="mr-4"
          @click="validate"
        >
          Guardar
        </v-btn>

        <v-btn color="error" class="mr-4" @click="reset">
          Borrar datos
        </v-btn>
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    valid: true,
    descripcion: '',
    nivel: 0,
    descripcionRules: [
      (x) => !!x || 'El campo descripción es requerido',
      (x) =>
        (x && x.length <= 25) ||
        'La descripcion de la comision no debe superar los 25 caracteres'
    ],
    nivelRules: [(x) => x !== 0 || 'El campo dni debe ser un valor mayor a 0']
  }),
  mounted() {
    this.comisionActual = this.$route.params.comision
    this.id = this.comisionActual.id
    this.descripcion = this.comisionActual.descripcion
    this.nivel = this.comisionActual.nivel
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.UpdateComision({
          id: this.id,
          descripcion: this.descripcion,
          nivel: this.nivel
        })
        this.$router.push('/comisiones')
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    ...mapActions('comisiones', ['UpdateComision'])
  }
}
</script>
