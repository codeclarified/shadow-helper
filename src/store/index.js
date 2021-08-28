import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {
      characters: [
        {
          id: 1,
          name: 'Orange Slice',
          race: 'Orc',
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
    },
    mutations: {

    },
    actions: {

    },
    modules: {
      // example
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  return Store
})
