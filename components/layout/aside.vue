<template>
    <div class="floating_side_menu" ref="floatSideMenu">
        <input id="fold_menu" type="checkbox" name="fold_menu">
        <label for="fold_menu" class="fold_menu">
            <div class="side_menu_wrap">
                <a href="javascript:void(0);" class="fm_link fm_basket">
                    <div class="fm_ico">장바구니</div><span>999</span>
                    <em>장바구니</em>
                </a>
                <a href="javascript:void(0);" class="fm_link fm_interest">
                    <div class="fm_ico">관심상품</div><span>845</span>
                    <em>관심상품</em>
                </a>
                <a href="javascript:void(0);" class="fm_link fm_record">
                    <div class="fm_ico">최근 본 상품</div>
                    <em>최근 본 상품</em>
                </a>
                <button class="fm_link fm_top_btn" @click="topScroll">맨 위로</button>
            </div>
        </label>
    </div>
</template>

<script>
export default {
    name: 'AsideUi',
    methods: {
        topScroll() {
            if (window.pageYOffset > 0) {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        },
        handleScroll() {
            const floatAside = this.$refs.floatSideMenu

            const headerH = document.querySelector("#header-ui").offsetHeight;

            if (window.scrollY > headerH) {
                floatAside.classList.remove('pinned')
            } else {
                floatAside.classList.add('pinned')
            }



        }
    },
    mounted() {
        let foldBtn = document.querySelector('#fold_menu');


        foldBtn.addEventListener('click', () => {
            foldBtn.parentElement.classList.toggle('active');
        });

        setTimeout(() => {
            window.addEventListener('scroll', this.handleScroll);
        }, 100);
        
        this.$refs.floatSideMenu.classList.add('pinned')
    }

}
</script>