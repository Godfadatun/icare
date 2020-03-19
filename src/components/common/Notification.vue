<template>
  <div>
    <q-card class="my-card" style="max-width: 800px">
      <q-card-section class="text-primary text-h6">
        Notification
      </q-card-section>
      <q-card-section>
        <q-list separator>
          <q-item v-for="(item, index) in data" :key="index">
            <q-item-section>
              <q-item-label>{{item.Drug}}</q-item-label>
              <q-item-label caption lines="2">{{item.time}}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-toggle v-model="item.value" left-label="Not Taken" label="taken" />
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <q-card-actions align="center">
        <q-btn :to="{name: 'notification'}" outline no-caps size="sm" color="primary" label="Read All" />
      </q-card-actions>
    </q-card>

  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {

      data:[
        {
          Drug: 'Tetracycline 200mg Tablet',
          time: 'Afternoon Dosage',
          value: false,
        },
        {
          Drug: 'Penycycline Injection',
          time: 'Morning Dosage',
          value: false,
        },
        {
          Drug: 'Postinol Tablet',
          time: '6hr Dosage',
          value: false,
        },
      ]

    }
  }
}
</script>
