<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="text-h4">
        <div class="text-primary">Password Recovery</div>
        <p class="text-caption">Put in your email and get your password sent to your mail</p>
      </q-card-section>
      <q-card-section>
        <q-input outlined v-model="form.email" label="email" />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn color="primary" no-caps label="Send" class="full-width" @click="alert = true" />
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn color="primary" no-caps :to="{name: 'register'}" flat label="Sign Up" />
        <q-btn color="primary" no-caps :to="{name: 'forgot'}" flat label="Forgot Password ?" />
      </q-card-actions>
    </q-card>

    <q-dialog v-model="alert">
      <q-card>
        <q-card-section>
          your passsword has been sent to {{form.email}}
        </q-card-section>
        <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      alert: false,
      form: {
        email : '',
      }
    }
  },
}
</script>
