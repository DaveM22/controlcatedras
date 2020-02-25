<template>
  <div>
    <v-app dark>
      <v-navigation-drawer
        v-model="drawer"
        :mini-variant="miniVariant"
        :clipped="clipped"
        fixed
        app
      >
        <v-list>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
          >
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-app-bar :clipped-left="clipped" fixed app>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
        <v-toolbar-title v-text="title" />
        <v-spacer />

        <v-btn v-if="$auth.loggedIn" text>
          <v-icon left>mdi-account-circle</v-icon>
          Iniciar sesión
        </v-btn>
        <v-btn v-else text>
          <v-icon left>mdi-account-circle</v-icon>
          Iniciar sesión
        </v-btn> </v-app-bar
      ><v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-content>
        <v-container>
          <nuxt />
        </v-container>
      </v-content>
      <v-navigation-drawer v-model="rightDrawer" :right="right" temporary fixed>
        <v-list>
          <v-list-item @click.native="right = !right">
            <v-list-item-action>
              <v-icon light>
                mdi-repeat
              </v-icon>
            </v-list-item-action>
            <v-list-item-title>Switch drawer (click me)</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-footer :fixed="fixed" app>
        <span>&copy; 2020 - Utn FRRo - Catedra Java</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Catedras',
          to: '/cursos'
        },
        {
          icon: 'mdi-apps',
          title: 'Personas',
          to: '/personas'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Comisiones',
          to: '/Comisiones'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'No entrar',
          to: '/felicidad'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>
