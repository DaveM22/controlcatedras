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

        <v-btn color="warning" @click="resetValidation">
          Reset Validation
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
    descripcionRules: [
      (x) => !!x || 'El campo descripción es requerido',
      (x) =>
        (x && x.length <= 25) ||
        'La descripcion de la catedra no debe superar los 25 caracteres'
    ],
    anio: 2019
  }),
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        this.snackbar = true
        this.AddCurso({
          id: null,
          descripcion: this.descripcion,
          anio: this.anio
        })
        this.$router.push('/cursos')
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    ...mapActions('catedras', ['AddCurso'])
  }
}
</script>
