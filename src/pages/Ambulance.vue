<template>
  <q-page>
    <!-- content -->
    <Top />

    <div class="column flex-center">
      <Pharmacy v-if="route == 'pharmacy'" />
      <Hospital v-if="route == 'hospital'" />
    </div>

  </q-page>
</template>

<script>
import Pharmacy from '../components/common/Pharmacy'
import Hospital from '../components/common/clinic'
import Top from '../components/common/top'
export default {
  // name: 'PageName',
  components:{
    Pharmacy, Hospital, Top
  },
  computed: {
    route(){return this.$route.name}
  },
}
</script>
