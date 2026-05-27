const caseName = "青園綠境"

export default {
  caseid: "fb6eb0c4-9485-498d-a532-e929dbf8a8ca",
// caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
  // case_code: "test", //某些舊案資料庫要單獨設定名稱
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "台中市南屯區龍富二路408號",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3641.364423882099!2d120.6452467790985!3d24.123836885000067!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d000961aecb%3A0xa9a42acd7055ed6!2z6Z2S5ZyS57ag5aKDIHwg5Y2B5LiJ5pyf5paw5qGIIOaOpeW-heacg-mkqCB8!5e0!3m2!1szh-TW!2stw!4v1779776773158!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/tKF5RVfJ3WkmiGK49",
  phone: "04-23698899",
  fbLink: "https://www.facebook.com/61589494772234",  // 開關這個 跑版 contactInfo.vue css 有寫註解 改上排按鈕數
  fbMessage: "https://m.me/61589494772234",
  // line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
  /*  ["空間設計", "xxx"],
    ["企劃銷售", "xxx"],
    ["建照號碼", "xxx"],
    ["經&ensp;紀&ensp;人", "xxx"],
    ["建築設計", "xxx"],
    ["使照號碼", "xxx"],
    ["行銷企劃", "xxx"],*/
    /*
    */
  ],
  gtmCode: ["GTM-MHSDGRVJ"], // 可放置多個
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "預約賞屋",
   // subTitle: "將有專人與您聯絡，我們將竭誠為您服務",
   // subTitle_mo: "將有專人與您聯絡，我們將竭誠為您服務",
  },
  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: false, 
      required: false //必填開啟使用
    }
  },
  //各種欄位
  selectFields: {
  contact_time: {
    title: "聯絡時段",
    type: "select",
    hold: "請選擇時段",
    option: ["上午", "下午", "晚上", "全天"],
    required: false,
    apiB: "room_type" // B API 對應欄位
  },
  /*
    budget: {
      title: "購屋預算",
      type: "select",
      hold: "請選擇區間",
      option: [
        "1500-1700萬", 
        "1800-2000萬", 
        "2100-2300萬"
      ],
      required: false, //必填開啟使用
    }, 
    */
  },
  //縣市地區
  locationConfig: {
  city: {
    enabled: false,
    required: false
  },
  area: {
    enabled: false,     // ⚠️ 不能單獨 true
    required: false
  }
},

  navList: [
    /*
    {
        name: "雙核心地段",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "交通中軸",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    }
*/
  ],
}