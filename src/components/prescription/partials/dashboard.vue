<template>
  <div>
    <q-card flat bordered class="my-card">
      <q-card-section>
       <div class="row"
          style="height: 450px"
        >

          <div class="col-xs-12 col-sm-6 col-md-6">
            <div class="q-pa-md">
              <q-date
                v-model="date"
                :events="events"
                event-color="orange"
              />
            </div>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-6">
            <q-tab-panels
              v-model="date"
              v-for="(item, index) in events" :key="index"
            >
              <q-tab-panel :name="item">
                <div class="text-h4 q-mb-md">{{item}}</div>
                <q-list bordered separator>
                  <q-item v-for="(item, index) in drugs" :key="index" class="bg-grey-2">
                    <q-item-section v-for="(val, index) in item" :key="index" class="text-center">
                      <q-item-label v-if="val.title" class="text-bold">{{val.title}}</q-item-label>
                      <q-item-label v-if="val.name" lines="2" class="text-bold text-left text-primary">{{val.name}}</q-item-label>
                      <q-item-label v-if="val.value" lines="2" class="text-primary">{{val.value}}</q-item-label>
                    </q-item-section>
                    <q-item-section side>
                      <q-btn size="sm" no-caps color="primary" label="Done" />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-tab-panel>
            </q-tab-panels>
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
      splitterModel: 50,
      date: '2020/02/01',
      events: [ '2020/02/01', '2020/02/05', '2020/02/06' ],

      drugs:[

        [
          {name: 'Parasetamol'},
          {value: 'Tablet'},
          {
            title: 'Morning',
            value: '2'
          },
          {
            title: 'Afternoon',
            value: '2'
          },
          {
            title: 'Night',
            value: '4'
          },
        ],
        [
          {name: 'Tetracycline'},
          {value: 'Injection'},
          {
            title: 'Every 6hrs',
            value: '2'
          },

        ],
      ]
    }
  }
}
</script>
