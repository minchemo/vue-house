$(document).ready(function () {
    //initTilt();
    initSwiper();

    let width = window.innerWidth > 0 ? window.innerWidth : screen.width;
    if (width <= 768) {
        initMoblie();
    }

    AOS.init({
        once: false,
    });
});

function initTilt() {
    $('.tilt').tilt({
        maxTilt: 10,
        perspective: 8000,
        easing: 'cubic-bezier(.03,.98,.52,.99)',
        scale: 1,
        speed: 300,
        transition: true,
        disableAxis: null,
        reset: true,
        glare: false,
        maxGlare: 1,
    });
}

function initSwiper() {
    new Swiper('.swiper-container', {
        slidesPerView: 1.13,
        loop : true,
        pagination: {
            el: '.swiper-pagination',
        },
        speed: 400,
        spaceBetween: 10,
        on: {
            touchStart: function () {
                $('.swipe-here').fadeOut();
            },
        },
        breakpoints: {
            768: {
                slidesPerView: 1,
              },
        },
    });
}

function initMoblie() {
    let images = $('img');
    console.log(images)
    $.each(images, function (i, val) {
        $this = $(val);
        const originURL = $this.attr('src');
        console.log(originURL)
        let isTexture = originURL.match('texture');
        if (isTexture) {
            $this.attr('src', 'mobile-' + originURL);
        }
    });
  //  mobileSwiperText();
}

function mobileSwiperText() {
    const text = [
        '台積電領頭擴大投資南科，古都台南正在3.0翻轉中！<br>正西門路核心大道，貫通市心四通八達，15分通勤南科，<br>科技新貴置產首選，北區鄭子寮重劃區，西門三越商圈、<br>COSTCO商圈、小北商圈繁華匯聚，未來南山微風精品百<br>貨、台南公園開發案潛力無限，現在入主正是起漲點。',
        '以往到日本朝聖全球最美書店「蔦屋書店」，現在在家就<br>能享受，台南首座與臺灣蔦屋書店TSUTAYABOOKSTORE<br>攜手打造，將現代和風生活提案帶入〔西門大院〕書香人<br>文空間，包括四季大花園、和風書苑、健身房、兒童<br>遊戲閱覽室、才藝教室、閱覽室、空中花園等豐富的樂齡<br>共享休閒設施。',
        '座落豪宅林立鄭子寮高級住宅生活聚落，18座公園綠意環<br>繞，市心難得低密度高綠覆開發，文元國小高升學率明星<br>學區，禮聘台北名宅大師團隊打造，正西門路凌空24層雙<br>塔地標，千坪開闊大基地，三面臨路好風光，高坪效精工<br>制震宅，等待是值得的，鄭子寮最美的日系花園建築，<br>2021即將美好盛開。',
    ];
    for (let index = 0; index < 3; index++) {
        let target = index + 1;
        $('.swiper-intro-text-' + target).html(text[index]);
    }
}
