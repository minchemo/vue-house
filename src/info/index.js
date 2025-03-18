const caseName = "國泰13期"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待中心", //按鈕區的--- 如空白會只呈現地址
  address2: "接待中心", //map點下確認的--- 如空白會顯示"導航地址"
  // address: "待提供",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.8306269183545!2d120.6674858!3d24.1425856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d0ed9a2796b%3A0x4acf8c43e71cdd1a!2z6bqX5pmo5bu66Kit!5e0!3m2!1szh-TW!2stw!4v1733905506117!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/t1HoEMUrd7NvPAfXA",
  // phone: "04-3705-8658",
  fbLink: "//facebook.com/cathayredprod/",
  fbMessage: "//m.me/cathayredprod/",
  caseName: caseName,
  houseInfos: [
    /* */
    ["基地位置", "樂富五街龍富一街交叉口"],
    ["投資興建", "國泰建設"],
    ["企劃行銷", "創意家行銷"],
  ],
  gtmCode: ["GTM-T6CZVTGJ"], // 可放置多個
  recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "RESERVATION",
    subTitle:
      "若想了解建案資訊歡迎填寫表單或來電查詢，<br>我們將由專人為您服務，謝謝",
  },
  //底下2個 沒項目就會隱藏
   room_type: [/*"三房","四房"*/],
   budget: ["國泰世華銀行","國泰人壽"],
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
   /* {
      name: "崗石別墅",
      target: ".anchor8",
      offset: "",
    }, */
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
