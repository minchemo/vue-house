const caseName = "鳴日之城"
//const caseName = "000"

export default {
    caseid: "d1c78e3a-ef86-44cc-ad2b-d15ffea54cc5",
    //caseid: "1d2db7f2-157b-4a33-acbc-f4abfde91846",
    //case_code: "mrjc",
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "桃園市桃園區大仁路50巷17號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d904.2043117493027!2d121.32188136965512!3d24.972331714343376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f19115d0bf5%3A0x600fd0878a3dc2a6!2z6bO05pel5LmL5Z-OLeaOpeW-heacg-mkqA!5e0!3m2!1szh-TW!2stw!4v1735177430232!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/XV4WL3ZWX2AQP63Z7",
    phone: "02-2267-6789",
    fbLink: "https://www.facebook.com/61557529449820",
    fbMessage: "https://m.me/61557529449820",
    caseName: caseName,
    houseInfos: [
      ["投資興建", "新月建設股份有限公司"],
      ["建築設計", "李承洋建築師事務所"],
      ["建照號碼", "109鶯建字第00258-01號<br>109鶯建字第00119-02號"],
      ["行銷團隊", "曜勝廣告有限公司"],
      ["經&ensp;紀&ensp;人", "陳秀琴 (110)桃市經字第001503號<br>朱立民  (112)北市經證字第02756號"],
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

  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: false,     // ✅ 控制顯示 / 隱藏
      required: false    // ✅ 是否必填（通常不會必填）
    }
  },
  //各種欄位
  selectFields: {
    room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
    option: ["2房","3房","3+1"],
      required: false, //必填開啟使用
    }, 
    /*
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["1000", "2000", "3000"],
          //bypass:true, //必填開啟使用
        },
       
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
  },
  //縣市地區
  locationConfig: {
  city: {
    enabled: true,
    required: false
  },
  area: {
    enabled: true,     // ⚠️ 不能單獨 true
    required: false
  }
},



    navList: [{
        name: "新北門戶",
        target: ".s2",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "三鐵競速",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "雙軌並行",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "鶯桃舒適圈",
        target: ".s5",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "文化城市",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
  },{
        name: "質感建材",
        target: ".s7",
        offset: "-60",
        offsetmo: "0",
  },{
        name: "鶯歌地王",
        target: ".s8",
        offset: "-60",
        offsetmo: "0",
    }, {
      name: "立即來電",
      action: "phone",
      offset: "",
      type: 'btn'
    }, {
      name: "地圖導航",
      action: "gmap",
      offset: "",
      type: "btn",
    }, {
      name: "立即預約",
      target: ".order",
      offset: "",
      type: 'btn'
    },
],

}