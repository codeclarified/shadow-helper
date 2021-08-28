<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Characters</h5>

    <q-expansion-item v-for="character in characters" :key="character.id">
      <template v-slot:header>
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
      </template>

      <q-card>
        <q-card-section>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit eos corrupti
          commodi magni quaerat ex numquam, dolorum officiis modi facere maiores architecto suscipit iste
          eveniet doloribus ullam aliquid.
        </q-card-section>
        <q-card-section>
          <q-table
            title="Attributes"
            :rows="character.attributes"
            :columns="attributeColumns"
            row-key="name"
            style="max-width: 500px"
            pagination="false"
          />
        </q-card-section>
      </q-card>
    </q-expansion-item>
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
          ],
          attributes: [
            {
              name: 'Body',
              value: 5,
              code: 'BOD'
            },
            {
              name: 'Agility',
              value: 4,
              code: 'AGI'
            },
            {
              name: 'Reaction',
              value: 5,
              code: 'REA'
            },
            {
              name: 'Strength',
              value: 2,
              code: 'STR'
            },
            {
              name: 'Charisma',
              value: 5,
              code: 'CHA'
            },
            {
              name: 'Intuition',
              value: 1,
              code: 'INT'
            },
            {
              name: 'Logic',
              value: 2,
              code: 'LOG'
            },
            {
              name: 'Willpower',
              value: 4,
              code: 'WIL',
            },
            {
              name: 'Edge',
              value: 5,
              code: 'EDG'
            },
            {
              name: 'Magic',
              value: 0,
              code: 'MAG'
            },
            {
              name: 'Resonance',
              value: 0,
              code: 'RES',
            }
          ]
        },{
          id: 2,
          name: 'Burt',
          race: 'Elf',
          owner: 'Joe',
          status: [
            'Burned',
            'Immobile'
          ],
          attributes: [
            {
              name: 'Body',
              value: 5,
              code: 'BOD'
            },
            {
              name: 'Agility',
              value: 4,
              code: 'AGI'
            },
            {
              name: 'Reaction',
              value: 5,
              code: 'REA'
            },
            {
              name: 'Strength',
              value: 2,
              code: 'STR'
            },
            {
              name: 'Charisma',
              value: 5,
              code: 'CHA'
            },
            {
              name: 'Intuition',
              value: 1,
              code: 'INT'
            },
            {
              name: 'Logic',
              value: 2,
              code: 'LOG'
            },
            {
              name: 'Willpower',
              value: 4,
              code: 'WIL',
            },
            {
              name: 'Edge',
              value: 5,
              code: 'EDG'
            },
            {
              name: 'Magic',
              value: 0,
              code: 'MAG'
            },
            {
              name: 'Resonance',
              value: 0,
              code: 'RES',
            }
          ]
        },{
          id: 3,
          name: 'Sandy',
          race: 'Human',
          owner: 'Tim',
          status: [],
          attributes: [
            {
              name: 'Body',
              value: 5,
              code: 'BOD'
            },
            {
              name: 'Agility',
              value: 4,
              code: 'AGI'
            },
            {
              name: 'Reaction',
              value: 5,
              code: 'REA'
            },
            {
              name: 'Strength',
              value: 2,
              code: 'STR'
            },
            {
              name: 'Charisma',
              value: 5,
              code: 'CHA'
            },
            {
              name: 'Intuition',
              value: 1,
              code: 'INT'
            },
            {
              name: 'Logic',
              value: 2,
              code: 'LOG'
            },
            {
              name: 'Willpower',
              value: 4,
              code: 'WIL',
            },
            {
              name: 'Edge',
              value: 5,
              code: 'EDG'
            },
            {
              name: 'Magic',
              value: 0,
              code: 'MAG'
            },
            {
              name: 'Resonance',
              value: 0,
              code: 'RES',
            }
          ]
        },{
          id: 4,
          name: 'Thug1',
          race: 'Orc',
          owner: 'NPC',
          status: [],
          attributes: [
            {
              name: 'Body',
              value: 5,
              code: 'BOD'
            },
            {
              name: 'Agility',
              value: 4,
              code: 'AGI'
            },
            {
              name: 'Reaction',
              value: 5,
              code: 'REA'
            },
            {
              name: 'Strength',
              value: 2,
              code: 'STR'
            },
            {
              name: 'Charisma',
              value: 5,
              code: 'CHA'
            },
            {
              name: 'Intuition',
              value: 1,
              code: 'INT'
            },
            {
              name: 'Logic',
              value: 2,
              code: 'LOG'
            },
            {
              name: 'Willpower',
              value: 4,
              code: 'WIL',
            },
            {
              name: 'Edge',
              value: 5,
              code: 'EDG'
            },
            {
              name: 'Magic',
              value: 0,
              code: 'MAG'
            },
            {
              name: 'Resonance',
              value: 0,
              code: 'RES',
            }
          ]
        },{
          id: 5,
          name: 'Thug2',
          race: 'Human',
          owner: 'NPC',
          status: [
            'Dead'
          ],
          attributes: [
            {
              name: 'Body',
              value: 5,
              code: 'BOD'
            },
            {
              name: 'Agility',
              value: 4,
              code: 'AGI'
            },
            {
              name: 'Reaction',
              value: 5,
              code: 'REA'
            },
            {
              name: 'Strength',
              value: 2,
              code: 'STR'
            },
            {
              name: 'Charisma',
              value: 5,
              code: 'CHA'
            },
            {
              name: 'Intuition',
              value: 1,
              code: 'INT'
            },
            {
              name: 'Logic',
              value: 2,
              code: 'LOG'
            },
            {
              name: 'Willpower',
              value: 4,
              code: 'WIL',
            },
            {
              name: 'Edge',
              value: 5,
              code: 'EDG'
            },
            {
              name: 'Magic',
              value: 0,
              code: 'MAG'
            },
            {
              name: 'Resonance',
              value: 0,
              code: 'RES',
            }
          ]
        },{
          id: 6,
          name: 'Drone1',
          race: 'Drone',
          owner: 'Sandy',
          status: [],
          attributes: [
            {
              name: 'Body',
              value: 5,
              code: 'BOD'
            },
            {
              name: 'Agility',
              value: 4,
              code: 'AGI'
            },
            {
              name: 'Reaction',
              value: 5,
              code: 'REA'
            },
            {
              name: 'Strength',
              value: 2,
              code: 'STR'
            },
            {
              name: 'Charisma',
              value: 5,
              code: 'CHA'
            },
            {
              name: 'Intuition',
              value: 1,
              code: 'INT'
            },
            {
              name: 'Logic',
              value: 2,
              code: 'LOG'
            },
            {
              name: 'Willpower',
              value: 4,
              code: 'WIL',
            },
            {
              name: 'Edge',
              value: 5,
              code: 'EDG'
            },
            {
              name: 'Magic',
              value: 0,
              code: 'MAG'
            },
            {
              name: 'Resonance',
              value: 0,
              code: 'RES',
            }
          ]
        },
      ],
      attributeColumns: [
        { name: 'attribute', align: 'center', label: 'Attribute', field: attribute => attribute.name },
        { name: 'attributeCode', align: 'right', label: '', field: attribute => attribute.code },
        { name: 'attributeValue', align: 'left', label: 'Value', field:  attribute => attribute.value }
      ]
    }
  }
}
</script>
