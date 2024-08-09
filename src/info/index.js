const caseName = "豐邑匯禮"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待會館", //按鈕區的--- 如空白會只呈現地址
  address2: "接待會館", //map點下確認的--- 如空白會顯示"導航地址"
  address: "預約中心：台中市南屯區大墩四街",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1214.9967870706419!2d120.64580839435475!3d24.140971623727467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693db90f3dfca5%3A0xa0567d3c723f2e66!2zNDA45Y-w5Lit5biC5Y2X5bGv5Y2A5aSn5aKp5Zub6KGX!5e0!3m2!1szh-TW!2stw!4v1723163166445!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/vVjfVxjX6hs9kbxs6",
  phone: "04-22580988",
  fbLink: "",
  fbMessage: "",
  caseName: caseName,
  houseInfos: [["", ""]],
  gtmCode: ["GTM-TNHNNFWL"], // 可放置多個
  recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "我想了解",
    subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
  },
  //底下2個 沒項目就會隱藏
  room_type: ["兩房", "三房"],
  budget: ["1500-2000萬", "2000-2500萬", "2500-3000萬", "3000-3500萬"],
  navList: [
    {
      name: "金質品牌",
      target: ".s2",
      offset: "",
    },
    {
      name: "五星標竿",
      target: ".s3",
      offset: "",
    },
    {
      name: "國際七期",
      target: ".s5",
      offset: "",
    },
    {
      name: "城心地段",
      target: ".s6",
      offset: "",
    },
    {
      name: "繁華精彩",
      target: ".s7",
      offset: "",
    },
    {
      name: "鮮氧體會",
      target: ".s8",
      offset: "",
    },
    {
      name: "名匠之作",
      target: ".s9",
      offset: "",
    },
    {
      name: "立即預約",
      target: ".order",
      offset: "",
      isOrder: true,
    },
  ],
}
