<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">Characters</h5>

    <q-expansion-item v-for="character in $store.state.characters" :key="character.id">
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
            hide-bottom
            :pagination="attributePagination"
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
      attributeColumns: [
        { name: 'attribute', align: 'center', label: 'Attribute', field: attribute => attribute.name },
        { name: 'attributeCode', align: 'right', label: '', field: attribute => attribute.code },
        { name: 'attributeValue', align: 'left', label: 'Value', field:  attribute => attribute.value }
      ],
      attributePagination: {
        rowsPerPage: 0
      }
    }
  }
}
</script>
