<template>
    <a-layout id="components-layout-demo-custom-trigger">
        <a-layout-sider :trigger="null" collapsible v-model="collapsed">

            <!--        selectedKeys="['2']"              -->
<a-menu
        :defaultOpenKeys="['sub1','sub2','sub3']"
        :defaultSelectedKeys="['1']"
        mode="inline"
        theme="light"
        :inlineCollapsed="collapsed"
        @openChange="openChange"
        @select="goto">
    <a-menu-item key="1">
        <a-icon type="pie-chart"/>
        <span>选项一</span>
    </a-menu-item>
    <a-menu-item key="2">
        <a-icon type="desktop"/>
        <span>选项二</span>
    </a-menu-item>
    <a-sub-menu key="sub1">
        <span slot="title"><a-icon type="mail"/><span>选项三</span></span>
        <a-menu-item key="3">选项三-子选项一</a-menu-item>
        <a-menu-item key="4">选项三-子选项二</a-menu-item>
    </a-sub-menu>
    <a-sub-menu key="sub2">
        <span slot="title"><a-icon type="appstore"/><span>选项四</span></span>
        <a-menu-item key="9">选项四-子选项一</a-menu-item>
        <a-menu-item key="10">选项四-子选项二</a-menu-item>
        <a-sub-menu key="sub3" title="选项四-子选项三">
            <a-menu-item key="11">选项四-子选项三-子选项一</a-menu-item>
            <a-menu-item key="12">选项四-子选项三-子选项二</a-menu-item>
        </a-sub-menu>
    </a-sub-menu>
</a-menu>

        </a-layout-sider>
        <a-layout>
            <a-layout-header style="background: #fff; padding: 0">
                <a-icon
                        class="trigger"
                        :type="collapsed ? 'menu-unfold' : 'menu-fold'"
                        @click="()=> collapsed = !collapsed"
                />
                <div style="float: left">这里是上边</div>
            </a-layout-header>
            <a-layout-content
                    :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
            >
                <router-view class="ss"/>
            </a-layout-content>
        </a-layout>
    </a-layout>




</template>

<style lang="scss">
    .ant-layout-has-sider {
        position: absolute;
        bottom: 0;
        top: 0;
        left: 0;
        right: 0px;
    }

    #components-layout-demo-custom-trigger .trigger {
        font-size: 18px;
        line-height: 64px;
        padding: 0 24px;
        cursor: pointer;
        transition: color 0.3s;
    }

    #components-layout-demo-custom-trigger .trigger:hover {
        color: #1890ff;
    }

    #components-layout-demo-custom-trigger .logo {
        height: 32px;
        background: rgba(255, 255, 255, 0.2);
        margin: 16px;
    }


    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }


</style>
<script>
    export default {
        data() {
            return {
                collapsed: false,
            };
        },
        methods: {
            toggleCollapsed() {
                this.collapsed = !this.collapsed;
            },
            goto(e) {
                if(e.key==1)
                {
                    this.$router.push('/')
                }
                else if(e.key=='2')
                {
                    this.$router.push('/about')
                }


            }
            ,
            // 点击菜单的展开/关闭的回调
            openChange (openKeys) {
               alert(openKeys)
            }
        },

    };
</script>


