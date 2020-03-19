<template>
  <div>
    <q-card flat class="my-card">
      <!-- <q-card-section class="row">
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
      </q-card-section> -->
      <q-card-section>
        <div class="row full-width">
          <q-input class="col-xs-12 col-sm-6 q-pr-sm" v-model="form.doctor_name" label="Doctors Name" />
          <q-input class="col-xs-12 col-sm-6 q-pl-sm" v-model="form.doctor_phone" label="Doctors Phone" />
        </div>
        <q-input v-model="form.diagnosis" label="Diagnosis" />
        <q-input v-model="form.doctor_instruction" type="textarea" label="Doctors instruction" />
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


              <div class="text-capitalize row">
                <div>{{item.type}}</div>
                <q-space />
                <div class="row">
                  <Editor @dosage="item = $event" />
                  <q-btn round flat color="negative" icon="ion-trash" />
                </div>
              </div>
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
      <q-btn color="primary" label="Save Prescription" @click="save_prescription" />
    </q-card>
  </div>
</template>

<script>
import Add from './addPresc'
import Editor from './edit_Presc'
export default {
  // name: 'ComponentName',
  components:{
    Add, Editor
  },
  data () {
    return {
      date: new Date(),
      form:{
        doctor_name: '',
        doctor_phone: '',
        diagnosis: '',
        doctor_instruction: ''
      },
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
    },

    editDosageFnc(item, e){
      console.log(item);
      console.log(e);

      // item = e
    },

    async save_prescription(){
      const response = this.$axios.post(process.env.Api + "prescription", this.form);
      const data = response.data;
    }
  },
}
</script>
