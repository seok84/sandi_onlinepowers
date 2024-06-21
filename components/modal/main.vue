<template>
    <div class="main_modal">
        <div class="main_modal_container" :class="'swiper-container', isMobile">
            <div class="main_modal_wrapper" :class="'swiper-wrapper', isMobile">
                <div class="main_modal_item" :class="'swiper-slide', isMobile" v-for="(item, index) in bannerInfo"
                    :key="index" :style="{ left: item.left + 'px', top: item.top + 'px' }">
                    <nuxt-link :to="item.to" v-if="item.modalImg" class="main_modal_img">
                        <img :src="item.modalImg" alt="banner">
                    </nuxt-link>
                    <div v-if="item.modalEdit" class="main_modal_edit">
                        <div v-html="item.modalEdit"></div>
                    </div>
                    <div class="btn-wrap">
                        <label><input type="checkbox" @click="$emit('close' + index)">오늘 그만 보기</label>
                        <button @click="$emit('closeBtn' + index)">닫기</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        itemInfo: {
            type: [Array],
            default: () => {
                return []
            }
        },
    },

}
</script>

<style scoped>
@import url('~/assets/css/layouts/modal-ui.css');
</style>container swiper-container