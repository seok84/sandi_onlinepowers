<template>
    <div class="inquiry_wrapper">
<!-- 
form_inner 에
## class type02 추가 시 search_area 가 display: none 처리
## class type03 추가 시
search_input, search_area 가 display: none 처리
-->
        <div class="form_inner">
            <div class="search_input">
                <div class="form_calendar">
                    <input type="date" class="form_control" title="시작날짜" v-model="searchStartDate"
                        data-placeholder="년도-월-일"
                        :data-value="convertToYYYYMMDD(searchStartDate)" 
                        required aria-required="true"/>
                </div>
                <span>~</span>
                <div class="form_calendar">
                    <input type="date" class="form_control" placeholder="종료날짜" title="종료날짜" v-model="searchEndDate"
                        data-placeholder="년도-월-일"
                        :data-value="convertToYYYYMMDD(searchEndDate)" 
                        required />
                </div>
            </div>
            <div class="wrap_inquiry">
                <select class="form_control input_select" v-model="selectedPeriod">
                    <option value="">조회기간</option>
                    <option value="0">1주일</option>
                    <option value="1">1개월</option>
                    <option value="3">3개월</option>
                    <option value="6">6개월</option>
                </select>
            </div>
            <div class="search_area">
                <input type="text" class="form_control" placeholder="검색어를 입력하세요" title="검색어를 입력하세요" />
            </div>
            <button type="button" class="btn btn-small btn-accent btn-black btn-inquire">조회</button>
        </div>
        <form action="">
        </form>
    </div>
</template>

<script>

export default {
    data() {
        return {
            selectedPeriod: '',
            searchStartDate: '',
            searchEndDate: '',
        }
    },
    watch: {
        selectedPeriod() {
            if (this.selectedPeriod === "0") {
                const startDate = new Date();
                startDate.setDate(startDate.getDate() - 7);
                this.searchStartDate = startDate.toISOString().split('T')[0];
                this.searchEndDate = new Date().toISOString().split('T')[0];

            } else if (this.selectedPeriod === "1") {
                const startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 1);
                this.searchStartDate = startDate.toISOString().split('T')[0];
                this.searchEndDate = new Date().toISOString().split('T')[0];

            } else if (this.selectedPeriod === "3") {
                const startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 3);
                this.searchStartDate = startDate.toISOString().split('T')[0];
                this.searchEndDate = new Date().toISOString().split('T')[0];

            } else if (this.selectedPeriod === "6") {
                const startDate = new Date();
                startDate.setMonth(startDate.getMonth() - 6);
                this.searchStartDate = startDate.toISOString().split('T')[0];
                this.searchEndDate = new Date().toISOString().split('T')[0];

            } else {
                this.searchStartDate = "";
                this.searchEndDate = "";
            }
        }
    },
    methods: ({
        convertToYYYYMMDD(dateString) {
            return dateString.replace(/-/g, "");
        }
    })
}
</script>