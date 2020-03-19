<template>
  <div class="q-gutter-y-md">
    <q-carousel v-model="slide">
      <q-carousel-slide name="style" class="" img-src="statics/image/laurynas-mereckas-1TL8AoEDj_c-unsplash.jpg">
        <div class="absolute-full column flex-center" style="background-color: rgba(0, 0, 0, 0.6);">
          <q-icon name="ion-ios-medkit" color="negative" size="100px" />
          <div class="q-mt-md text-center text-white text-h4">
          Prescription & Emergency Manager
          </div>
          <div class="row q-gutter-sm q-my-sm">
             <q-btn color="secondary" no-caps text-color="white" :to="{name: 'login'}" label="Login" />
             <q-btn color="white" outline no-caps text-color="white" :to="{name: 'register'}" label="SignUp" />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>



    <howitWorks :props="content" />



    <services :props="my_services" />

  </div>
</template>

<script>
import howitWorks from './partials/howitworks'
import services from './partials/services'
export default {
  components:{
    howitWorks, services
  },
  // name: 'ComponentName',
  data () {
    return {
      slide: 'style',
      content: [
        {
          icon: 'ion-log-in',
          title: 'Register'
        },
        {
          icon: 'ion-ios-alarm',
          title: 'Add your Reminders',
          more: ['Doctors Appointment', 'Taking medications']
        },
        {
          icon: 'ion-heart',
          title: 'Get back your health'
        },

      ],
      my_services: [
        {
          name: 'Prescription',
          img: 'statics/image/arron-choi-mDV069h4OB4-unsplash.jpg'
        },
        {
          name: 'Ambulance',
          img: 'statics/image/bill-oxford-8u_2imJaVQs-unsplash.jpg'
        },
        {
          name: 'Medical Facilities',
          img: 'statics/image/sharon-mccutcheon-FEPfs43yiPE-unsplash.jpg'
        }
          ]
    }
  }
}
</script>
