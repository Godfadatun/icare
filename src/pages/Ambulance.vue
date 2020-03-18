<template>
  <q-page padding class="flex flex-center">
    <!-- content -->
    <Pharmacy v-if="route == 'pharmacy'" />
    <Hospital v-if="route == 'hospital'" />
  </q-page>
</template>

<script>
import Pharmacy from '../components/common/Pharmacy'
import Hospital from '../components/common/clinic'
export default {
  // name: 'PageName',
  components:{
    Pharmacy, Hospital
  },
  computed: {
    route(){return this.$route.name}
  },
}
</script>
