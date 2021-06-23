<template>
  <v-row>
    <v-col>
      <!-- 検索用のテキスト入力 -->
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
      <!-- データテーブル -->
      <v-data-table
        dense
        :items-per-page="pageNum"
        :headers="headers"
        :items="items"
        :search="search"
        class="v-data-table"
      >
      </v-data-table>
    </v-col>
  </v-row>
</template>

<script>
  export default {
    name: "DataTable",
    data () {
      return {
        search: '',
        pageNum: 25
      }
    },
    props: {
      headers: {
        type: Array,
        default() {
          return []
        }
      },
      items: {
        type: Array,
        default() {
          return []
        }
      },
      arrayCol: {
        type: String,
        default: 'stars'
      },
    },
  }
</script>

<style scoped>
  .v-data-table {
    font-size: 12px;
    white-space: nowrap;
  }
</style>
