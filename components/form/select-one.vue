<template>
    

        <select name="" id="selectOne" class="form_control input_select">
            <option :value="item.value" v-for="(item, index) in itemInfo" :key="index">{{ item.item }}</option>
        </select>
</template>

<script>

export default {
    name: 'selectOne',
    props: [],
    data() {
        return {
            itemInfo: [
                {
                    value: "value1",
                    item: "더미1",
                },
                {
                    value: "value2",
                    item: "더미2",
                },
                {
                    value: "value3",
                    item: "더미3",
                },
                {
                    value: "value4",
                    item: "더미4",
                },
            ],


        };
    },
}

</script>

<style>
</style>
