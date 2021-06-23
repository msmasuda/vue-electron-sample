<template>
  <div class="wrapper-jexcel">
    <div id="spreadsheet" ref="spreadsheet"></div>
  </div>
</template>

<script>
  import 'jspreadsheet-ce/dist/jexcel.css';
  import jexcel from 'jspreadsheet-ce'

  export default {
    name: "SpreadSheet",
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      columns: {
        type: Array,
        default() {
          return []
        }
      }
    },
    computed: {
      jExcelOptions() {
        return {
          data: this.data,
          columns: this.columns,
          search: true,
          pagination: 40,
        };
      }
    },
    mounted: function() {
      const jExcelObj = jexcel(this.$refs["spreadsheet"], this.jExcelOptions);
      Object.assign(this, { jExcelObj });
    }
  }
</script>

<style lang="css" scoped>
  #spreadsheet {
    font-size: 12px;
  }
  .wrapper-jexcel {
    overflow: auto;
  }
  div.jexcel_filter {
    display: flex;
    justify-content: flex-start;
  }
</style>
