const caseName = "豐邑匯禮"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市林口區文化二路二段60號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d319.4039860888177!2d121.37767826797482!3d25.080066366496027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a6e7e572c369%3A0x8028d3b6800b1a1b!2zMjQ05paw5YyX5biC5p6X5Y-j5Y2A5paH5YyW5LqM6Lev5LqM5q61NjDomZ8!5e0!3m2!1szh-TW!2stw!4v1726813097945!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/76GcShMYFqgQCvB76",
    phone: "02-26022345",
    fbLink: "https://www.facebook.com/61560974341225/",
    fbMessage: "https://m.me/61560974341225/",
    caseName: caseName,
  houseInfos: [
    ["投資興建", "興富謙建設股份有限公司"],
    ["建築規劃", "曾聰憲建築師事務所 曾聰憲"],
    ["外觀設計", "元佑設計 李志成"],
    ["園藝景觀", "元佑設計 李志成"],
    ["坪數規劃", "104-105坪"],
    ["企劃銷售", "得邦廣告"],
    ["結構安全", "冠偉工程顧問 陳冠銘"],
    ["建照號碼", "112林建字00159號"],
    ["經  紀  人", "鍾佩儒(108)桃市經字第001714號"],
  ],
  gtmCode: ["GTM-5TGPZ8R5"], // 可放置多個
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
    room_type: [],
    budget: [],
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
