<template>
  <q-page>
    <!-- content -->
    <Top />
    <div class="flex flex-center">
       <Settings class="q-mt-md"/>
    </div>
  </q-page>
</template>

<script>
import Top from '../components/common/top'
import Settings from '../components/common/settings'
export default {
  // name: 'PageName',
  components:{
    Settings, Top
  }
}
</script>



