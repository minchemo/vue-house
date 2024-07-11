const caseName = "佳展大嘉"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
   // address: "台南市安平區府前四街147號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.739139123935!2d120.1852493!3d22.9966181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e77584e24e507%3A0xa92f1e0817f0a8ce!2z5aaC6YKRMl_oh6rlhqDlu7roqK1f5Yud5YGV6ZuG5ZyY!5e0!3m2!1szh-TW!2stw!4v1697008525183!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/y5xEjE4vDDsfydrf6",
    phone: "05-285-2333",
    fbLink: "https://www.facebook.com/61554828582073/",
    fbMessage: "https://m.me/61554828582073/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "佳展建設股份有限公司"],
        ["工程營造", "協侑營造"],
        ["建築結構", "王俊隆建築師事務所"],
        ["工程結構", "RC"],
        ["規劃戶數", "168戶/152車位"],
        ["坪數規劃", "2房24-28坪/3房33-38坪/"],
        ["樓層規劃", "地上12-14層 地下3層"],
        ["企劃銷售", "新富利廣告有限公司"],
    ],
    gtmCode: ["GTM-59B4C885"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        /*
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
        */
    },
    // 底下2個 沒項目就會隱藏
     room_type: ["兩房","三房","店面"],
    //budget: ["2000以下","2000-2500","2500-3000","3000-3500","3500以上"],

    navList: [{
        name: "嘉 未來",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "嘉 速度",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "嘉 嚴選",
        target: ".s8",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "嘉 品味",
        target: ".s9",
        offset: "-60",
        offsetmo: "0",
    }
    ,{
        name: "預約鑑賞",
        target: ".order",
        offset: "",
        type: 'btn'
    },
],

}