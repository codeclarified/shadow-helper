<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Characters</h5>

    <q-item v-for="character in characters" :key="character.id">
      <q-item-section top avatar>
        <q-avatar rounded>
          <img src="https://cdn.quasar.dev/img/boy-avatar.png">
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ character.name }}</q-item-label>
        <q-item-label>Owner: {{ character.owner}} </q-item-label>
        <q-item-label>Race: {{ character.race }} </q-item-label>
      </q-item-section>

      <q-item-section side top v-if="character.status.length">
        <q-item-label v-for="(status, index) in character.status" :key="index">{{ status }}</q-item-label>
      </q-item-section>
    </q-item>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        {
          id: 1,
          name: 'Lenny',
          race: 'Troll',
          owner: 'Jason',
          status: [
            'Fatigued'
          ]
        },{
          id: 2,
          name: 'Burt',
          race: 'Elf',
          owner: 'Joe',
          status: [
            'Burned',
            'Immobile'
          ]
        },{
          id: 3,
          name: 'Sandy',
          race: 'Human',
          owner: 'Tim',
          status: []
        },{
          id: 4,
          name: 'Thug1',
          race: 'Orc',
          owner: 'NPC',
          status: []
        },{
          id: 5,
          name: 'Thug2',
          race: 'Human',
          owner: 'NPC',
          status: [
            'Dead'
          ]
        },{
          id: 6,
          name: 'Drone1',
          race: 'Drone',
          owner: 'Sandy',
          status: []
        },
      ]
    }
  }
}
</script>
