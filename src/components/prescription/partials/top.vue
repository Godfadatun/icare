<template>
  <div>
    <q-toolbar class="bg-transparent text-secondary">
      <q-toolbar-title>
        Your Prescription
      </q-toolbar-title>
      <!-- <q-btn :to="{name: 'addPrescription'}"  size="sm" no-caps label="Add Prescription" icon="add"  /> -->
      <q-btn size="sm" no-caps label="Appointment Reminder" class="q-mr-xs gt-xs">


      </q-btn>
      <q-btn :to="{name: 'pharmacy'}" size="sm" no-caps label="Nearest Pharmacist" color="blue-7" class="q-mr-xs gt-xs" />
      <q-btn :to="{name: 'hospital'}" size="sm" no-caps color="negative" label="Nearest Clinic" class="gt-xs" />
    </q-toolbar>
    <q-separator />
  </div>
</template>

<script>
import AddPrescription from './addPresc'
import Notification from '../../common/Notification'
export default {
  // name: 'ComponentName',
  components:{
    AddPrescription, Notification
  },
  data () {
    return {}
  }
}
</script>
