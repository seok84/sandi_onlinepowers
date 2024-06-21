<template>
    <div class="form-group file_area">
        <ul>
            <li>
                <div><img src="~/assets/img/sample/sample_img.jpg" alt="썸네일" class="img_full"></div> <button
                    type="button" class="btn_file_del"><span class="screen_out">파일삭제</span></button>
            </li>
            <li>
                <div><img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full"></div> <button type="button"
                    class="btn_file_del"><span class="screen_out">파일삭제</span></button>
            </li>
            <li>
                <div><img src="~/static/img/sample/pc_sample_img.png" alt="썸네일" class="img_full"></div> <button type="button"
                    class="btn_file_del"><span class="screen_out">파일삭제</span></button>
            </li>
            <li><input type="file" id="file1"> <label for="file1" class="btn_file_add"><span
                        class="screen_out">파일추가</span></label></li>
        </ul>
        <div class="info_dot">
            <p>5MB 이하의 사진 4장까지 첨부 가능</p>
        </div>
    </div>
</template>