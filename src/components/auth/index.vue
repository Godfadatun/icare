<template>
  <div>
    <Login v-if="route == 'login'"/>
    <Register v-if="route == 'register'"/>
    <Forgot v-if="route == 'forgot'"/>
  </div>
</template>

<script>
import Login from './partials/login'
import Register from './partials/register'
import Forgot from './partials/forgot'
export default {
  // name: 'PageName',
  components:{
    Login, Register, Forgot,
  },
  data () {
    return {}
  },
  computed: {
    route(){return this.$route.name}
  }
}
</script>
