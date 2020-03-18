<template>
  <div>
    <q-btn size="sm" no-caps label="Add Prescription" icon="add" @click="alert = true" />
    <q-dialog v-model="alert">
      <q-card>
        <q-card-section class="q-gutter-xs">
          <div>Duration</div>
          <q-input v-model.number="form.duration" type="number"/>
          <q-input v-model="form.drugName" label="Drug Name" />
          <q-select v-model="form.medType" :options="options" label="Medication Type" />
        </q-card-section>
        <q-card-section>
          <q-toggle v-model="value" label="Is your medication Timed? " left-label />
          <div class="row" v-if="value == false">
            <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs">
              <div class="text-primary">Morning</div>
              <q-input v-model.number="form.mrngDrug" type="number"/>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs">
              <div class="text-primary">Afternoon</div>
              <q-input v-model.number="form.aftDrug" type="number"/>
            </div>
            <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs">
              <div class="text-primary">Night</div>
              <q-input v-model.number="form.niteDrug" type="number"/>
            </div>
          </div>

          <div v-if="value == true">
            <q-item>
              <q-item-section>
                <q-item-label class="text-primary">Hourly Interval</q-item-label>
                <q-input v-model.number="form.hrInterval" type="number"/>
              </q-item-section>
              <q-item-section >
                <q-item-label class="text-primary">Dosage</q-item-label>
                <q-input v-model.number="form.hrDosage" type="number"/>
              </q-item-section>
            </q-item>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn no-caps size="sm" label="Add" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      alert: false,
      value: false,
      options: [
        'Tablets', 'Injection', 'Syrup'
      ],
      form:{
        drugName: '',
        duration: '1',
        medType: 'Tablets',
        mrngDrug: '1',
        aftDrug: '1',
        niteDrug: '1',
        hrInterval: '',
        hrDosage: '1',
      }
    }
  }
}
</script>
