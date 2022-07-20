<template>
    <div class="s4 relative">
        <div class="title" data-aos="zoom-in" data-aos-delay="0">
            <div class="t1">重新定義<span>15</span>分鐘的價值<br>雙北輕移民首選</div>
            <div class="line"></div>
            <div class="t2 font-['noto_sans_tc']">
                自駕族夢寐以求的通勤優勢，洲子洋交通樞紐，瞬接台64、國道一號、汐五高架、五楊高架，南來北往桃園國際機場、內湖科學園區咫尺可達。家門口就是公車站，11條路線綜橫雙北，串連新莊、蘆洲軌道建設。<br />
                洲子洋最成熟路網，恣意串聯大台北精華地區。</div>
        </div>
        <div class="caption font-['noto_sans_tc']">
            洲子洋空拍夜景
        </div>
    </div>
</template>

<style lang="scss">
@import "@/assets/style/function.scss";

.s4 {
    width: 100%;
    height: size(1080);
    background-image: url('@/section/s4/bg.jpg');
    background-size: cover;

    .title {
        color: #fff;
        display: flex;
        align-items: flex-end;
        gap: size(27);
        position: absolute;
        top: size(154);
        left: size(220);

        .t1 {
            font-weight: 700;
            font-size: size(42);
            line-height: size(60);
            text-align: right;

            span {
                font-size: size(64);
                font-weight: 600;
                color: #FFEF00;
            }
        }

        .t2 {
            font-weight: 400;
            font-size: size(20);
            line-height: size(40);
            flex-basis: size(943);
        }

        .line {
            width: size(3);
            height: size(109);
            background-color: #46B258;
        }
    }

    .caption {
        position: absolute;
        font-weight: 500;
        font-size: size(13);
        left: size(30);
        bottom: size(15);
        color: #fff;
    }
}

@media screen and (max-width:768px) {

    .s4 {
        width: 100%;
        height: size-m(667);
        background-image: url('@/section/s4/bg_m.jpg');

        .title {
            color: #fff;
            flex-direction: column;
            align-items: flex-start;
            gap: size-m(25);
            position: relative;
            top: unset;
            left: unset;
            width: 85%;
            margin: 0 auto;
            padding-top: size-m(35);

            .t1 {
                font-weight: 700;
                font-size: size-m(25);
                line-height: size-m(36);
                text-align: left;

                span {
                    font-size: size-m(40);
                    margin: 0 size-m(5);
                }
            }

            .t2 {
                font-weight: 400;
                font-size: size-m(14);
                line-height: size-m(25);
                flex-basis: unset;
                text-align: justify;
            }

            .line {
                width: 100%;
                height: size-m(1);
                background-color: #46B258;
            }
        }

        .caption {
            position: absolute;
            font-weight: 500;
            font-size: size-m(13);
            left: size-m(10);
            bottom: size-m(10);
            color: #fff;
        }
    }
}
</style>

<script setup>
</script>