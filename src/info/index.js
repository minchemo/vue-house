const caseName = "麗寶ACE"

export default {
  caseid: "56482bc0-d610-40de-b536-2b2d2564a550",
// caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
  // case_code: "test", //某些舊案資料庫要單獨設定名稱
  address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
  address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
  address: "台中市東區南京路86號",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d910.2228896713307!2d120.68874657804871!3d24.140446166940976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d004316b727%3A0x6ae5ff5117070033!2z6bqX5a-2QUNFIOm1rOeoi-WPsOS4reaZuuWMr-e4vemDqA!5e0!3m2!1szh-TW!2stw!4v1781059674070!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/shZNPyYY4fjqjCod6",
  phone: "04-2211-0333",
  fbLink: "https://www.facebook.com/61589890269981",  // 開關這個 跑版 contactInfo.vue css 有寫註解 改上排按鈕數
  fbMessage: "https://m.me/61589890269981",
  // line: "https://lin.ee/88Y9fk9",
  caseName: caseName,
  houseInfos: [
   /*["空間設計", "xxx"],
    ["企劃銷售", "xxx"],
    ["建照號碼", "xxx"],
     ["經&ensp;紀&ensp;人", "xxx"],
    ["建築設計", "xxx"],
    ["使照號碼", "xxx"],
    ["行銷企劃", "xxx"],*/
    /*
    */
  ],
  // gtmCode: ["GTM-MHSDGRVJ"], // 可放置多個
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "立即預約",
   // subTitle: "將有專人與您聯絡，我們將竭誠為您服務",
   // subTitle_mo: "將有專人與您聯絡，我們將竭誠為您服務",
  },
  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: true, 
      required: false //必填開啟使用
    }
  },
  //各種欄位
  selectFields: {
  /* contact_time: {
    title: "聯絡時段",
    type: "select",
    hold: "請選擇時段",
    option: ["上午", "下午", "晚上", "全天"],
    required: false,
    apiB: "room_type" // B API 對應欄位
  },
 
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
    enabled: true,
    required: false
  },
  area: {
    enabled: true,     // ⚠️ 不能單獨 true
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