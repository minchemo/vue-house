const caseName = "豐邑匯禮"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市西屯區市政路10號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.4442108791386!2d120.64352467571972!3d24.156149273077798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d939f7b250b%3A0x978bc5bc4f3ede49!2zNDA35Y-w5Lit5biC6KW_5bGv5Y2A5biC5pS_6LevMTDomZ8!5e0!3m2!1szh-TW!2stw!4v1713772329889!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/ikSpJr5b4uUZd96P6",
    phone: "04-2258-0988",
    fbLink: "https://www.facebook.com/61556823341836/",
    fbMessage: "https://m.me/61556823341836/",
    caseName: caseName,
    houseInfos: [
        /*
        ["投資興建", "xx"],
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "(111)南工使字第01269號等10個"],
        ["行銷企劃", "自售"],
        */
    ],
    gtmCode: ["GTM-KTP354Z8"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約鑑賞",/*
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",  
        */
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["兩房","三房","四房","其他"],
    budget: ["1500-2000萬","2001-3000萬","3001-4000萬","4001-5000萬","5000萬以上"],
    navList: [
        /*
        {
            name: "雙核心地段",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通中軸",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "水岸生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英學區",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "安心品牌",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "電梯店墅",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "嚴選建材",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳家首席",
            target: ".s10",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "立即來電",
            target: ".contact-info",
            offset: "",
            type: 'btn'
        },
        {
              name: "地圖導航",
              target: ".gmap",
              offset: "",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
    */
    ],
}