<template>
    <p>{{ popupTxt }}</p>
</template>
<script>
export default {
    name: 'popupBaseTxt',
    props: {
        popupTxt: {
            type: [String]
        },
    }
}
</script>