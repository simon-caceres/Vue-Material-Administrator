<template>
<div>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="64">
        <v-toolbar flat color="white">

          <!-- Botón Agregar Evento -->
          <v-btn color = "primary" dark class="mr-4" @click="dialog = true">
            Agregar
          </v-btn>

          <v-btn outlined class="mr-4" @click="setToday">
            Hoy
          </v-btn>
          <v-btn fab text small @click="prev">
            <v-icon small>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab text small @click="next">
            <v-icon small>mdi-chevron-right</v-icon>
          </v-btn>
          <v-toolbar-title>{{ title }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-menu bottom right>
            <template v-slot:activator="{ on }">
              <v-btn
                outlined
                v-on="on"
              >
                <span>{{ typeToLabel[type] }}</span>
                <v-icon right>mdi-menu-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item @click="type = 'day'">
                <v-list-item-title>Día</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'week'">
                <v-list-item-title>Semana</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = 'month'">
                <v-list-item-title>Mes</v-list-item-title>
              </v-list-item>
              <v-list-item @click="type = '4day'">
                <v-list-item-title>4 dias</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
      </v-sheet>
      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          v-model="focus"
          color="primary"
          :events="events"
          :event-color="getEventColor"
          :event-margin-bottom="3"
          :now="today"
          :type="type"
          @click:event="showEvent"
          @click:more="viewDay"
          @click:date="viewDay"
          @change="updateRange"
          :weekdays="[1,2,3,4,5,6,0]"
          locale="es"
          :short-weekdays="false"
        ></v-calendar>



        <!-- Agregar Modal Agregar Evento -->
        <v-dialog v-model="dialog" height="500">
          <v-card>
            <v-container>
              <v-form @submit.prevent="addEvent">
                <v-text-field type="text" label="agregar Nombre" v-model="name">
                </v-text-field>
                <v-text-field type="text" label="agregar Detalle" v-model="details">
                </v-text-field>
                <v-text-field type="date" label="inicio de evento" v-model="start">
                </v-text-field>
                <v-text-field type="date" label="fin de evento" v-model="end">
                </v-text-field>
                 <v-text-field type="color" label="color" v-model="color">
                </v-text-field>
                <v-btn type="submit" color="primary" class="mr-4" @click.stop="dialog = false">Agregar </v-btn>
              </v-form>
            </v-container>
          </v-card>
        </v-dialog>


        <v-menu
          v-model="selectedOpen"
          :close-on-content-click="false"
          :activator="selectedElement"
          
          offset-x
        >
          <v-card
            color="grey lighten-4"
            min-width="350px"
            flat
          >
            <!-- Agregar Funcionalidades Editar y Eliminar -->
            <v-toolbar
              :color="selectedEvent.color"
              dark
            >
              <v-btn icon @click="deleteEvent(selectedEvent)">
                <v-icon>mdi-delete</v-icon>
              </v-btn>
              <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>



            <v-card-text>
              <v-form v-if = "currentlyEditing !== selectedEvent.id ">
                {{selectedEvent.name}} - {{selectedEvent-details}}
              </v-form>
              <v-form v-else>
                <v-text-field 
                type="text" v-model="selectedEvent.name"
                label="Editar Nombre"
                >
                </v-text-field>
                <textarea-autosize
                v-model = "selectedEvent.details"
                type="text"
                style=" width: 100%"
                :min-height="100">

                </textarea-autosize>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-btn
                text
                color="secondary"
                @click="selectedOpen = false"
              >
                Cancel
              </v-btn>
              <!-- Editar eventos -->
              <v-btn 
                v-if = "currentlyEditing !== selectedEvent.id "
                @click.prevent="editEvent(selectedEvent.id)">
                Editar
              </v-btn>
              <!-- Actualizar eventos -->
              <v-btn text v-else @click.prevent="updateEvent(selectedEvent)">
                Guardar Cambios
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-sheet>
    </v-col>
  </v-row>
  </div>
</template>

<script>

import {db} from '../main'

  export default {
    name: 'HelloWorld',
    data: () => ({
      //enfocando la fecha y el dia del usuario
      today: new Date().toISOString().substr(0, 10),
      focus: new Date().toISOString().substr(0, 10),
      type: 'month',
      typeToLabel: {
        month: 'Mes',
        week: 'Week',
        day: 'Day',
        '4day': '4 Days',
      },
      start: null,
      end: null,
      selectedEvent: {},
      selectedElement: null,
      selectedOpen: false,
      events: [],
      // Adicionales...
      name: null,
      details: null,
      color: '#1976D2',
      dialog: false,
      currentlyEditing: null
    }),
    computed: {
      title () {
        const { start, end } = this
        if (!start || !end) {
          return ''
        }

        const startMonth = this.monthFormatter(start)
        const endMonth = this.monthFormatter(end)
        const suffixMonth = startMonth === endMonth ? '' : endMonth

        const startYear = start.year
        const endYear = end.year
        const suffixYear = startYear === endYear ? '' : endYear

        const startDay = start.day + this.nth(start.day)
        const endDay = end.day + this.nth(end.day)

        switch (this.type) {
          case 'month':
            return `${startMonth} ${startYear}`
          case 'week':
          case '4day':
            return `${startMonth} ${startDay} ${startYear} - ${suffixMonth} ${endDay} ${suffixYear}`
          case 'day':
            return `${startMonth} ${startDay} ${startYear}`
        }
        return ''
      },
      monthFormatter () {
        return this.$refs.calendar.getFormatter({
          timeZone: 'UTC', month: 'long',
        })
      },
    },
    mounted () {
      this.$refs.calendar.checkChange();
      
    },
    created(){
      //se llama los eventos desde la firebase en created para optimizar la carga
      this.getEvents();
    },
    methods: {

      //eventos desde vuetify para desarrollo de calendario
      viewDay ({ date }) {
        this.focus = date
        this.type = 'day'
      },
      getEventColor (event) {
        return event.color
      },
      setToday () {
        this.focus = this.today
      },
      prev () {
        this.$refs.calendar.prev()
      },
      next () {
        this.$refs.calendar.next()
      },
      showEvent ({ nativeEvent, event }) {
        const open = () => {
          this.selectedEvent = event
          this.selectedElement = nativeEvent.target
          setTimeout(() => this.selectedOpen = true, 10)
        }

        if (this.selectedOpen) {
          this.selectedOpen = false
          setTimeout(open, 10)
        } else {
          open()
        }

        nativeEvent.stopPropagation()
      },
      updateRange ({ start, end }) {
       
        this.start = start
        this.end = end
      },
      nth (d) {
        return d > 3 && d < 21
          ? 'th'
          : ['th', 'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th'][d % 10]
      },

    //inicio de eventos para manejar database
      async getEvents(){
        try {
          //snapshot es una const propia de firebase
           const snapshot = await db.collection("calEvent").get();
            const events = [];
          //recorriendo resultados: 
          snapshot.forEach(doc => {
            //convirtiendo la informacion traida a un doc
            let appData = doc.data();
            appData.id = doc.id;
            //ingresando la informacion a events(array vacio)
            events.push(appData);
            });
          this.events = events;
        } catch (error) {
          console.log(error);
        }
      },
      async addEvent(){
        try {
          //primero pregunto si todos los elementos estan llenos
          if(this.name && this.start && this.end){
            //esperando que la informacion sea llevada a la data de firebase
            await db.collection('calEvent').add({
              //adiero informacion segun parametros creados en la base de datos
              name: this.name,
              details: this.details,
              start: this.start,
              end: this.end,
              color: this.color
            })
            //se hace llamado al evento que trae la informacion de la base de datos para que no sea necesario volver a cargar la pagina
            this.getEvents();

            //limpiando parametros para futuras solicitudes(dentro de la pagina)
            this.name = null;
            this.details = null;
            this.start = null;
            this.end = null;
            this.color = '#1976D2'

          }else{
            alert('campos obligatoriso')
          }
        } catch (error) {
          console.log(error)
        }
      },
      //borrando eventos
      async deleteEvent(e){
        try {
          //espera a acceder a la data (se debe relacionar con id para que no de error)
          await db.collection('calEvent').doc(e.id).delete();
          //se pasa el evento de la ventana modal a false para que se cierre al culminar
          this.selectedOpen = false;
          //nuevamente llamamos la funcion para no tener que recargar la pagina
          this.getEvents();
        } catch (error) {
          console.log(error)
        }
      },

      //funcion para editar evento y se le pasan los parametros
      editEvent(ev){
        this.currentlyEditing = ev 
      },
      //actualizando eventos
        async updateEvent(ev){
      try {
        await db.collection('calEvent').doc(ev.id).update({
          name: ev.name,
          details: ev.details
        })
      //cierra ventana modal
        this.selectedOpen = false;
      //se limpia selector
        this.currentlyEditing = null;

      } catch (error) {
        console.log(error)
      }
    }
    }
  
  }
</script>
