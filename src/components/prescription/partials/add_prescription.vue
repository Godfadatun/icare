<template>
  <div>
    <q-card flat class="my-card">
      <q-card-section class="row">
        <div class="text-h6">Add New Prescription</div>
        <q-space />
        <q-input filled v-model="date">
          <template v-slot:prepend>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-date v-model="date" mask="YYYY-MM-DD HH:mm" />
              </q-popup-proxy>
            </q-icon>
          </template>

          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="date" mask="YYYY-MM-DD HH:mm" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-card-section>
        <div class="row full-width">
          <q-input class="col-xs-12 col-sm-6 q-pr-sm" v-model="text" type="text" label="Doctors Name" />
          <q-input class="col-xs-12 col-sm-6 q-pl-sm" v-model="text" type="text" label="Doctors Phone" />
        </div>
        <q-input v-model="text" type="text" label="Diagnosis" />
        <q-input v-model="text" type="textarea" label="Doctors instruction" />

      </q-card-section>
      <q-card-section>
        <div class="text-h6 text-bold">Medications</div>
        <div class="row q-gutter-xs">
          <q-card class="my-card" v-for="(item, index) in data" :key="index" style="min-width: 300px">
            <q-card-section class="flec flex-center">
              <div class="text-bold text-primary text-capitalize row">
                <div>{{item.name}}</div>
                <q-space />
                <div>{{item.duration + ' days'}}</div>
              </div>
              <div class="text-capitalize">{{item.type}}</div>
              <div class="row flex-center">
                <div class="col-xs-12 col-sm-4 text-center  col-md-4 text-bold" v-if="item.morning">
                  <div class="text-caption">Morning</div>
                  <div class="text-h3">{{item.morning}}</div>
                </div>
                <div class="col-xs-12 col-sm-4 text-center  col-md-4 text-bold" v-if="item.afternoon">
                  <div class="text-caption">Afternoon</div>
                  <div class="text-h3">{{item.afternoon}}</div>
                </div>
                <div class="col-xs-12 col-sm-4 text-center  col-md-4 text-bold" v-if="item.night">
                  <div class="text-caption">Night</div>
                  <div class="text-h3">{{item.night}}</div>
                </div>

                <div class="col-12 text-bold text-center " v-if="item.hourly.dosage || item.hourly.dosage">
                  <div class="text-caption">Every {{item.hourly.hours + ' hours'}}</div>
                  <div class="text-h3">{{item.hourly.dosage}}</div>
                </div>
              </div>
            </q-card-section>
          </q-card>

          <Add @dosage="addDosageFnc"/>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import Add from './addPresc'
export default {
  // name: 'ComponentName',
  components:{
    Add
  },
  data () {
    return {
      date: new Date(),
      data:[
        {
          name: 'Paracetamol',
          duration: '10',
          type: 'tablet',
          morning: '2',
          afternoon: '',
          night: '',
          hourly: '',

        },
        {
          name: 'Tetra-Cycline',
          duration: '5',
          type: 'Injection',
          morning: '2',
          afternoon: '2',
          night: '2',
          hourly: '',
        },
        {
          name: 'paracydine',
          duration: '30',
          type: 'Injection',
          morning: '',
          afternoon: '',
          night: '',
          hourly: {dosage: '6', hours: '2'},
        }
      ]
    }
  },
  methods: {
    addDosageFnc(e){
      this.data.push(e)
    }
  },
}
</script>
