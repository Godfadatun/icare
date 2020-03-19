<template>
  <div class="flex q-gutter-sm">
    <q-card class="my-card">
      <q-card-section class="text-h6 text-primary">
        Your Doctors Details
      </q-card-section>
      <q-card-section class="column q-gutter-sm">
        <q-input dense outlined v-model="form.name" label="Doctors Name" />
        <q-input dense outlined v-model="form.hospital" label="Doctors Hospital" />
        <q-input dense outlined v-model="form.phone" label="Doctors phone" />
        <q-input dense outlined v-model="form.address" label="Doctors Address" />
      </q-card-section>

    </q-card>

    <q-card class="my-card">
      <q-card-section class="text-h6 text-primary">
        Your Daily Medication Timing
      </q-card-section>
      <q-card-section class="column q-gutter-sm">
        <div class="row flex-center">
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="text-bold text-center">Morning</div>
            <q-input v-model="form.morningT" mask="time" :rules="['time']">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="time" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4 q-px-xs">
            <div class="text-bold text-center">Afternoon</div>
            <q-input v-model="form.afternoonT" mask="time" :rules="['time']">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="time" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
          <div class="col-xs-12 col-sm-4 col-md-4">
            <div class="text-bold text-center">Night</div>
            <q-input v-model="form.nightT" mask="time" :rules="['time']">
              <template v-slot:append>
                <q-icon name="access_time" class="cursor-pointer">
                  <q-popup-proxy transition-show="scale" transition-hide="scale">
                    <q-time v-model="time" />
                  </q-popup-proxy>
                </q-icon>
              </template>
            </q-input>
          </div>
        </div>
      </q-card-section>

    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      form: {
        name : '',
        hospital : '',
        phone : '',
        address : '',
        morningT: '',
        afternoonT: '',
        nightT: '',
      }
    }
  }
}
</script>
