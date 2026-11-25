const caseName = "Soho360"

export default {
  caseid: "68bfd49b-ac6c-4a6e-8331-7355a837268a",
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "台北市三重區成功路50巷73號旁",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d903.6345881084212!2d121.48684226961335!3d25.049736213574366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzU5LjEiTiAxMjHCsDI5JzE1LjAiRQ!5e0!3m2!1szh-TW!2stw!4v1795596644806!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/RLRNZH42KpAcuZoK9",
  phone: "02-22706789",
  fbLink: "https://www.facebook.com/",
  fbMessage: "https://m.me/",
 // line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
    ["建築興建", "詮美建設股份有限公司"],
    ["建照號碼", "111重建字第00422號"],
    ["建築設計", "莊志寬建築師事務所"],
    ["建築行銷", "聯頡廣告事業有限公司"],
    /*
    */
  ],
  // gtmCode: ["GTM-0"], // 可放置多個
  recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  // recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  // recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "測試表單",
    subTitle: "歡迎填寫表單，將由專人與您聯繫並提供服務，謝謝！",
    subTitle_mo: "歡迎填寫表單，將由專人與您聯繫並提供服務，謝謝！",
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
   /* room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["2房", "3房", "4房"],
      required: false,
      //apiB: "room_type" // B API 對應欄位
    },
    contact_time: {
      title: "聯絡時段",
      type: "select",
      hold: "請選擇時段",
      option: ["上午", "下午", "晚上"],
      required: false,
      //apiB: "room_type" // B API 對應欄位
    },*/
    /*
    budget: {
      title: "購屋預算",
      type: "select",
      hold: "請選擇區間",
      option: ["1000萬", "2000萬", "3000萬"],
      required: false,
      //apiB: "budget" // B API 對應欄位
    },
    line: {
      title: "LINE ID",
      type: "input",
      hold: "請填寫LINE ID",
      // option: ["上午", "下午", "晚上", "全天"],
      required: false,
      // apiB: "room_type" // B API 對應欄位
    },
    use_type: {
      title: "使用用途",
      type: "select",
      hold: "請選擇用途",
      option: ["自住", "投資", "租賃"]
      required: false,
      //apiB: "budget" // B API 對應欄位
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
      name: "明日之星",
      target: ".s1",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "新站特區",
      target: ".s2",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "黃金地段",
      target: ".s4",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "交通優勢",
      target: ".s5",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "繁華生活",
      target: ".s7",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "明星生活圈",
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
    */
  ],
}