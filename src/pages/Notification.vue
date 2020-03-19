<template>
  <q-page>
    <!-- content -->
    <Top />

    <div class="column flex-center">
      <Notification />
    </div>

  </q-page>
</template>

<script>
import Notification from '../components/common/Notification'
import Top from '../components/common/top'
export default {
  // name: 'PageName',
  components:{
    Notification, Top
  },
}
</script>
