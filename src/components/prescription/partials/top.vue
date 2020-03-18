<template>
  <div>
    <q-toolbar class="bg-transparent text-secondary">
      <q-toolbar-title>
        Your Prescription
      </q-toolbar-title>
      <AddPrescription />
      <q-btn size="sm" no-caps label="Appointment Reminder" class="q-mr-xs gt-xs" />
      <q-btn size="sm" no-caps label="Nearest Pharmacist" color="blue-7" class="q-mr-xs gt-xs" />
      <q-btn size="sm" no-caps color="negative" label="Nearest Clinic" class="gt-xs" />
    </q-toolbar>
  </div>
</template>

<script>
import AddPrescription from './addPresc'
export default {
  // name: 'ComponentName',
  components:{
    AddPrescription
  },
  data () {
    return {}
  }
}
</script>
