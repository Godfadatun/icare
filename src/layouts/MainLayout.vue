<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          class="lt-sm"
        />

        <q-toolbar-title class="link" @click="$router.push({ name: 'home' })">
          iCare
        </q-toolbar-title>

        <div
          class="row"
          v-if="
            route == 'prescription' ||
              route == 'ambulance' ||
              route == 'notification' ||
              route == 'settings'
          "
        >
          <q-btn flat color="white" round icon="notifications">
            <q-popup-proxy>
              <Notification/>
            </q-popup-proxy>
          </q-btn>
          <q-btn :to="{name: 'setting'}" flat color="white" round icon="settings" />
        </div>
        <!-- <q-btn no-caps color="secondary" text-color="white" :to="{name: 'login'}" label="Login" /> -->
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" bordered content-class="bg-grey-1">
      <q-list>
        <EssentialLink />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink";
import Notification from "../components/common/Notification";
export default {
  name: "MainLayout",

  components: {
    EssentialLink, Notification
  },

  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: "Docs",
          caption: "quasar.dev",
          icon: "school",
          link: "https://quasar.dev"
        },
        {
          title: "Github",
          caption: "github.com/quasarframework",
          icon: "code",
          link: "https://github.com/quasarframework"
        },
        {
          title: "Discord Chat Channel",
          caption: "chat.quasar.dev",
          icon: "chat",
          link: "https://chat.quasar.dev"
        },
        {
          title: "Forum",
          caption: "forum.quasar.dev",
          icon: "record_voice_over",
          link: "https://forum.quasar.dev"
        },
        {
          title: "Twitter",
          caption: "@quasarframework",
          icon: "rss_feed",
          link: "https://twitter.quasar.dev"
        },
        {
          title: "Facebook",
          caption: "@QuasarFramework",
          icon: "public",
          link: "https://facebook.quasar.dev"
        }
      ]
    };
  },

  computed: {
    route() {
      return this.$route.name;
    }
  }
};
</script>
