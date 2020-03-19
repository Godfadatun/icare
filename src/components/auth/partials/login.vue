<template>
  <div>
    <q-card>
      <q-card-section class="text-primary text-h4" style="min-width: 300px">
        <div>Login</div>
      </q-card-section>
      <q-card-section class="q-gutter-xs">
        <q-input outlined v-model="form.email" label="email" />
        <q-input
          type="password"
          outlined
          v-model="form.password"
          label="password"
        />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn
          color="primary"
          no-caps
          label="Login"
          class="full-width"
          @click="login"
        />
      </q-card-actions>
      <q-card-actions align="center">
        <q-btn
          color="primary"
          no-caps
          :to="{ name: 'register' }"
          flat
          label="Sign Up"
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
        email: "",
        password: ""
      }
    };
  },

  methods: {
    async login() {
      const response = await this.$axios.post(
        process.env.Api + "login",
        this.form
      );
      const data = response.data;
      this.$q.localStorage.set("icare-token", data.access_token);
      this.$router.push({ name: "prescription" });
    }
  }
};
</script>
