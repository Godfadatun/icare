<template>
  <q-page >
    <!-- content -->
    <Top />
    <div class="column flex-center">
       <AddPrescription />
    </div>
  </q-page>
</template>

<script>
import AddPrescription from '../components/prescription/partials/add_prescription'
import Top from '../components/common/top'
export default {
  // name: 'PageName',
  components:{
    AddPrescription, Top
  }
}
</script>
