const caseName = "清景麟夢公園"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市沙鹿區永寧路、新站一路口",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3638.173294574602!2d120.55402!3d24.235717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDE0JzA4LjYiTiAxMjDCsDMzJzE0LjUiRQ!5e0!3m2!1szh-TW!2stw!4v1692164201995!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/ZPZofPbe1gUT6R9F9",
    phone: "04-2665-5577",
    fbLink: "https://www.facebook.com/100095472765730",
    fbMessage: "https://m.me/100095472765730",
    caseName: caseName,
    houseInfos: [
        ["投資興建", ""],
        ["建照號碼", ""],
        ["建築設計", ""],
        ["公設設計", ""],
        ["景觀設計", ""],
        ["燈光設計", ""],
        ["基地面積", ""],
        ["格局規劃", ""],
    ],
    gtmCode: ["GTM-PQ8LQ84S"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    navList: [{
            name: "微笑歐洲",
            target: ".s1",
            offset: "",
        },{
            name: "10大看點",
            target: ".s3",
            offset: "",
        },{
            name: "大墅人生",
            target: ".s4",
            offset: "",
        },{
            name: "機能在手",
            target: ".s6",
            offset: "",
        },{
            name: "港灣錢潮",
            target: ".s7",
            offset: "",
        },{
            name: "麗寶承諾",
            target: ".s9",
            offset: "",
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