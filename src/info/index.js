const caseName = "皇城御賞"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市大樹區實踐街97號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.062508963183!2d120.42842577587427!3d22.688716828703335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e10b3cf3cb20f%3A0x46387bf8e8bb4789!2zODQw6auY6ZuE5biC5aSn5qi55Y2A5a-m6LiQ6KGXOTfomZ8!5e0!3m2!1szh-TW!2stw!4v1732611741832!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/NjuVhP8zzV3PkHDx6",
    phone: "07-6527555",
    fbLink: "https://www.facebook.com/61566312320409",
    fbMessage: "https://m.me/61566312320409",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "皇上建設有限公司"],
        ["建築設計", "林子森林伯諭聯合建築師事務所"],
        ["建造執照", "(110)高市工建築字第01930-01號"],
        ["使用執照", "(113)高市工建築使字第01160號"],
        ["企劃銷售", "允城國際事業有限公司"],
    ],
    gtmCode: ["GTM-PC4H7J45"], // 可放置多個
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
    //room_type: ["一房","兩房","三房","四房","其他"],
    //budget: ["1000萬以下","1000~1500萬","1500~2000萬","2000~2500萬","2500~3000萬","3000~5000萬","5000萬以上"],

    navList: [{
            name: "豐饒生活",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "未來願景",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "便利交通",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "文教學區",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "建築外觀",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "輕奢規劃",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "實品屋",
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