// const caseName = "片片山閑"
const caseName = "000"

export default {
    caseid: "1d2db7f2-157b-4a33-acbc-f4abfde91846",
    case_code: "test",
  address1: "接待中心", //按鈕區的--- 如空白會只呈現地址
  address2: "接待中心", //map點下確認的--- 如空白會顯示"導航地址"
  address: "台中市南屯區大業路二段556號5F-A",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3640.059411178104!2d120.63789919999998!3d24.169649099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d0008cc0f7b%3A0xe8d89c35b82548fe!2z6bqX5pmo54mH54mH5bGx6ZaR!5e0!3m2!1szh-TW!2stw!4v1743988058447!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/BXMMRBUkqkv5moNu7",
  phone: "04-2255-8788",
  fbLink: "//facebook.com/61552769816381",
  fbMessage: "//m.me/61552769816381",
  caseName: caseName,
  houseInfos: [
    /*
    ["投資興建", "禾森事業&永盈建設"],
    ["廣告代銷", "富裕臻實業有限公司"],
    ["基地面積", "290.89坪"],
    */
  ],
  gtmCode: ["GTM-55MNP39V"], // 可放置多個
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "預約賞屋",
    subTitle:
      "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
  },

   selectFields: {
    reservation_date: {
      title: "連絡時段",
      hold: "請選擇時段",
      option: ["09:00-12:00","12:00-14:00","14:00-19:00","全天可聯絡"],
      bypass:false, //必填開啟使用
    },
    room_type: {
      title: "需求房型",
      hold: "請選擇房型",
      option: ["兩房", "三房"],
      bypass:false,
    },
    budget: {
      title: "購屋預算",
      hold: "請選擇區間",
      option: ["2500-3000萬","3000-3500萬","3500-4000萬"],
      bypass:false, //必填開啟使用
    },
},


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
