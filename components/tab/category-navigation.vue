<template>
    <div class="category-navigation pc">
        <div class="drop-down-wrap">
            <div class="drop-down">
                <button class="drop-tit" type="button">홈</button>
            </div>
            <div class="connection"><span>+</span></div>
            <div class="drop-down">
                <div class="drop-tit more-desc" @click="toggleCate($event)">1차 카테고리</div>
                <div class="drop-down-menu">
                    <nuxt-link :to="item.link" :class="{ on: activeIndex === index }" class="drop-down-item"
                        v-for="(item, index) in category" :key="index" @click="setActive(index)">{{ item.menu }}
                    </nuxt-link>
                </div>
            </div>
            <div class="connection"><span>+</span></div>
            <div class="drop-down">
                <div class="drop-tit more-desc" @click="toggleCate($event)">2차 카테고리</div>
                <div class="drop-down-menu">
                    <nuxt-link :to="item.link" :class="{ on: activeIndex === index }" class="drop-down-item"
                        v-for="(item, index) in category" :key="index" @click="setActive(index)">{{ item.menu }}
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'cate-navi',
    data: () => {
        return {
            activeIndex: 0,
            category: [
                {
                    menu: "더미카테고리",
                    link: "/item",
                },
                {
                    menu: "더미카테고리",
                    link: "/item",
                },
                {
                    menu: "더미카테고리",
                    link: "/item",
                },
                {
                    menu: "더미카테고리",
                    link: "/item",
                },
                {
                    menu: "더미카테고리",
                    link: "/item",
                },
                {
                    menu: "더미카테고리",
                    link: "/item",
                },
            ],
            categorySwiper: null,
        }
    },
    methods: {
        setActive(index) {
            this.activeIndex = index;
        },
        toggleCate(e) {
            let dropTitle = e.target.parentNode;
            dropTitle.classList.toggle("on");
            console.log("check");
            return false
            // 작업중
        }
    }

}
</script>

<style scoped>
/* 카테고리 네비게이션 바 */
.category-navigation {
    display: block;
    width: 100%;
    max-width: 119.4rem;
    position: relative;
    margin: 4rem auto 2rem;
    z-index: 11;
}

.category-navigation .drop-down-wrap {
    position: relative;
    display: inline-flex;
    text-align: center;
    border: 0;
    z-index: 6;
}

.category-navigation .connection {
    font-size: 1rem;
    color: var(--color-font-01);
    line-height: 1.8rem;
    padding: 0 1rem;
}

.category-navigation .connection span {
    transform-origin: center;
    transform: translateY(4px);
    font-size: 0;
    display: inline-block;
    width: 2px;
    height: 2px;
    background: var(--color-main-pink);
    border-radius: 3px;
}

.category-navigation .drop-down {
    position: relative;
    cursor: pointer;
}

.category-navigation .drop-tit {
    font-size: 1.4rem;
    color: #000;
    line-height: 1.8rem;
    font-weight: 400;
}

.category-navigation .drop-tit.more-desc {
    background: #fff url("~/assets/img/common/arr_select_black.svg") no-repeat center right / auto 100%;
    padding: 0 2rem 0 0;
}

.category-navigation .drop-down .drop-down-menu {
    display: none;
}

.category-navigation .drop-down.on .drop-down-menu {
    position: absolute;
    top: 2.8rem;
    left: 50%;
    display: block;
    width: auto;
    min-width: 13.8rem;
    background-color: #fff;
    border: 1px solid #000000;
    border-radius: .5rem;
    transform: translateX(-50%);
    overflow: hidden;
    padding: 1rem 0;
}

.category-navigation .drop-down-item {
    display: block;
    width: 100%;
    line-height: 3.6rem;
    font-size: 1.4rem;
    font-weight: 400;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
    box-sizing: border-box;
    text-align: left;
    color: #333;
    padding: 0 1rem;
    flex: unset;
}

.category-navigation .drop-down-item:hover,
.category-navigation .drop-down-item.on {
    color: #000000;
    background-color: var(--color-lightblue);
    font-weight: 500;
}


@media (max-width: 1194px) {
    .category-navigation {
        padding-left: 1.6rem;
        padding-right: 1.6rem;
    }
}

@media (max-width: 768px) {
    .category-navigation {
        display: none;
    }
}

@media (max-width: 480px) {}
</style>