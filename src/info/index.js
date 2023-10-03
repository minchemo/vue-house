const caseName = "test"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "XXXXXX",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14458.818042522642!2d121.53133709299313!3d25.044100081261973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1696299838988!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/CVxvTJiNENdnAvPS8",
    phone: "02-0000",
    fbLink: "https://www.facebook.com/lixin.com.tw",
    fbMessage: "https://m.me/lixin.com.tw",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "xxxx"],
        ["建築設計", "xxxx "],
        ["結構設計", "xxxx"],
        ["工程營造", "xxxxx"],
        ["企劃銷售", "xxxxxx"],
        ["建照號碼", "xxxxx"],
        ["證照號碼", "xxxx"],
        ["經 紀 人", "xxxx"], 
        ["", "此區可隱藏 也可後續提供更改"], 
        ["", "項目皆可增減調整"], 
    ],
    gtmCode: ["GTM-W7ZGRNJ"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["一房","兩房","三房","四房","其他"],
    budget: ["1000萬以下","1000~1500萬","1500~2000萬","2000~2500萬","2500~3000萬","3000~5000萬","5000萬以上"],
    navList: [{
            name: "重大建設",
            target: ".s3",
            offset: "",
        },{
            name: "公園特區",
            target: ".s4",
            offset: "",
        },{
            name: "生活機能",
            target: ".s5",
            offset: "",
        },{
            name: "制震地標",
            target: ".s6",
            offset: "",
        },{
            name: "會館公設",
            target: ".s7",
            offset: "",
        },{
            name: "加值服務",
            target: ".s8",
            offset: "",
        },{
            name: "選書合作",
            target: ".s9",
            offset: "",
        },{
            name: "誠意保固",
            target: ".s10",
            offset: "",
        },{
            name: "國際建材",
            target: ".s10",
            offset: "",
        },
    ],
}