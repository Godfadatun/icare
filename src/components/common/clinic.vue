<template>
  <div>
    <q-table
      style="height: 400px"
      title="Nearest Medical Facility to you"
      :data="data"
      :columns="columns"
      row-key="name"
    >

      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td
            v-for="col in props.cols"
            :key="col.name"
            :props="props"
          >
            {{ col.value }}
          </q-td>
          <q-td auto-width>
            <q-btn size="sm" dense round color="green" flat icon="phone" />
          </q-td>


        </q-tr>
      </template>

    </q-table>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Medical Facility',
          align: 'left',
          field: row => row.name,
          format: val => `${val}`,
          sortable: true
        },
        { name: 'address', align: 'left', label: 'Address', field: 'address', sortable: true },
        { name: 'phone', label: 'Phone Number', field: 'phone', sortable: true },
      ],

      data: [

        {
          name: 'FMC Surulere',
          address: '1st Location, your city',
          phone: '08011223345'
        },
        {
          name: 'FMC Surulere',
          address: '1st Location, your city',
          phone: '08011223345'
        },
        {
          name: 'FMC Surulere',
          address: '1st Location, your city',
          phone: '08011223345'
        },
        {
          name: 'FMC Surulere',
          address: '1st Location, your city',
          phone: '08011223345'
        },
      ]
    }
  }
}
</script>
