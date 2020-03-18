<template>
<div>
  <q-item clickable >
    <q-btn size="sm" no-caps label="Appointment Reminder" class="full-width" />
  </q-item>
  <q-item clickable >
    <q-btn size="sm" no-caps label="Nearest Pharmacist" color="blue-7" class="full-width" />
  </q-item>
  <q-item clickable >
    <q-btn size="sm" no-caps color="negative" label="Nearest Clinic" class="full-width"/>
  </q-item>
</div>


</template>

<script>
export default {
  name: 'EssentialLink',

  props: {
    title: {
      type: String,
      required: true
    },

    caption: {
      type: String,
      default: ''
    },

    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  }
}
</script>
