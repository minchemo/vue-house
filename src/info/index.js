const caseName = "鼎藏豐碩"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待會館", //按鈕區的--- 如空白會只呈現地址
  address2: "接待會館", //map點下確認的--- 如空白會顯示"導航地址"
  address: "106台北市大安區四維路224號",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.2500848914024!2d121.54784339999998!3d25.0255857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa2df0760619%3A0xbdf6704d03c7e685!2zMTA25Y-w5YyX5biC5aSn5a6J5Y2A5Zub57at6LevMjI06Jmf!5e0!3m2!1szh-TW!2stw!4v1719792452436!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/RXj4c8BaRWAc2J2p9",
  phone: "02-2707-9988",
  fbLink: "",
  fbMessage: "",
  caseName: caseName,
  houseInfos: [
  ],
  gtmCode: ["GTM-TNHNNFWL"], // 可放置多個
  recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "CONTACT US",
    subTitle: "",
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
