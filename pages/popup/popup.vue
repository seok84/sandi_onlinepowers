<template>
    <div id="popup">
        <a href="#" class="p_admin_win_close">닫기</a>
        <div class="img">
            <img src="~/assets/img/sample/open_pop.png" alt="">
        </div>
        <div class="check_area">
            <input type="checkbox" id="check10" title="오늘 하루 이 창을 열지 않음">
            <label for="check10">오늘 하루 이 창을 열지 않음</label>
        </div>
    </div>
</template>

<script>
export default {
    props: ["empty"],
    layout: "empty",
    data() {
    },

    methods: {
        print() {
        },
    },

};
</script>

<style>

    #popup {
        position: relative;
    }

    #popup .p_admin_win_close {
        position: absolute;
        top: 1rem;
        right: 1.6rem;
        font-size: 0;
    }
    #popup .p_admin_win_close::before,
    #popup .p_admin_win_close::after {
        content: "";
        display: block;
        width: .2rem;
        height: 2.4rem;
        background: #fff;
        position: absolute;
    }
    
    #popup .p_admin_win_close::before {
        transform: rotate(45deg);
    }
    
    #popup .p_admin_win_close::after {
        transform: rotate(135deg);
    }


    #popup .check_area {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        width: 100%;
        padding: 1rem;
    }

    #popup .check_area input[type="checkbox"] {
        margin-right: 0.6rem;
    }

</style>