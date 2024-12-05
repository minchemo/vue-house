const caseName = "鳴日之城"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "桃園市桃園區大仁路50巷17號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.8171403848105!2d121.31995017592463!3d24.972335340770687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681ec37700bfc7%3A0xa90ca6f99779e83c!2zMzMw5qGD5ZyS5biC5qGD5ZyS5Y2A5aSn5LuB6LevNTDlt7cxN-iZnw!5e0!3m2!1szh-TW!2stw!4v1732777802405!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/HyyRkXFi9PcGVRMs9",
    phone: "07-722-0088",
    fbLink: "https://www.facebook.com/61557529449820",
    fbMessage: "https://m.me/61557529449820",
    caseName: caseName,
    houseInfos: [
      ["投資興建", "新月建設股份有限公司"],
      ["建築設計", "李承洋建築師事務所"],
      ["建照號碼", "109鶯建字第00258-01號<bg>109鶯建字第00119-02號"],
      ["行銷團隊", "曜勝廣告有限公司"],
      ["經紀人", "陳秀琴 (110)桃市經字第001503號<bg>朱立民  (112)北市經證字第02756號"],
    ],
    gtmCode: ["GTM-T65K69SP"], // 可放置多個
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
    room_type: ["2房","3房","3+1"],
    budget: ["1000-1500","1500-2000","2000以上"],
    navList: [{
        name: "新北門戶",
        target: ".s1",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "高速樂活",
        target: ".s2",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "美術生活",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "雙巨擘聯手",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "美學地標",
        target: ".s5",
        offset: "-60",
        offsetmo: "0",
  },{
        name: "質感建材",
        target: ".s6",
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