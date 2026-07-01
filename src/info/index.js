const caseName = "華雄明日之星"
export default {
  caseid: "80794155-69e4-466a-9ab5-09bdece5df42",

  //caseid: "1d2db7f2-157b-4a33-acbc-f4abfde91846", 測試
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "高雄市三民區中華三路353號",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7364.89714569431!2d120.28767955543806!3d22.637058030603423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0460ddae342b%3A0xde3bf5d6e2a6ffd9!2zODA36auY6ZuE5biC5LiJ5rCR5Y2A6bOz5YyX6YeM5Lit6I-v5LiJ6LevMzUz6Jmf!5e0!3m2!1szh-TW!2stw!4v1782873908881!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/3hn8osg2mhX2heNm9",
  phone: "07-281-8811",
  fbLink: "https://www.facebook.com/61590660418467/",
  fbMessage: "https://m.me/61590660418467/",
  // line: "https://lin.ee/88Y9fk9",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "豪鎂建設實業有限公司"],
    ["工程營造", "華總營造 "],
    ["建築设計", "原東聯合建築師事務所 "],
    ["廣告代銷", "上宸開發有限公司"],
  ],
  gtmCode: ["GTM-000000"], // 可放置多個
  recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  // recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "立即預約",
   // subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
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
    room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["兩房", "三房"],
      required: false,
      //apiB: "room_type" // B API 對應欄位
    },
/*
    budget: {
      title: "購屋預算",
      type: "select",
      hold: "請選擇區間",
      option: ["1000萬內", "1000-1500萬", "1500-2000萬"],
      required: false, //必填開啟使用
    },*/
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
  ],
}