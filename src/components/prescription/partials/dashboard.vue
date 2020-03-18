<template>
  <div>
    <q-card flat bordered class="my-card">
      <q-card-section>
       <div class="row"
          style="height: 450px"
        >

          <div class="col-xs-12 col-sm-5 col-md-5 flex flex-center">
            <div class="q-pa-md">
              <q-date
                v-model="date"
                :events="events"
                event-color="orange"
              />
            </div>
          </div>

          <div class="col-xs-12 col-sm-7 col-md-7">
            <q-tab-panels
              v-model="date"
              v-for="(item, index) in events" :key="index"
            >
              <q-tab-panel :name="item">
                <div class="text-h4 q-mb-md">{{item}}</div>
                <q-table
                  style="height: 300px"
                  class="my-sticky-header-table"
                  title="Todays Prescription"
                  :data="data"
                  :columns="columns"
                  row-key="name"
                >

                  <template v-slot:body="props">
                    <q-tr :props="props">
                       <q-td key="name" :props="props">
                        {{ props.row.name }}
                      </q-td>
                      <q-td key="type" :props="props">
                        {{ props.row.type }}
                      </q-td>
                      <q-td key="morning" :props="props">
                        {{ props.row.morning }}
                      </q-td>
                      <q-td key="afternoon" :props="props">
                        {{ props.row.afternoon }}
                      </q-td>
                      <q-td key="night" :props="props">
                        {{ props.row.night }}
                      </q-td>
                      <q-td key="hourly" :props="props">
                        <div class="row" v-if="props.row.hourly">
                          <div class="q-mr-sm">{{ props.row.hourly.dosage + ' ' + props.row.type }} </div>
                          <div> Every {{ props.row.hourly.hours }} hour</div>
                        </div>
                      </q-td>
                      <q-td auto-width>
                        <div class="column flex-center">
                          <q-btn size="sm" no-caps color="primary" label="Done" />
                          <q-btn size="sm" no-caps round flat color="negative" icon="ion-trash" />
                        </div>
                      </q-td>


                    </q-tr>
                  </template>

                </q-table>
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
      ],

      columns: [
        {
          name: 'name',
          required: true,
          label: 'Drug Name',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'type', align: 'left', label: 'Medication Type', field: 'type', sortable: true },
        { name: 'morning', label: 'Morning', field: 'morning', sortable: true },
        { name: 'afternoon', label: 'Afternoon', field: 'afternoon', sortable: true },
        { name: 'night', label: 'Night', field: 'night', sortable: true },
        { name: 'hourly', label: 'Hourly Interval', field: 'hourly', sortable: true },
      ],

      data: [

        {
          name: 'Paracetamol',
          type: 'tablet',
          morning: '2',
          afternoon: '',
          night: '',
          hourly: '',

        },
        {
          name: 'Tetra-Cycline',
          type: 'Injection',
          morning: '2',
          afternoon: '2',
          night: '2',
          hourly: '',
        },
        {
          name: 'Penicyline',
          type: 'Syrup',
          morning: '2',
          afternoon: '',
          night: '3',
          hourly: '',
        },
        {
          name: 'paracydine',
          type: 'Injection',
          morning: '',
          afternoon: '',
          night: '',
          hourly: {dosage: '6', hours: '2'},
        },
      ]
    }
  }
}
</script>
