
  <template>
  <v-row cols="12" >
    <v-col md="4">
      <div >
    <v-toolbar
      v-if="variant === 'vertical'"
      color="gray"
    >
      <v-toolbar-title>Title</v-toolbar-title>

      <v-divider
        class="mx-4"
        :inset="inset"
        vertical
      ></v-divider>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <v-btn text>
          News
        </v-btn>

        <v-divider :inset="inset" vertical></v-divider>

        <v-btn text>
          Blog
        </v-btn>

        <v-divider :inset="inset" vertical></v-divider>

        <v-btn text>
          Music
        </v-btn>

        <v-divider :inset="inset" vertical></v-divider>
      </v-toolbar-items>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <v-row v-else>
      <v-col>
        <v-card>
          <v-list>
            <v-list-item @click="">
              <v-list-item-action>
                <v-icon>mdi-inbox-arrow-down</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Enviados</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-action>
                <v-icon>mdi-inbox-arrow-down</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Recientes</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-list-item @click="">
              <v-list-item-action>
                <v-icon>mdi-inbox-arrow-down</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Recibidos</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-subheader>Subheader</v-subheader>

            <v-list-item @click="">
              <v-list-item-action>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Enviados</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item @click="">
              <v-list-item-action>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Recientes</v-list-item-title>
              </v-list-item-content>
            </v-list-item>

            <v-divider :inset="inset"></v-divider>

            <v-list-item @click="">
              <v-list-item-action>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>Recibidos</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      class="mt-12"
      align="center"
      justify="center"
    >
      <v-col
        cols="12"
        md="8"
      >
        <v-select
          v-model="variant"
          :items="itemsNew"
          clearable
          label="Variant"
          light
        ></v-select>
        <template>
          <v-checkbox
            v-model="inset"
            hide-details
            label="Inset"
            light
          ></v-checkbox>
        </template>
      </v-col>
    </v-row>
  </div>
    </v-col>
    <v-col md="8">
      <v-card>
        <v-list two-line>
          <template v-for="(item, index) in items.slice(0, 12)">
            <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
            <v-divider v-else-if="item.divider" :key="index" :inset="item.inset"></v-divider>
            <v-list-item v-else :key="item.title" @click="">
              <v-list-item-avatar>
                <img :src="item.avatar">
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title v-html="item.title"></v-list-item-title>
                <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </template>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    data: () => ({
      items: [
        { header: 'Today' },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='font-weight-bold'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='font-weight-bold'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg', title: 'Oui oui', subtitle: "<span class='font-weight-bold'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
         { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg', title: 'Oui oui', subtitle: "<span class='font-weight-bold'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
         { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg', title: 'Oui oui', subtitle: "<span class='font-weight-bold'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
         { divider: true, inset: true },
        { avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg', title: 'Oui oui', subtitle: "<span class='font-weight-bold'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
      ],
      inset: false,
      itemsNew: [
        'default',
        'vertical',
      ],
      variant: 'default',
    }),
  }
</script>

