<template>
    <div class="lnb_wrapper on">
        <p class="lnb_tit">고객센터</p>
        <ul ref="menu" class="info_sub_tit scrollNone">
            <li v-for="(item, index) in items" :key="index"
                :class="`${'customer' + (index + 1)} ${$route.path === item.url ? 'active' : ''}`">
                <nuxt-link :to="item.url">
                    {{ item.label }}
                </nuxt-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "LNB",
    data() {
        return {
            items: [
                { label: "공지사항", url: "/customer/notice" },
                { label: "FAQ", url: "/customer/faq" },
                { label: "Q&A", url: "/customer/apply" },
                { label: "견적문의", url: "/customer/apply-store" },
                /*
                { label: "대형카페&프랜차이즈", url: "/customer/apply-franchise" },
                { label: "카페 솔루션 상담", url: "/customer/apply-counseling" }
                */
            ]
        };
    },
    mounted() {
        if (window.innerWidth < 768) {
            const menu = this.$refs.menu;
            const activeEl = menu.querySelector(".active");
            const menuWidth = menu.offsetWidth;
            const activeWidth = activeEl.offsetWidth;
            menu.scrollLeft = activeEl.offsetLeft - (menuWidth - activeWidth) / 2;
        }
    }
};
</script>