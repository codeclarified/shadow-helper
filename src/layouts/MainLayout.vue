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
          @click="toggleLeftDrawer"
        />
        <q-toolbar-title>Shadow Helper</q-toolbar-title>
        <q-btn
          flat
          round
          icon="fab fa-github"
          aria-label="Github Repository"
          type="a"
          href="https://github.com/codeclarified/shadow-helper"
          target="_blank"
        />
      </q-toolbar>

    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      :breakpoint="500"
    >
      <q-scroll-area class="fit">
        <q-list padding class="menu-list">
          <q-item
            to="/"
            exact
            clickable
            v-ripple>
            <q-item-section avatar>
              <q-icon name="house" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item
            to="/characters"
            exact
            clickable
            v-ripple>
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              Characters
            </q-item-section>
          </q-item>

        </q-list>
      </q-scroll-area>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">

</style>
