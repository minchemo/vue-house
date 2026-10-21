const caseName = "富都心四季"

export default {
  caseid: "571369eb-efea-42ba-8eef-40c50b49d591",
// caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
  // case_code: "test", //某些舊案資料庫要單獨設定名稱
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "臺南市仁德區仁愛里保仁路68號(仁和國小對面)",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.7172086361347!2d120.22209695!3d22.960639599999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e73653fdd4397%3A0x6d2124e95de436dd!2zNzE36Ie65Y2X5biC5LuB5b635Y2A5LuB5oSb6YeM5L-d5LuB6LevNjjomZ8!5e0!3m2!1szh-TW!2stw!4v1792571923995!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/bkHoGiJXFQLCHnVC7",
  phone: "06-2899868",
  fbLink: "https://www.facebook.com/61594433322145/",  // 開關這個 跑版 contactInfo.vue css 有寫註解 改上排按鈕數
  fbMessage: "https://m.me/61594433322145/",
  // line: "https://lin.ee/88Y9fk9",
  caseName: caseName,
  houseInfos: [
     ["建築規劃", "昌益事業群"],
     ["起造興建", "理銘開發股份有限公司"],
     ["建築設計", "林裕豐建築師事務所"],
     ["建照號碼", "(111)南工造字第00187號"],
     ["樓層規劃", "地上15層，地下3層"],
     ["格局規劃", "2~4房"],
     ["企劃行銷", "全昌益房屋仲介股份有限公司"],
     ["經&ensp;紀&ensp;人", "林世烽(90)竹市字第000050號(換發)"],
    /*  ["投資興建", "國鉅建設"],
    ["建築設計", "謝樹林建築師"],
    ["建照號碼", "113鶯建字第00119-01號"],
    ["行銷企劃", "澄品廣告"],
    ["經&ensp;紀&ensp;人", "陳佳享(112)新北經字第004521號"],
    <iframe src="
    https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d905.4995934164648!2d121.00880926955716!3d24.795509216092317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDQ3JzQzLjgiTiAxMjHCsDAwJzM0LjAiRQ!5e0!3m2!1szh-TW!2stw!4v1784604167409!5m2!1szh-TW!2stw
    " width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
  
    */
  ],
   gtmCode: ["GTM-N6NWX3T5"], // 可放置多個
  recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  // recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
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
line: {
    title: "LINE ID",
    type: "input",
    hold: "請填寫LINE ID",
    // option: ["上午", "下午", "晚上", "全天"],
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