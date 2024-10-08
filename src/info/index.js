const caseName = "淳真年代"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "241新北市三重區吉祥街61號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3413185411673!2d121.48696487635216!3d25.090304936020143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af2a4135146b%3A0xe3513a6e90931f61!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5ZCJ56Wl6KGXNjHomZ8!5e0!3m2!1szh-TW!2stw!4v1709622200235!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/Y9hqF78fVecC7fqx8",
    phone: "02-2855-9933",
    fbLink: "https://www.facebook.com/61556636163046",
    fbMessage: "https://m.me/61556636163046",
    line: "https://lin.ee/jX9Xyhz",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "茂群國際投資有限公司"],
        ["建築設計", "曾聰憲建築師"],
        ["結構設計", "林慶榮結構技師"],
        ["工程營造", "笙泰營造"],
        ["企劃銷售", "欣和地產股份有限公司"],
        ["使用執照", "110重使字第00336號"],
    ],
    gtmCode: ["GTM-W6PJV9QK"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "立即預約",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["套房","2房","3房"],
    budget: ["1000-1500萬","1500-2000萬","2000-2500萬","2500-3000萬"],
    
    navList: [{
        name: "淳真年代",
        target: ".s1",
        offset: "0",
        offsetmo: "0",
    },{
        name: "優勢論述",
        target: ".s2",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "南科論述",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "完整機能",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "四方通行",
        target: ".s5",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "優質建商",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "雙車美墅",
        target: ".s7",
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