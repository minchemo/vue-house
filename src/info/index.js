const caseName = "PARK32"

export default {
  caseid: "ee6a9758-c21b-4f22-a0d6-11f0f55d9b65",
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "台南市東區中華東路一段與平實七街口",
    googleSrc: "https://www.google.com/maps?q=%E5%8F%B0%E5%8D%97%E5%B8%82%E6%9D%B1%E5%8D%80%E4%B8%AD%E8%8F%AF%E6%9D%B1%E8%B7%AF%E4%B8%80%E6%AE%B5%20%26%20%E5%B9%B3%E5%AF%A6%E4%B8%83%E8%A1%97&output=embed",
    googleLink: "https://www.google.com/maps/search/?api=1&query=%E5%8F%B0%E5%8D%97%E5%B8%82%E6%9D%B1%E5%8D%80%E4%B8%AD%E8%8F%AF%E6%9D%B1%E8%B7%AF%E4%B8%80%E6%AE%B5%20%26%20%E5%B9%B3%E5%AF%A6%E4%B8%83%E8%A1%97",
    phone: "06-2008822",
  fbLink: "https://www.facebook.com/",
  fbMessage: "https://m.me/",
 // line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [
    /*
    ["建築興建", "詮美建設股份有限公司"],
    ["建照號碼", "111重建字第00422號"],
    ["建築設計", "莊志寬建築師事務所"],
    ["建築行銷", "聯頡廣告事業有限公司"],
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