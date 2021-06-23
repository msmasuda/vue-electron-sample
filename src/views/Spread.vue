<template>
  <v-card class="spread">
    <HeaderForm
      :title="type"
      :items="keys"
      @handleClick="handleClick"
    />
    <SpreadSheet
      :data="data"
      :columns="columns"
    />
  </v-card>
</template>

<script>
  import HeaderForm from '@/components/HeaderForm.vue'
  import SpreadSheet from '@/components/SpreadSheet.vue'
  import { getMasterNames } from '@/api/types'
  import { getMasters } from '@/api/master'

  export default {
    name: 'Spread',
    components: {
      HeaderForm,
      SpreadSheet
    },
    data: () => ({
      type: 'MasterParam',
      keys: [],
      // マスター情報
      data: [],
      columns: [
        {type: 'text', title: 'iname', width: '200px', align: 'left'},
        {type: 'text', title: 'name', width: '200px', align: 'left'},
        {type: 'text', title: 'expr', width: '200px', align: 'left'},
        {type: 'numeric', title: 'cap', width: '50px', align: 'right'},
        {type: 'text', title: 'icon', width: '200px', align: 'left'},
        {type: 'text', title: 'grow', width: '200px', align: 'left'},
        {type: 'numeric', title: 'type', width: '50px', align: 'right'},
        {type: 'numeric', title: 'slot', width: '50px', align: 'right'},
        {type: 'text', title: 'skl1', width: '200px', align: 'left'},
        {type: 'numeric', title: 'lv1', width: '50px', align: 'right'},
        {type: 'text', title: 'skl2', width: '200px', align: 'left'},
        {type: 'numeric', title: 'lv2', width: '50px', align: 'right'},
        {type: 'text', title: 'skl3', width: '200px', align: 'left'},
        {type: 'numeric', title: 'lv3', width: '50px', align: 'right'},
        {type: 'text', title: 'skl4', width: '200px', align: 'left'},
        {type: 'numeric', title: 'lv4', width: '50px', align: 'right'},
        {type: 'text', title: 'skl5', width: '200px', align: 'left'},
        {type: 'numeric', title: 'lv5', width: '50px', align: 'right'},
        {type: 'text', title: 'skl6', width: '200px', align: 'left'},
        {type: 'numeric', title: 'lv6', width: '50px', align: 'right'},
        {type: 'type_detail', title: 'type_detail', width: '80px', align: 'right'},
      ]
    }),
    methods: {
      async getNames() {
        const data = await getMasterNames(this.type)
        this.keys = data.keys
      },
      async handleClick(key) {
        const data = await getMasters(this.type, key)
        this.data = data.data
      },
    },
    created() {
      this.getNames()
    }
  }
</script>
