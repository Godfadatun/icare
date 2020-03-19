<template>
  <div class="row flex-center">
    <div class="text-h4 text-bold text-center">How it Works</div>

    <div v-for="(item, index) in props" :key="index" class="col-xs-12 col-sm-6 col-md-4">
      <q-card class="column flex-center q-ma-xs text-center" style="height: 250px">
        <q-card-section>
          <q-icon :name="item.icon" color="negative" size="80px" />
        </q-card-section>
        <q-card-section class="column justify-start text-h5 text-bold">
          <div>{{item.title}}</div>
        </q-card-section>
        <q-separator v-if="item.more" color="negative" />
        <q-card-section v-if="item.more" class="text-caption">
          <div v-for="(val, index) in item.more" :key="index">{{val}}</div>
        </q-card-section>
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
