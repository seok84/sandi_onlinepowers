<template>
    <div class="item-thumbnail" :class="{ 'sold-out': item.soldOut }">
        <div class="rank" v-if="item.rank">{{ item.rank }}</div>
        <div class="time" v-if="item.time">D-DAY</div>
        <div class="sold-out-wrap">
            <span>
                <img src="~/assets/img/items/sold-out.png" alt="품절">
            </span>
        </div>
        <img class="thumbnail" :src="item.thumbnail" alt="썸네일">
    </div>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            default: {
                thumbnail: require("~/assets/img/sample/thumb.png"),
                soldOut: Boolean,
                rank: false,
                time: false,
            }
        }
    },
    data: () => {
        return {}
    },
    mounted() { },
    methods: {},

}
</script>

<style scoped>
@import url("~/assets/css/components/item/thumbnail.css");
</style>