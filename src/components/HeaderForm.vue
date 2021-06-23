<template>
  <v-toolbar>
    <v-toolbar-title>{{title}}</v-toolbar-title>
    <v-radio-group v-model="radios" row mandatory @change="handleTypeChange">
      <v-radio label="Master" value="MasterParam"></v-radio>
      <v-radio label="Quest" value="QuestParam"></v-radio>
    </v-radio-group>
    <v-autocomplete
      v-model="select"
      :items="items"
      label="Please Select Master"
      clearable
      @change="handleKeyChange"
    ></v-autocomplete>
  </v-toolbar>
</template>

<script>
  export default {
    data () {
      return {
        radios: null,
        select: null,
        title: null,
      }
    },
    props: {
      items: {
        type: Array,
        default() {
          return []
        }
      },
    },
    methods: {
      handleKeyChange(value) {
        this.select = value
        this.$emit('handleKeyChange', this.title, value)
      },
      handleTypeChange(value) {
        this.title = value
        this.$emit('handleTypeChange', value)
      },
    },
  }
</script>

<style lang="css" scoped>
  .v-input {
      max-width: 250px;
      margin: 0 0 0 auto;
      vertical-align: bottom;
  }
</style>
