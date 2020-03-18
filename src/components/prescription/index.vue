<template>
  <div>
    <Top />
    <Dashboard />
  </div>
</template>

<script>
import Top from './partials/top'
import Dashboard from './partials/dashboard'
export default {
  // name: 'ComponentName',
  components:{
    Top, Dashboard
  },
  data () {
    return {}
  }
}
</script>
