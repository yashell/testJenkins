<template>

  <div class="about">
    <vxe-grid
            border
            resizable
            show-overflow
            height="300"
            size="medium"
            highlight-hover-row
            :columns="tableColumn"
            :data="tableData"
            @cell-dblclick="handleDbClick"
            @cell-click="handleDbClick"
    ></vxe-grid>
  </div>
</template>

<script>
  // @ is an alias to /src


  export default {
    name: 'About',
    components: {

    },
    data() {
      return {
        tableColumn: [
          { type: 'index', width: 50 },
          { field: 'name', title: '名称', minWidth: '700', },
          { field: 'age', title: '性别',minWidth: '150', showHeaderOverflow: true },
          { field: 'address', title: '地址',minWidth: '150', showOverflow: true }
        ],

        tableData: []
      }
    },

    methods: {
      handleDbClick(cellData,e){
        console.log(cellData)
        console.log(e)
      }
    },
    mounted() {

      this.tableData =[
        {name:"张三",age:22,address:"地址"},
        {name:"张三1",age:22,address:"地址"},
        {name:"张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2张三2",age:22,address:"地址"},
        {name:"张三3",age:22,address:"地址"},
        {name:"张三4",age:22,address:"地址"},
        {name:"张三5",age:22,address:"地址"},
        {name:"张三6",age:22,address:"地址"},
      ]


    }
  }
</script>
