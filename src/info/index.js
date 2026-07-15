const caseName = "小東光"

export default {
  caseid: "9c636397-02d6-40cf-98fe-0ed62ed12606",
// caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
  // case_code: "test", //某些舊案資料庫要單獨設定名稱
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "0000",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7234.759861138862!2d121.34143481775472!3d24.95318512732956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f8706c42839%3A0xa23b80f99b5a8e6c!2z5ZyL6I-v57a75o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1781242674159!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/X7a3vdcTvzh4q3id8",
  phone: "000",
  fbLink: "https://www.facebook.com/",  // 開關這個 跑版 contactInfo.vue css 有寫註解 改上排按鈕數
  fbMessage: "https://m.me/",
  // line: "https://lin.ee/88Y9fk9",
  caseName: caseName,
  houseInfos: [
    /*  ["投資興建", "國鉅建設"],
    ["建築設計", "謝樹林建築師"],
    ["建照號碼", "113鶯建字第00119-01號"],
    ["行銷企劃", "澄品廣告"],
    ["經&ensp;紀&ensp;人", "陳佳享(112)新北經字第004521號"],
  
    */
  ],
  gtmCode: ["GTM-MVCDVQJ6"], // 可放置多個
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