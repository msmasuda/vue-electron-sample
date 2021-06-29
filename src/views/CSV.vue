<template>
  <div>
    <h1>CSVインポート</h1>
    <v-file-input
      accept="text/*"
      label="File input"
      @change="fileChange"
    ></v-file-input>
    <div id="spreadsheet" ref="spreadsheet"></div>
  </div>
</template>

<script>
  import 'jspreadsheet-ce/dist/jexcel.css';
  import jexcel from 'jspreadsheet-ce'
export default {
  // components: {
  //   SpreadSheet
  // },
  // data: function() {
  //   return {
  //     columns: [],
  //     data: []
  //   };
  // },
  methods: {
    fileChange: function(file) {
      // const file = e.target.files[0];
      const reader = new FileReader();
      const workers = [];
      let headers = [];
      // file = 

      const loadFunc = () => {
        const lines = reader.result.split('\n');
        let i = 0;
        lines.forEach(element => {
          const workerData = element.split('\t');
          if (i === 0) {
            headers = workerData.map((work) => {
              return {
                title: work
              }
            })
          } else if (i > 2) {
            workers.push(workerData);
          }
          i++;
        });
        const options = {
            data: workers,
            columns: headers,
            search: true,
            pagination: 40,
        }
        const jExcelObj = jexcel(this.$refs["spreadsheet"], options);
        Object.assign(this, { jExcelObj });
      };

      reader.onload = loadFunc;

      reader.readAsText(file, "Shift_JIS");
    },

    tsvToJson: function(tsvStr, userOptions) {
      if (typeof csvStr !== 'string') return null;
      const options = { header : 2, columnName : [], ignoreBlankLine : true };
      if (userOptions) {
          if (userOptions.header) options.header = userOptions.header;
          if (userOptions.columnName) options.columnName = userOptions.columnName;
      }
      const rows = tsvStr.split('\t');
      const json = [];
      let line = []
      let row = '';
      let data = {};
      let i, len, j, len2;
      for (i = 0, len = rows.length; i < len; i++) {
          if ((i + 1) <= options.header) continue;
          if (options.ignoreBlankLine && rows[i] === '') continue;
          line = rows[i].split(',');
          if (options.columnName.length > 0) {
              data = {};
              for (j = 0, len2 = options.columnName.length; j < len2; j++) {
                  if (typeof line[j] !== 'undefined') {
                      row = line[j];
                      row = row.replace(/^"(.+)?"$/, '$1');
                  } else {
                      row = null;
                  }
                  data[options.columnName[j]] = row;
              }
              json.push(data);
          } else {
              json.push(line);
          }
      }
      return json;
    }
  }
};
</script>