const caseName = "展志縱橫時代"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "桃園市大林路7號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.0875022521666!2d121.3166766696226!3d24.988220114185737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681ee52bdba827%3A0x709762564c2f2567!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn5p6X6LevN-iZnw!5e0!3m2!1szh-TW!2stw!4v1732520660174!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/B7H6uZt97cy68RoWA",
    phone: "03-364-2277",
    fbLink: "https://www.facebook.com/61565182162397",
    fbMessage: "https://m.me/61565182162397",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "展志建設開發股份有限公司"],
        ["建築設計", "李俊利建築師事務所"],
        ["行銷企劃", "錦盒建築行銷有限公司"],
        ["建照號碼", "(111)桃市都建執照字第會桃00148-01號"],
        ["基地位置", "桃園市延平路及樹林四街路口"],
    ],
    gtmCode: ["GTM-TLNH82HB","GTM-5BP5WN26","GTM-5JGM4G3L"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["三房"],
    budget: ["2388~2588萬","2688~2888萬"],

    navList: [{
            name: "縱橫未來",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "三心六線",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "舊城新生",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "三鐵共構",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "繁華時尚",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "香榭綠馥",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "展志品牌",
            target: ".s8",
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
    ],
    
}