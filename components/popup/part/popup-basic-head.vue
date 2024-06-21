<template>
    <div class="modal_header">
        <h3 class="modal_tit">{{ popupHeadTitle }}</h3>
    </div>
</template>
<script>
export default {
    name: 'popupBase',
    props: {
        popupHeadTitle: {
            type: [String],
            required: true
        },
    }
}
</script>