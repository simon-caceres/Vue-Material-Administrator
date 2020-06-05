<template>
<v-container     
    class="d-flex align-end flex-column"
    color="grey lighten-2"
    flat
    tile
    height="300"
    >
    <v-card
    max-width="400"
    sm="12"
    >
    <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      <v-icon>mdi-window-minimize</v-icon>

      <v-icon>mdi-window-maximize</v-icon>

      <v-icon>mdi-close</v-icon>
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      
          <div class="text-center">
        <v-menu offset-y>
      <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on">
        </v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in itemsMenu"
          :key="index"
        >
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
      

      <v-toolbar-title>My team projects:</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
            <v-card-title class="headline">Projectos en fila:</v-card-title>
            <v-card-subtitle>Proximas Fechas por vencer.</v-card-subtitle>
            <v-card-subtitle>Ordenadas por lider de equipo.</v-card-subtitle>

            <v-card-actions>
              <v-btn text>Agregar nuevo</v-btn>
            </v-card-actions>
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in items"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="75"
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
   
</v-container>
</template>

<script>
  export default {
    name: 'projects',
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://randomuser.me/api/portraits/men/75.jpg',
          title: 'Diseño Web Site',
          artist: 'Jose Vargas',
        },
        {
          color: '#952175',
          src: 'https://randomuser.me/api/portraits/men/85.jpg',
          title: 'App ',
          artist: 'Mario Zuñiga',
        },
      ],
      itemsMenu: [
        { title: 'Historial' },
        { title: 'Terminados' },
        { title: 'Rediseñados' },
        { title: 'Nuevas Fechas' },
      ],
    }),
  }
</script>

<style>

</style>