<template>
  <div>
    <UsuarioForm />
  </div>
</template>

<script>
import UsuarioForm from '@/components/UsuarioForm'
export default {
  components: {
    UsuarioForm
  },
  props: {
    source: String
  }
}
</script>
