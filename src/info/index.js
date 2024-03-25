const caseName = "保泰一品"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市前鎮區永豐路237號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.2039021366445!2d120.33038727630576!3d22.608859731638393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0357e46857dd%3A0x2435498d582d88bd!2zODA26auY6ZuE5biC5YmN6Y6u5Y2A5rC46LGQ6LevMjM36Jmf!5e0!3m2!1szh-TW!2stw!4v1710724704786!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/wjeFDtefUeKC3qkv8",
    phone: "07-722-0088",
    fbLink: "https://www.facebook.com/61557147771320",
    fbMessage: "https://m.me/61557147771320",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "晟揚建設股份有限公司"],
        ["建築設計", "梁慶源沈鈺峰聯合建築師事務所"],
        ["建照號碼", "109高市建築字第01797號"],
        ["行銷企劃", "上宸國際"],
    ],
    gtmCode: ["GTM-W2JR8PCQ"], // 可放置多個
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
    room_type: ["3房(33-41坪)","4房(51-53坪)"],
    budget: ["1600-1800","1800-2000","2000-2200"],
    navList: [
    {
        name: "品奢潮",
        target: ".s2",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "品盛市",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "品質域",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "品書香",
        target: ".s5",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "品風采",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "品建築",
        target: ".s7",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "品保泰",
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