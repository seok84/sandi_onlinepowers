
<template>
    <div class="filter-wrapper">
        <span class="all-counter">총<span class="numbering">123</span>개</span>
        <div class="select-filter">
            <select name="" id="" class="input_select">
                <option value="" selected>추천순</option>
                <option value="">조회순</option>
                <option value="">최신순</option>
                <option value="">높은가격순</option>
                <option value="">낮은가격순</option>
            </select>
        </div>
    </div>
</template>

<script>
export default {
    name: 'filterSelect',
}
</script>

<style scoped>
.filter-wrapper {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
}

.all-counter {
    font-size: 1.6rem;
    color: #787878;
    color: #000000;
    letter-spacing: -.75px;
}

.all-counter .numbering {
    font-weight: bold;
    margin: 0 0.1rem 0 0.4rem;
}

.select-filter {
    width: auto;
    display: inline-flex;
    justify-content: flex-end;
    align-items: center;
    border-radius: 3px;
    border: solid 1px var(--color-line-05);

}

.select-filter select {
    font-family: 'pretendard-variable';
    width: 12.8rem;
    height: 3.6rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: 0;
    min-width: unset;
    font-size: 1.5rem;
    text-align: left;
    background-image: url(~/assets/img/common/ico_arr_bottom_black.png);
    background-repeat: no-repeat;
    background-position: 90% center;
    padding: 0 3rem 0 1.5rem;
}

@media (max-width: 1194px) {
    .filter-wrapper {
        padding: 0 2rem;
    }

}
@media (max-width: 780px) {
    .myInfo .filter-wrapper {
        padding: 0rem;
    }
    #listCoupon .filter-wrapper{
        padding: 0 2rem;
    }

}
</style>