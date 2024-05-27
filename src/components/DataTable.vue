<template>
    <div class="overflow-x-auto">
      <table class="min-w-full bg-white">
        <thead>
          <tr>
            <th class="py-2 px-4 border-b">Header 1</th>
            <th class="py-2 px-4 border-b">Header 2</th>
            <th class="py-2 px-4 border-b">Header 3</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in rows" :key="index">
            <td class="py-2 px-4 border-b">{{ row.col1 }}</td>
            <td class="py-2 px-4 border-b">{{ row.col2 }}</td>
            <td class="py-2 px-4 border-b">{{ row.col3 }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      rows: {
        type: Array,
        required: true
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
  