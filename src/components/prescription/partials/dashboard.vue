<template>
  <div>
    <q-table
      square=""
      title="Treats"
      :data="prescriptions"
      :columns="columns"
      row-key="name"
      :filter="filter"
    >
      <template v-slot:top>

        <q-btn
          color="primary"
          :to="{ name: 'addPrescription' }"
          no-caps
          label="Add Prescription"
          icon="add"
        />

        <q-space />

        <q-input
          dense
          outlined=""
          debounce="300"
          color="primary"
          v-model="filter"
        >
          <template v-slot:append>
            <q-icon color="primary" name="search" />
          </template>
        </q-input>

      </template>
    </q-table>

    <!-- <div class="col-xs-12 col-sm-5 col-md-5 flex flex-center">
            <div class="q-pa-md">
              <q-date v-model="date" :events="events" event-color="orange" />
            </div>
          </div> -->
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data() {
    return {
      splitterModel: 50,
      date: "2020/02/01",
      events: ["2020/02/01", "2020/02/05", "2020/02/06"],
      prescriptions: [],
      filter: "",
      drugs: [
        [
          { name: "Parasetamol" },
          { value: "Tablet" },
          {
            title: "Morning",
            value: "2"
          },
          {
            title: "Afternoon",
            value: "2"
          },
          {
            title: "Night",
            value: "4"
          }
        ],
        [
          { name: "Tetracycline" },
          { value: "Injection" },
          {
            title: "Every 6hrs",
            value: "2"
          }
        ]
      ],

      columns: [
        {
          name: "doctor_name",
          required: true,
          label: "Doctor Name",
          align: "left",
          field: "doctor_name",
          sortable: true
        },
        {
          name: "diagnosis",
          align: "left",
          label: "Diagnosis",
          field: "diagnosis",
          sortable: true
        },
        {
          name: "doctor_instruction",
          label: "Doctor Instruction",
          field: "doctor_instruction",
          sortable: true
        },
        {
          name: "action",
          label: "Action",
          field: ""
        }
      ]
    };
  },

  mounted() {
    this.getPrescriptions();
  },

  methods: {
    async getPrescriptions() {
      const response = await this.$axios.get(process.env.Api + "prescription");
      const data = response.data;
      this.prescriptions = data.data;
    }
  }
};
</script>
