<template>

    <div class="home">



                <a-tree-select
                        ref="aad"
                        style="width: 300px"
                        :treeData="treeData"
                        :value="['0-1']"
                        @change="onChange"
                        treeCheckable
                        :dropdownStyle="{ display:show}"
                        searchPlaceholder="Please select"
                        @click="aa"

                >

                </a-tree-select>

<!--        <a-tree-select-->
<!--                showSearch-->
<!--                style="width: 300px"-->
<!--                :value="value"-->
<!--                :dropdownStyle="{ maxHeight: '400px', overflow: 'auto' }"-->
<!--                placeholder="Please select"-->
<!--                allowClear-->
<!--                multiple-->
<!--                treeDefaultExpandAll-->
<!--                @change="onChange"-->
<!--                @search="onSearch"-->
<!--                @select="onSelect"-->
<!--        >-->
<!--            <a-tree-select-node value="parent 1" title="parent 1" key="0-1">-->
<!--                <a-tree-select-node value="parent 1-0" title="parent 1-0" key="0-1-1">-->
<!--                    <a-tree-select-node value="leaf1" title="my leaf" key="random" />-->
<!--                    <a-tree-select-node value="leaf2" title="your leaf" key="random1" />-->
<!--                </a-tree-select-node>-->
<!--                <a-tree-select-node value="parent 1-1" title="parent 1-1" key="random2">-->
<!--                    <a-tree-select-node value="sss" key="random3">-->
<!--                        <button style="color: #08c" slot="title">parent2321321 1-1</button>-->
<!--                        <p>321</p>-->
<!--                    </a-tree-select-node>-->
<!--                </a-tree-select-node>-->
<!--            </a-tree-select-node>-->
<!--        </a-tree-select>-->


        <vxe-grid
                ref="xSuppliesClaimBotTable"
                size="small"
                height="140"
                border
                resizable
                auto-resize
                highlight-current-row
                align="center"
                :data="suppliesClaimBotDatas"
                show-overflow
                show-header-overflow
                showHeader
                :columns="tableColumn"

        >
        </vxe-grid>





        <vxe-table
                ref="xSuppliesClaimBotTable"
                size="small"
                height="140"
                border
                resizable
                auto-resize
                highlight-current-row
                align="center"
                :data="suppliesClaimBotDatas"
                show-overflow
                show-header-overflow
                showHeader
        >
            <vxe-table-column type="checkbox" width="5%" :resizable="false" fixed="left"></vxe-table-column>
            <vxe-table-column
                    field="product_name"
                    title="产品"
                    width="16%"
                    :cell-render="{name: 'product_name'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="specification"
                    title="规格型号"
                    width="11%"
                    :cell-render="{name: 'specification'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="product_vendor_name"
                    title="厂商"
                    width="14%"
                    :cell-render="{name: 'product_vendor_name'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="batch_number"
                    title="批号"
                    width="15%"
                    :cell-render="{name: 'batch_number'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="quantity_new"
                    title="订购数量"
                    width="15%"
                    :cell-render="{name: 'quantity_new'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="sold_quantity"
                    title="已销售数量"
                    width="10%"
                    :cell-render="{name: 'sold_quantity'}"
            ></vxe-table-column>
            <vxe-table-column
                    v-if="systemType === 2"
                    field="inventory"
                    title="库存"
                    width="6%"
                    :cell-render="{name: 'inventory'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="status_text"
                    title="状态"
                    width="10%"
                    :cell-render="{name: 'status_text'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="unit_price"
                    title="单价"
                    width="7%"
                    :cell-render="{name: 'unit_price'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="discount"
                    title="折扣"
                    width="6%"
                    :cell-render="{name: 'discount'}"
            ></vxe-table-column>
            <vxe-table-column
                    field="rate"
                    title="税率"
                    width="6%"
            >
                <template v-slot="{ row }">
                    <div class="rate-wrap">
                        <span class="input">{{ row.rate }}</span>
                        <span class="tip">%</span>
                    </div>
                </template>
            </vxe-table-column>
            <vxe-table-column
                    field="action"
                    title="操作"
                    width="80"
                    :resizable="false"
                    fixed="right"
            >
                <template v-slot="{ row }">
                    <ul
                            class="action-btn-list-wrap"
                            style="position: relative">
                        <li v-if="row.status === 0 || row.status === 2">
                            <a-tooltip
                                    class="tooltip"
                                    placement="top"
                                    title="终止"
                                    :getPopupContainer="getPopupContainer"
                            >
                                <a-icon
                                        v-if="row.applyStopBtnLoading"
                                        type="loading" />
                                <i
                                        v-else
                                        @click.stop="applyStopBtnFn('apply-stop-wrap-details', row)"
                                        class="yrt yrt-zhongzhi-gaoduan cancel"></i>
                            </a-tooltip>
                        </li>
                    </ul>
                </template>
            </vxe-table-column>
        </vxe-table>
        <a-table :rowSelection="rowSelection" :columns="columns" :dataSource="data">
        </a-table>
    </div>

</template>

<script>
    const columns = [
        {
            title: '432',
            dataIndex: 'hospital_name',
            scopedSlots: { customRender: 'hospital_name' },
        },
        {
            title: '厂商',
            dataIndex: 'vendor_name',
        },
        {
            title: 'Address',
            dataIndex: 'address',
        },
    ];
    const data = [
        {
            hospital_inner_sn: 1,
            hospital_name: "北京医院",
            gv_inner_sn: 193,
            detail_inner_sn: 1,
            vendor_inner_sn: 2,
            product_inner_sn: 3,
            specification_inner_sn: 1,
            unit_inner_sn: 1,
            sort_number: 0,
            batch_number: "",
            grant_quantity: 101,
            get_quantity: 0,
            vendor_name: "河北长安医疗生产有限公司",
            product_name: "电动液压综合手术台",
            specification: "TZD-1",
            unit_name: "个",
            product_type: 1,
            image: null,
            warehouse_inner_sn: 1,
            warehouse_name: "大兴仓库",
            status: 0
        },
        {
            hospital_inner_sn: 1,
            hospital_name: "北京医院",
            gv_inner_sn: 193,
            detail_inner_sn: 1,
            vendor_inner_sn: 2,
            product_inner_sn: 3,
            specification_inner_sn: 1,
            unit_inner_sn: 1,
            sort_number: 0,
            batch_number: "",
            grant_quantity: 101,
            get_quantity: 0,
            vendor_name: "河北长安医疗生产有限公司",
            product_name: "电动液压综合手术台",
            specification: "TZD-1",
            unit_name: "个",
            product_type: 1,
            image: null,
            warehouse_inner_sn: 1,
            warehouse_name: "大兴仓库",
            status:1
        },
        {
            hospital_inner_sn: 1,
            hospital_name: "北京医院",
            gv_inner_sn: 193,
            detail_inner_sn: 1,
            vendor_inner_sn: 2,
            product_inner_sn: 3,
            specification_inner_sn: 1,
            unit_inner_sn: 1,
            sort_number: 0,
            batch_number: "",
            grant_quantity: 101,
            get_quantity: 0,
            vendor_name: "河北长安医疗生产有限公司",
            product_name: "电动液压综合手术台",
            specification: "TZD-1",
            unit_name: "个",
            product_type: 1,
            image: null,
            warehouse_inner_sn: 1,
            warehouse_name: "大兴仓库",
            status:1
        }
        ,
        {
            hospital_inner_sn: 1,
            hospital_name: "北京医院",
            gv_inner_sn: 193,
            detail_inner_sn: 1,
            vendor_inner_sn: 2,
            product_inner_sn: 3,
            specification_inner_sn: 1,
            unit_inner_sn: 1,
            sort_number: 0,
            batch_number: "",
            grant_quantity: 101,
            get_quantity: 0,
            vendor_name: "河北长安医疗生产有限公司",
            product_name: "电动液压综合手术台",
            specification: "TZD-1",
            unit_name: "个",
            product_type: 1,
            image: null,
            warehouse_inner_sn: 1,
            warehouse_name: "大兴仓库",
            status:1
        }
    ];
    export default {
        name: 'home',
data() {
    return {
        data,
        columns,
        selectedRowKeys: [],
        value: ['0-0-0'],
        show:false,
        treeData:[
            {
                title: 'Node1',
                value: '0-0',
                key: '0-0',
                scopedSlots: { title: 'custom' },
            },
            {
                title: 'Node2',
                value: '0-1',
                key: '0-1',
            },
            {
                title: 'Node3',
                value: '0-2',
                key: '0-2',
            },

        ],

        tableColumn:[
            { type: 'checkbox', width: '5%' },
            { field: 'product_name', title: '产品', width:'16%' },
            { field: 'specification', title: '规格型号', width:'11%' },
            { field: 'product_vendor_name', title: '厂商', width:'14%' },
            { field: 'batch_number', title: '批号', width:'15%' },
            { field: 'quantity_new', title: '订购数量', width:'15%' },
            { field: 'sold_quantity', title: '已销售数量', width:'10%' },
            { field: 'inventory', title: '库存', width:'6%',visible: false,
            },
            { field: 'status_text', title: '状态', width:'10%'},
            { field: 'unit_price', title: '单价', width:'7%'},
            { field: 'discount', title: '折扣', width:'6%'},
            { field: 'rate', title: '税率', width:'6%',tooltip: '%',
                slots: {
                    default: ({row}) => {
                        return [<span>{ row.rate }%</span>]
                    }
                }
            },
            { field: 'action', title: '操作', width:'80',resizable:false,fixed:'right',
                slots: {
                    default: ({ row }) => {
                        return [
                            <i class="yrt yrt-zhongzhi-gaoduan cancel" onClick={ () => this.applyStopBtnFn('apply-stop-wrap-details',row) }>2 </i>
                    ]
                    }
                }
            },

        ],

//         <ul
// class="action-btn-list-wrap"
//     style="position: relative">
//         <li v-if="row.status === 0 || row.status === 2">
//         <a-tooltip
//         class="tooltip"
//     placement="top"
//     title="终止"
// :getPopupContainer="getPopupContainer"
//         >
//         <a-icon
//     v-if="row.applyStopBtnLoading"
//         type="loading" />
//             <i
//     v-else
// @click.stop="applyStopBtnFn('apply-stop-wrap-details', row)"
// class="yrt yrt-zhongzhi-gaoduan cancel"></i>
//         </a-tooltip>
//         </li>
//         </ul>



        suppliesClaimBotDatas:[
            {min_unit_inner_sn: 1,
                quantity: 1,
                batch_number: "",
                min_unit: "ML",
                detail_inner_sn: 9,
                discount: 1,
                specification: "规格1试剂Ⅰ15ml×1",
                product_vendor_inner_sn: 2,
                unit_inner_sn: 1,
                unit_price: 1,
                inventory: 0,
                product_name: "钾试剂盒-K(不除蛋白改良法)",
                sold_quantity: 0,
                min_unit_quantity: 1,
                specification_inner_sn: 1,
                unit: "ML",
                product_type: 1,
                sort_number: 0,
                product_vendor_name: "河北长安医疗生产有限公司",
                rate: 0,
                product_inner_sn: 11,
                status: 0
            }
        ]

    }
},
        computed: {

        },
        methods: {
            aa(){

                    var iDropDown = document.getElementsByClassName("ant-select-dropdown")
                if (iDropDown.length > 0) {
                    iDropDown[iDropDown.length - 1].parentNode.style.display = 'block'
                }

                let that =this
                that.$refs.aad.open = true
                setTimeout(() => {
                    var  iDropDown= document.getElementsByClassName("ant-select-dropdown")
                    var strNode=document.createElement("button");
                    strNode.className= 'ant-btn ant-btn-primary ant-btn-sm dropdownButton'
                    strNode.innerHTML = '确定'
                    iDropDown[iDropDown.length - 1].appendChild(strNode);
                    strNode.onclick = function (){
                        console.log('this.$refs.aad', that.$refs.aad)
                        that.$refs.aad.blur()
                    }

                    var strNode2=document.createElement("button");
                    strNode2.className= 'ant-btn ant-btn-default ant-btn-sm dropdownButton'
                    strNode2.innerHTML = '取消'
                    strNode2.onclick = function (){
                        console.log('this.$refs.aad', that.$refs.aad)
                        console.log('this.$refs.aad', that.$refs.aad.$listeners.click)
                        // that.$refs.aad.disabled = true
                        that.$refs.aad.open = false
                        // that.$refs.aad.blur()
                        // that.$refs.a3ad.focus()
                        // iDropDown[iDropDown.length - 1].style.display = 'none'
                        // iDropDown[iDropDown.length - 1].parentNode.style.display = 'none'
                        // console.log('iDropDown[iDropDown.length - 1].parentNode', iDropDown[iDropDown.length - 1].parentNode)
                        //  console.log('this.$refs.xSuppliesClaimBotTable', that.$refs.xSuppliesClaimBotTable)
                        // that.$refs.xSuppliesClaimBotTable.resetAll()
                        // that.show = false

                    console.log(that.show)
                    }
                    iDropDown[iDropDown.length - 1].appendChild(strNode2);
                }, 200)



                // var obj=document.createElement("p"); //添加哪类节点


                // e.appendChild(obj)

                //
            },
            onChange(value) {
                console.log('onChange ', value);
                this.value = value;
            },
        },
        mounted() {



        }

    }
</script>
<style>
.dropdownButton{

    float: right;

    margin: 0px 10px 10px 0px;
}

</style>
