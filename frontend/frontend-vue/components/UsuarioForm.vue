<template>
  <v-container>
    <v-row justify="space-between">
      <v-col cols="12" md="4">
        <h2>Login</h2>
        <v-form ref="form">
          <v-text-field
            v-model="model"
            :counter="max"
            :rules="rules"
            label="Nombre de usuario"
          ></v-text-field>
          <v-text-field
            :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show2 ? 'text' : 'password'"
            name="input-10-2"
            label="Visible"
            hint="At least 8 characters"
            value="wqfasds"
            class="input-group--focused"
            @click:append="show2 = !show2"
          ></v-text-field>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>
