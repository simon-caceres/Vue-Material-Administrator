<template>
  <v-app>
   <v-card
    class="overflow-hidden"
    height="200rem"
  >
    <v-app-bar
      color="deep-purple accent-9"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin Template</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-BellCheck</v-icon>
      </v-btn>

      <v-btn icon>
        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
            <path fill="currentColor" d="M21,19V20H3V19L5,17V11C5,7.9 7.03,5.17 10,4.29C10,4.19 10,4.1 10,4A2,2 0 0,1 12,2A2,2 0 0,1 14,4C14,4.1 14,4.19 14,4.29C16.97,5.17 19,7.9 19,11V17L21,19M14,21A2,2 0 0,1 12,23A2,2 0 0,1 10,21M19.75,3.19L18.33,4.61C20.04,6.3 21,8.6 21,11H23C23,8.07 21.84,5.25 19.75,3.19M1,11H3C3,8.6 3.96,6.3 5.67,4.61L4.25,3.19C2.16,5.25 1,8.07 1,11Z" />
        </svg>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-filter</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      color="deep-purple accent-2"
      dark
      height="400"
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M10,2H14A2,2 0 0,1 16,4V6H20A2,2 0 0,1 22,8V19A2,2 0 0,1 20,21H4C2.89,21 2,20.1 2,19V8C2,6.89 2.89,6 4,6H8V4C8,2.89 8.89,2 10,2M14,6V4H10V6H14Z" /> 
            </svg> 
            <v-list-item-title class="ma-2">Dashboard</v-list-item-title>
          </v-list-item>

          <v-list-item to="/about">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M17,12V3A1,1 0 0,0 16,2H3A1,1 0 0,0 2,3V17L6,13H16A1,1 0 0,0 17,12M21,6H19V15H6V17A1,1 0 0,0 7,18H18L22,22V7A1,1 0 0,0 21,6Z" />
           </svg>
            <v-list-item-title class="ma-2">Inbox</v-list-item-title>
          </v-list-item>

          <v-list-item to="/calendary">
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <router-link to="/calendary"></router-link>
              <path fill="currentColor" d="M21,17V8H7V17H21M21,3A2,2 0 0,1 23,5V17A2,2 0 0,1 21,19H7C5.89,19 5,18.1 5,17V5A2,2 0 0,1 7,3H8V1H10V3H18V1H20V3H21M3,21H17V23H3C1.89,23 1,22.1 1,21V9H3V21M19,15H15V11H19V15Z" />
          </svg>
            <v-list-item-title class="ma-2">Calendary</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <svg style="width:24px;height:24px" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7,15L11.5,9L15,13.5L17.5,10.5L21,15M22,4H14L12,2H6A2,2 0 0,0 4,4V16A2,2 0 0,0 6,18H22A2,2 0 0,0 24,16V6A2,2 0 0,0 22,4M2,6H0V11H0V20A2,2 0 0,0 2,22H20V20H2V6Z" />
            </svg>
            <v-list-item-title class="ma-2">Grafics</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    
       <router-view></router-view>
  </v-card>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import calendary from './views/Calendary.vue'


export default {
  name: 'App',

  components: {
    HelloWorld,
    calendary
  },

 data: () => ({
      drawer: false,
      group: null,
    }),

    watch: {
      group () {
        this.drawer = false
      },
    },
};
</script>
