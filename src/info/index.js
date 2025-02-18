const caseName = "微笑雲朵"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市三民區建工路597號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7364.292390808579!2d120.3146126!3d22.6483372!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04e742aa749f%3A0x723ff240c99a8f2b!2zODA36auY6ZuE5biC5LiJ5rCR5Y2A5bu65bel6LevNTk36Jmf!5e0!3m2!1szh-TW!2stw!4v1739784143593!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/ub2PCV1sqFyGLaMs6",
    phone: "07-386-7888",
    fbLink: "https://www.facebook.com/61571891528294",
    fbMessage: "https://m.me/61571891528294",
    // line: "https://lin.ee/uzbHOpK",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "晟揚建設股份有限公司"],
        ["建築設計", "梁慶源沈鈺峰聯合建築師事務所"],
        ["建照號碼", "(111)高市工建築字第00877號"],
        ["行銷企劃", "上旺開發"],
        ["經&ensp;紀&ensp;人", "(102)高市字第00034號 林峰旭"],
       /* ["使用執照", "110重使字第00336號"],*/
    ],
    gtmCode: ["GTM-MCP2RFPF"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["1房","2房"],
    budget: ["700-1000萬","1000-2000萬"],

    navList: [{
 /*       name: "微笑雲朵",
        target: ".s1",
        offset: "0",
        offsetmo: "0",
    },{*/
        name: "三民核心",
        target: ".s2",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "耀眼港都",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "快捷交通",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "繁華環伺",
        target: ".s5",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "書香圍繞",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "愜意休憩",
        target: ".s7",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "城揚品牌",
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