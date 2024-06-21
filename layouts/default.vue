<template>
    <div id="saleson">
        <LayoutHeader />
        <LayoutAside></LayoutAside>
        <nuxt class="fullHeight"/>
        <LayoutFloatMenu />
        <LayoutFooter></LayoutFooter>
        <LayoutAlert></LayoutAlert>
        <LayoutToast></LayoutToast>
    </div>
</template>
<script>
import common from "~/assets/js/common.js"
export default {
    head() {
        let meta = [];

        meta.push({ charset: 'utf-8' });
        meta.push({ hid: 'viewport', name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover, maximum-scale=1, user-scalable=no' });
        meta.push({ hid: 'apple-mobile-web-app-capable', name: 'apple-mobile-web-app-capable', content: 'yes' });
        meta.push({ hid: 'robots', name: 'robots', content: 'noindex,noarchive' });

        return {
            title: 'SalesOn',
            titleTemplate: '%s - SalesOn3',
            meta: meta,
            script: [

            ],
            link: [

            ]
        }
    },
    beforeMount: function () {
    },
    data() {
        return {

        }
    },
    mounted() {
        common.setSelectColorGray();
    }
}
</script>

<style>
@import url('~/assets/css/reset.css');
@import url('~/assets/css/common.css');
@import url('~/assets/css/layouts/modal-ui.css');

#saleson {
    position: relative;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* overflow-x: hidden; */
}
</style>



