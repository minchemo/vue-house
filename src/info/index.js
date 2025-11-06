const caseName = "都廳大院"

export default {
  caseid: "8f3489d1-b60c-4b88-a34c-32fc276dc9c1",
  //case_code: "dt-debang",
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "新北市三重區重新路五段566號",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.6591472408713!2d121.46744627632808!3d25.045638937821025!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a85e4a4a354f%3A0xac185094d2cc6811!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A6YeN5paw6Lev5LqU5q61NTY26Jmf!5e0!3m2!1szh-TW!2stw!4v1762422187905!5m2!1szh-TW!2stw",//嵌入的
  googleLink: "https://maps.app.goo.gl/KETVp1wohKdoXMWW8",//導航網址
  phone: "02-2995-8666",
  fbLink: "https://www.facebook.com/newtaipeinext/",
  fbMessage: "https://m.me/newtaipeinext/",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "國巨投資股份有限公司"],
    ["園藝景觀", "大漢設計工程有限公司"],
    ["企劃銷售", "得邦廣告股份有限公司"],
    ["建築設計", "陳朝雄建築師事務所"],
    ["坪數規劃", "20-44坪"],
    ["結構安全", "永安結構技師事務所"],
  ],
  gtmCode: ["GTM-WH55GPZV"],// 可放置多個 
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "立即預約",
    subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    // subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
  },
  // 底下2個 沒項目就會隱藏
  // 控制固定板的新欄位
  // room_type: ["兩房","三房"],
  selectFields: {
    room_type: {
      title: "需求房型",
      hold: "請選擇房型",
      option: ["2房", "3房", "4房"],
      bypass: false,
    },
    budget: {
      title: "購屋預算",
      hold: "請選擇區間",
      option: ["1600-2000萬", "2000-2500萬", "2500萬以上",],
      //bypass: false, //必填開啟使用
    },
  },

  navList: [
    {
      name: "璽寓核心",
      target: ".s2",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "尊榮捷境",
      target: ".s3",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "制霸機能",
      target: ".s4",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "名匠薈萃",
      target: ".s5",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "榮耀四冠",
      target: ".s6",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "重大建設",
      target: ".s7",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "菁英磁場",
      target: ".s8",
      offset: "-60",
      offsetmo: "0",
    }, {
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
    , {
      name: "立即預約",
      target: ".order",
      offset: "",
      type: 'btn'
    },
    /*
*/
  ],
}