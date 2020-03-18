<template>
  <div >
    <q-card >
      <q-card-section class="text-primary text-h4" style="min-width: 300px">
        <div>Login</div>
      </q-card-section>
      <q-card-section class="q-gutter-xs">
        <q-input outlined v-model="form.email" label="email" />
        <q-input outlined v-model="form.password" label="password" />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="primary" no-caps :to="{name: 'prescription'}" label="Login" class="full-width"/>
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn color="primary" no-caps :to="{name: 'register'}" flat label="Sign Up" />
        <q-btn color="primary" no-caps :to="{name: 'forgot'}" flat label="Forgot Password ?" />
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      form: {
        email : '',
        password : '',
      }
    }
  },
  
}
</script>
