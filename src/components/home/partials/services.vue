<template>
  <div class="row flex-center">
    <div class="text-h4 text-bold text-center">Services</div>

    <div v-for="(item, index) in props" :key="index" class="col-xs-12 col-sm-6 col-md-4">
      <q-card class="q-ma-xs text-center">
        <q-img :src="item.img" basic height="250px">
          <div class="absolute-full text-h4 flex flex-center">{{item.name}}</div>
        </q-img>
      </q-card>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: ["props"],
  data() {
    return {};
  }
};
</script>
