<template>
  <div>
    <v-row no-gutters cols="12">
      <v-col sm="12" md="4">
          <v-card
                outlined
                >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class=" mb-4"><h4>Tareas</h4></div>
                    <div class="small">
                        <DougNult  :chart-data="datacollection" />
                        </div>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                > 
                    <span>
                        <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="red" d="M3,3H9V7H3V3M15,10H21V14H15V10M15,17H21V21H15V17M13,13H7V18H13V20H7L5,20V9H7V11H13V13Z" />
                        </svg>
                    </span>
                </v-list-item-avatar>
                </v-list-item>
                <hr>
                <v-card-actions>
                <v-list-item-subtitle>+80% Tareas Completadas </v-list-item-subtitle>
                <v-btn text>Detalles</v-btn>
                </v-card-actions>
            </v-card>

      </v-col>
      <v-col md="4" sm="12" > 
        <v-card
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class=" mb-4"><h4>Errores</h4></div>
                    <div class="small">
                        <DougNult  :chart-data="dataErrores" />
                    </div>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                > 
                <span>
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                            <path fill="red" d="M11,15H13V17H11V15M11,7H13V13H11V7M12,2C6.47,2 2,6.5 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20Z" />
                        </svg>
                </span>
                </v-list-item-avatar>
                </v-list-item>
                <hr>
                <v-card-actions>
                <v-list-item-subtitle> +95% Errores resueltos </v-list-item-subtitle>
                <v-btn text>Detalles</v-btn>
                </v-card-actions>

            </v-card>
      </v-col>
      <v-col md="4" sm="12">  
            <v-card
                outlined
            >
                <v-list-item three-line>
                <v-list-item-content>
                    <div class="mb-4"><h4>Emails</h4></div>
                    <div class="small">
                        <DougNult  :chart-data="dataEmails" />
                    </div>
                </v-list-item-content>

                <v-list-item-avatar
                    tile
                >
                <span>
                    <svg style="width:24px;height:24px" viewBox="0 0 24 24">
                        <path fill="blue" d="M3 4C1.9 4 1 4.9 1 6V18C1 19.1 1.9 20 3 20H13.5A6.5 6.5 0 0 1 13 18H3V8L11 13L19 8V11A6.5 6.5 0 0 1 19.5 11A6.5 6.5 0 0 1 21 11.18V6C21 4.9 20.1 4 19 4H3M3 6H19L11 11L3 6M19 12L16.75 14.25L19 16.5V15C20.38 15 21.5 16.12 21.5 17.5C21.5 17.9 21.41 18.28 21.24 18.62L22.33 19.71C22.75 19.08 23 18.32 23 17.5C23 15.29 21.21 13.5 19 13.5V12M15.67 15.29C15.25 15.92 15 16.68 15 17.5C15 19.71 16.79 21.5 19 21.5V23L21.25 20.75L19 18.5V20C17.62 20 16.5 18.88 16.5 17.5C16.5 17.1 16.59 16.72 16.76 16.38L15.67 15.29Z" />
                    </svg>
                </span>
                </v-list-item-avatar>
                </v-list-item>
                <hr>
                <v-card-actions>
                <v-list-item-subtitle> +50 Emails recibidos </v-list-item-subtitle>
                <v-btn text>Detalles</v-btn>
                </v-card-actions>
            </v-card>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import DougNult from '../chart/DougNult'
export default {
    name: 'Details',
    components:{
        DougNult
    },

    mounted() {
        this.getDataNut()
    },

    data() {
        return {
            datacollection: null,
            dataEmails: null,
            dataErrores: null
        }
    },
    methods: {
        getDataNut () {
            this.datacollection = {
                datasets: [
                {
                  label: 'control',
                  backgroundColor: [
                     "#FF4B2B",
                     "grey",
                  ],
                  data: ['80','20']
              }],
              labels: ["Completado", "Faltante"]
             },
             this.dataEmails = {
                  datasets: [
                {
                  label: 'control',
                  backgroundColor: [
                     "#009FFF",
                     "grey",
                  ],
                  data: ['15','55']
              }],
              labels: ["Leidos", "Por Abrir"]
             },
             this.dataErrores = {
                  datasets: [
                {
                  label: 'control',
                  backgroundColor: [
                     "#78ffd6",
                     "grey",
                  ],
                  data: ['95','5']
              }],
              labels: ["Completado", "Faltante"]
             }
            }
        }
    

}
</script>

<style>
  .small {
    max-width: 200px;
    margin:  10px auto;
  }

</style>