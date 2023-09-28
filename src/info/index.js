const caseName = "萬企君品"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市淡水區新民街65號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d902.6985236410554!2d121.4377642696526!3d25.176429512310555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a5c6ecb65785%3A0x1945836ec1535297!2z6JCs5LyB5ZCb5ZOB5o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1689059072363!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/xaf4sYQFGJNJ7LB26",
    phone: "02-2626-9393",
    fbLink: "https://www.facebook.com/100089552726620",
    fbMessage: "https://m.me/100089552726620",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "鴻陞建設股份有限公司"],
        ["建築設計", "陳鴻明建築師事務所 "],
        ["公設設計", "胡宗雄建築師事務所"],
        ["結構設計", "沈榮村土木結構技師事務所"],
        ["建照號碼", "111淡建字第00400號"],
        ["行銷企劃", "五率國際廣告股份有限公司"],
        ["經紀人", "黃巧蕙（106）北市經證字第02481號"],
    ],
    gtmCode: ["GTM-WJBN353"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    navList: [{
            name: "三冠王",
            target: ".s4",
            offset: "-60",
        },{
            name: "四聚頭",
            target: ".s5",
            offset: "-60",
        },{
            name: "雙首選",
            target: ".s6",
            offset: "-60",
        },{
            name: "森活味",
            target: ".s7",
            offset: "-60",
        },{
            name: "雙快速",
            target: ".s8",
            offset: "-60",
        },{
            name: "小旅行",
            target: ".s9",
            offset: "-60",
        },{
            name: "飯店宅",
            target: ".s10",
            offset: "-60",
        },{
            name: "精品味",
            target: ".s11",
            offset: "-60",
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