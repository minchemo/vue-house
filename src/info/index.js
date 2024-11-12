const caseName = "富科大苑"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待中心", //按鈕區的--- 如空白會只呈現地址
  address2: "接待中心", //map點下確認的--- 如空白會顯示"導航地址"
  address: "高雄市楠梓區芎林一街196號",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.2275586031965!2d120.32715317603095!3d22.750794826414317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0e3a8d104035%3A0xd900026850cca572!2zODEx6auY6ZuE5biC5qWg5qKT5Y2A6IqO5p6X5LiA6KGXMTk26Jmf!5e0!3m2!1szh-TW!2stw!4v1731266725508!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/jGQisT6Uv3CKMHrC7",
  phone: "07-352-2333",
   // fbLink: "",
   // fbMessage: "",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "禾森事業&永盈建設"],
    ["廣告代銷", "富裕臻實業有限公司"],
    ["基地面積", "290.89坪"],

  ],
  gtmCode: ["GTM-KRZ397T3"], // 可放置多個
  recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "我想了解",
    subTitle:
      "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
  },
  //底下2個 沒項目就會隱藏
  room_type: ["兩房", "三房"],
  budget: [],
  navList: [
    {
      name: "連結橋科",
      target: ".anchor1",
      offset: "",
    },
    {
      name: "四大天王",
      target: ".anchor2",
      offset: "",
    },
    {
      name: "北高科技",
      target: ".anchor3",
      offset: "",
    },
    {
      name: "速度共構",
      target: ".anchor4",
      offset: "",
    },
    {
      name: "軌道經濟",
      target: ".anchor5",
      offset: "",
    },
    {
      name: "健康環抱",
      target: ".anchor6",
      offset: "",
    },
    {
      name: "優質學風",
      target: ".anchor7",
      offset: "",
    },
    {
      name: "崗石別墅",
      target: ".anchor8",
      offset: "",
    },
    {
      name: "雙強聯手",
      target: ".anchor9",
      offset: "",
    },
    {
      name: "品牌建材",
      target: ".anchor10",
      offset: "",
    },
  ],
}
