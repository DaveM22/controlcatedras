<template>
  <v-container fluid>
    <v-row align="center">
      <v-form ref="form" v-model="valid">
        <v-text-field
          v-model="dni"
          :rules="dniRules"
          label="Dni"
          required
        ></v-text-field>
        <v-text-field
          v-model="apellido"
          :rules="apellidoRules"
          label="Apellido"
          required
        ></v-text-field>
        <v-text-field
          v-model="nombre"
          :rules="nombreRules"
          label="Nombre"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>
        <v-text-field
          v-model="legajo"
          :rules="legajoRules"
          label="Legajo"
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
      </v-form>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data: () => ({
    valid: true,
    dni: 0,
    nombre: '',
    apellido: '',
    email: '',
    legajo: 0,
    idpersona: 0,
    dniRules: [(x) => x !== 0 || 'El campo dni debe ser un valor mayor a 0'],
    nombreRules: [
      (x) => !!x || 'El campo descripcion es requerido',
      (x) =>
        (x && x.length >= 25) ||
        'El campo nombre no puede superar los 25 caracteres'
    ],
    apellidoRules: [
      (x) => !!x || 'El campo apellido es requerido',
      (x) =>
        (x && x.length >= 25) ||
        'El campo apellido no puede superar los 25 caracteres'
    ],
    emailRules: [
      (x) => !!x || 'El campo email es requerido',
      (x) =>
        (x && x.length >= 25) ||
        'El campo email no puede superar los 25 caracteres'
    ],
    legajoRules: [
      (x) => x !== 0 || 'El campo legajo debe ser un valor mayor a 0'
    ]
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
        this.$router.push('/personas')
      }
    },
    reset() {
      this.$refs.form.reset()
    },
    resetValidation() {
      this.$refs.form.resetValidation()
    },
    ...mapActions('personas', ['AddPersona'])
  }
}
</script>
