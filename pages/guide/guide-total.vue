<template>
    <div class="guide_contents inner">
        <ul class="guide_lnb">
            <li class="nav_item guide_button" @click="tabIndex = 0" :class="{ 'active': tabIndex === 0 }">
                <span> 버튼 </span>
            </li>
            <li class="nav_item guide_badge_tag_item" @click="tabIndex = 1" :class="{ 'active': tabIndex === 1 }">
                <span> 뱃지 </span>
            </li>
            <li class="nav_item guide_form" @click="tabIndex = 2" :class="{ 'active': tabIndex === 2 }">
                <span> 폼 </span>
            </li>
            <li class="nav_item guide_list " @click="tabIndex = 3" :class="{ 'active': tabIndex === 3 }">
                <span> 상품 </span>
            </li>
            <li class="nav_item guide_items" @click="tabIndex = 4" :class="{ 'active': tabIndex === 4 }">
                <span> 리스트 스타일 </span>
            </li>
            <li class="nav_item guide_tab" @click="tabIndex = 5" :class="{ 'active': tabIndex === 5 }">
                <span> 탭 </span>
            </li>
            <li class="nav_item guide_text" @click="tabIndex = 6" :class="{ 'active': tabIndex === 6 }">
                <span> 텍스트/기타 </span>
            </li>
            <li class="nav_item guide_text" @click="tabIndex = 7" :class="{ 'active': tabIndex === 7 }">
                <span> 레이아웃 </span>
            </li>
        </ul>
        <!-- // guide_lnb -->
        <ul class="guide_container">
            <li v-if="tabIndex === 0" class="tab_pane">
                <buttonPages />
            </li>
            <li v-if="tabIndex === 1" class="tab_pane">
                <badgePages />
            </li>
            <li v-if="tabIndex === 2" class="tab_pane">
                <formPages />
            </li>
            <li v-if="tabIndex === 3" class="tab_pane">
                <itemPages />
            </li>
            <li v-if="tabIndex === 4" class="tab_pane">
                <listPages />
            </li>
            <li v-if="tabIndex === 5" class="tab_pane">
                <tabPages />
            </li>
            <li v-if="tabIndex === 6" class="tab_pane">
                <textPages />
            </li>
            <li v-if="tabIndex === 7" class="tab_pane">
                <layoutPages />
            </li>
        </ul>
    </div>
</template>

<script>
import buttonPages from "~/pages/guide/guide-button.vue"
import badgePages from "~/pages/guide/guide-badge.vue"
import formPages from "~/pages/guide/guide-form.vue"
import itemPages from "~/pages/guide/guide-item.vue"
import listPages from "~/pages/guide/guide-list.vue"
import layoutPages from "~/pages/guide/guide-layout.vue"
import tabPages from "~/pages/guide/guide-tab.vue"
import textPages from "~/pages/guide/guide-text.vue"

export default {
    name: 'guideTotal',
    components: {
        buttonPages,
        badgePages,
        formPages,
        itemPages,
        listPages,
        layoutPages,
        tabPages,
        textPages
    },
    data() {
        return {
            tabIndex: 0,
        };
    }
}
</script>

<style></style>