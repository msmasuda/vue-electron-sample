<template>
  <v-card class="table">
    <HeaderForm
      :items="keys"
      @handleKeyChange="handleKeyChange"
      @handleTypeChange="handleTypeChange"
    />
    <DataTable
      :items="items"
      :headers="headers"
    />
  </v-card>
</template>

<script>
  import HeaderForm from '@/components/HeaderForm.vue'
  import DataTable from '@/components/DataTable.vue'
  import { getMasterNames } from '@/api/types'
  import { getMasters } from '@/api/master'

  export default {
    name: 'Table',
    components: {
      HeaderForm,
      DataTable
    },
    data () {
      return {
        keys: [],
        items: [],
        // テーブルのヘッダー情報
        headers: [],
        // arrayCol: null,
      }
    },
    methods: {
      async handleTypeChange(type) {
        const data = await getMasterNames(type)
        this.keys = data.keys
      },
      async handleKeyChange(type, key) {
        const data = await getMasters(type, key)
        if (data.header.length <= 0) return
        this.items = data.data
        this.headers = data.header
        // if (data.arrayCols.length > 0) {
        //   this.arrayCol = data.arrayCols[0]
        // }
      },
    },
  }
</script>

<style lang="css" scoped>
  .table {
    width: 100%;
    font-size: 12px;
  }
  td.text-start {
    white-space: nowrap;
  }
</style>
