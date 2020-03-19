<template>
  <div>
    <q-card class="my-card">
      <q-card-section class="text-primary text-h4">
        <div>Sign Up</div>
      </q-card-section>
      <q-card-section class="q-gutter-y-xs">
        <div class="row q-gutter-xs">
          <q-input outlined v-model="form.name" label="Name" />
          <q-input outlined v-model="form.phone" label="Phone" />
        </div>
        <q-input outlined v-model="form.email" label="email" />
        <div class="row q-gutter-xs">
          <q-input
            type="password"
            outlined
            v-model="form.password"
            label="password"
          />
          <q-input
            type="password"
            outlined
            v-model="form.password_confirmation"
            label="Confirm Password"
          />
        </div>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          no-caps
          color="primary"
          label="Sign Up"
          class="full-width"
          @click="signup"
        />
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn
          color="primary"
          no-caps
          :to="{ name: 'login' }"
          flat
          label="Login"
        />
        <q-btn
          color="primary"
          no-caps
          :to="{ name: 'forgot' }"
          flat
          label="Forgot Password ?"
        />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      form: {
        name: "",
        phone: "",
        email: "",
        password: "",
        password_confirmation: ""
      }
    };
  },

  methods: {
    async signup() {
      const response = this.$axios.post(process.env.Api + "signup", this.form);
      const data = response.data;
      this.$q.localStorage.set("icare-token", data.access_token);
      this.$router.push({ name: "prescription" });
    }
  }
};
</script>
