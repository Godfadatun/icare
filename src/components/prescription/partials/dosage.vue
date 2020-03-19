<template>
  <div>
    <q-card>
      <q-card-section class="q-gutter-xs">
        <div>Duration</div>
        <q-input v-model.number="form.duration" type="number"/>
        <q-input v-model="form.name" label="Drug Name" />
        <q-select v-model="form.type" :options="options" label="Medication Type" />
      </q-card-section>
      <q-card-section>
        <q-toggle v-model="value" label="Is your medication Timed? " left-label />
        <div class="row" v-if="value == false">
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs">
            <div class="text-primary">Morning</div>
            <q-input v-model.number="form.morning" type="number"/>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs">
            <div class="text-primary">Afternoon</div>
            <q-input v-model.number="form.afternoon" type="number"/>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs">
            <div class="text-primary">Night</div>
            <q-input v-model.number="form.night" type="number"/>
          </div>
        </div>

        <div v-if="value == true">
          <q-item>
            <q-item-section>
              <q-item-label class="text-primary">Hourly Interval</q-item-label>
              <q-input v-model.number="form.hourly.hours" type="number"/>
            </q-item-section>
            <q-item-section >
              <q-item-label class="text-primary">Dosage</q-item-label>
              <q-input v-model.number="form.hourly.dosage" type="number"/>
            </q-item-section>
          </q-item>
        </div>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn no-caps size="sm" label="Add" color="primary" @click="usageFnc" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      value: false,
      options: [
        'Tablets', 'Injection', 'Syrup'
      ],
      form:{
        name: '',
        duration: '',
        type: 'Tablets',
        morning: '',
        afternoon: '',
        night: '',
        hourly:{dosage: '', hours: ''},
      }
    }
  },

  methods: {
    usageFnc(){
      this.$emit('dosage', this.form)
      this.form = []
      this.alert = false
    }
  },
}
</script>
