const caseName = "鼎藏豐碩"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待會館", //按鈕區的--- 如空白會只呈現地址
  address2: "接待會館", //map點下確認的--- 如空白會顯示"導航地址"
  address: "新北市三重區集賢路178號",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1806.701293540884!2d121.48361761952808!3d25.08822997145983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af2cbc45ada1%3A0xc13f77e1195a6499!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A6ZuG6LOi6LevMTc46Jmf!5e0!3m2!1szh-TW!2stw!4v1718649252199!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/Q1gvgJLwNt8GvhaY8",
  phone: "02-2857-7711",
  fbLink: "https://www.facebook.com/p/61557568696152/",
  fbMessage: "https://m.me/61557568696152/",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "築億建設、恆坤實業、昱陽開發、金建菖投資"],
    ["產品規劃", "地上15層/地下5層，99 戶 "],
    ["建築設計", "九騰建築師事務所、秦境建築師事務所"],
    ["工程營造", "興澤營造股份有限公司"],
  ],
  gtmCode: ["GTM-TNHNNFWL"], // 可放置多個
  recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "預約賞屋",
    subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
  },
  //底下2個 沒項目就會隱藏
  room_type: ["兩房25～27坪", "三房35～36坪"],
  budget: ["1500-2000萬", "2000-2500萬", "2500-3000萬", "3000-3500萬"],
  navList: [
    {
      name: "三重地王",
      target: ".s2",
      offset: "",
    },
    {
      name: "一橋北市",
      target: ".s3",
      offset: "",
    },
    {
      name: "雙捷百米",
      target: ".s4",
      offset: "",
    },
    {
      name: "共榮發展",
      target: ".s5",
      offset: "",
    },
    {
      name: "萬坪公園",
      target: ".s6",
      offset: "",
    },
    {
      name: "名校匯聚",
      target: ".s7",
      offset: "",
    },
    {
      name: "德國精品",
      target: ".s9",
      offset: "",
    },
    {
      name: "建築視覺",
      target: ".s10",
      offset: "",
    },
    //{
    //  name: "質感公設",
    //  target: ".s11",
    //  offset: "",
    //},
    {
      name: "立即預約",
      target: ".order",
      offset: "",
      type: "btn",
    },
  ],
}
