const caseName = "新莊榮富"

export default {
  caseid: "e88599e2-8705-4604-b94b-a60df90c9030",
// caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
  // case_code: "test", //某些舊案資料庫要單獨設定名稱
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  // address: "XXXXX",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14458.048771030857!2d121.4580448144107!3d25.050623448985966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1778658685959!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/eLWxyc2yPaKc228G9",
  // phone: "02-8993-6888",
  fbLink: "https://www.facebook.com/61589892236402",  // 開關這個 跑版 contactInfo.vue css 有寫註解 改上排按鈕數
  fbMessage: "https://m.me/61589892236402",
  line: "https://lin.ee/qakWswp",
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
  gtmCode: ["GTM-TWBLLBLF"], // 可放置多個
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "測試表單",
    subTitle: "將有專人與您聯絡，我們將竭誠為您服務",
    subTitle_mo: "將有專人與您聯絡，我們將竭誠為您服務",
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
    room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["兩房", "三房"],
      required: false, //必填開啟使用
    }, 
    budget: {
      title: "購屋預算",
      type: "select",
      hold: "請選擇區間",
      option: [
        "1800-2000萬", 
        "2100-2500萬", 
        "2600-3000萬", 
        "3100萬以上", 
      ],
      required: false, //必填開啟使用
    }, 
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