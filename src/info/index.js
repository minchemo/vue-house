const caseName = "吉晟賦"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待會館", //按鈕區的--- 如空白會只呈現地址
  address2: "接待會館", //map點下確認的--- 如空白會顯示"導航地址"
  address: "新北市三重區仁安街108號",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11808.600935752811!2d121.48721360705572!3d25.081881778877694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a996954dab69%3A0x5d2bf7f40b960a90!2zMjQx5paw5YyX5biC5LiJ6YeN5Y2A5LuB5a6J6KGXMTA46Jmf!5e0!3m2!1szh-TW!2stw!4v1721554559833!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/jZjs8ha5YMmqaEeh8",
  phone: "02-8282-8088",
 // fbLink: "",
 // fbMessage: "",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "吉晟建設股份有限公司"],
    ["建築規劃", "李浩原建築師事務所"],
    ["企劃行銷", "聯安房屋開發有限公司"],
    ["不動產經紀人", "(99)北市經證字第00731號"],
    ["建照號碼", "110重建字第00161號"],
    ["樓層規劃", "地上12樓，地下3層"],
    ["規劃戶數", "63戶住家、5戶店面"],
    ["基地面積", "329坪"],
    ["公設比例", "約35.1%"],

  ],
  gtmCode: ["GTM-TNHNNFWL"], // 可放置多個
  recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "預約賞屋",
    subTitle:
      "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
  },
  //底下2個 沒項目就會隱藏
  room_type: ["兩房", "三房"],
  budget: ["1500-2000萬", "2000-2500萬", "2500-3000萬", "3000-3500萬"],
  navList: [
    {
      name: "集賢大道",
      target: ".s2",
      offset: "",
    },
    {
      name: "雙線捷運",
      target: ".s3",
      offset: "",
    },
    {
      name: "五大商圈",
      target: ".s5",
      offset: "",
    },
    {
      name: "五座公園",
      target: ".s6",
      offset: "",
    },
    {
      name: "三所校園",
      target: ".s7",
      offset: "",
    },
    {
      name: "雋永建築",
      target: ".s8",
      offset: "",
    },
    {
      name: "立即賞屋",
      target: ".s9",
      offset: "",
    },
  ],
}
