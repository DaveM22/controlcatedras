<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-col cols="5">
        <v-img :src="image" aspect-ratio="1" contain></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import image from '@/assets/azuloma.jpeg'
export default {
  data() {
    return {
      image
    }
  }
}
</script>
