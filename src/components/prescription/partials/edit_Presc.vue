<template>
  <div>
    <q-btn round flat color="green" icon="edit" @click="alert = true"/>
    <q-dialog v-model="alert">
      <Dosage @dosage="$emit('dosage', $event)"/>
    </q-dialog>
  </div>
</template>

<script>
import Dosage from './dosage'
export default {
  // name: 'ComponentName',
  components:{
    Dosage
  },
  data () {
    return {
      alert: false,
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
