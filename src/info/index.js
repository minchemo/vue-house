const caseName = "幸福享享"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待會館", //按鈕區的--- 如空白會只呈現地址
  address2: "接待會館", //map點下確認的--- 如空白會顯示"導航地址"
  address: "基地位置 ： 新北市五股區成泰路三段577巷80弄",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3612.9209227911615!2d121.44703847608012!3d25.104538035446268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442af5710818a97%3A0x18727b576af8c5a8!2zMjQ45paw5YyX5biC5LqU6IKh5Y2A5oiQ5rOw6Lev5LiJ5q61NTc35be3ODDlvIQ!5e0!3m2!1szh-TW!2stw!4v1715504464377!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/9Ctw16YUxc5qEm156",
  phone: "02-2293-0808",
  fbLink: "",
  fbMessage: "",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "茂德建設股份有限公司"],
    ["公設景觀", "待提供"],
    ["產品規劃", "地上15層/地下5層，111 戶"],
    ["建築營造", "待提供"],
    ["建築外觀", "高仲廷建築師事務所"],
  ],
  gtmCode: ["GTM-WGDV7JR5"], // 可放置多個
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "預約賞屋",
    subTitle: "",
  },
  //底下2個 沒項目就會隱藏
  room_type: ["兩房", "三房", "店面", "其他"],
  budget: [],
  navList: [
    {
      name: "國家級副都心",
      target: ".s2",
      offset: "",
    },
    {
      name: "清溪川首排",
      target: ".s31",
      offset: "",
    },
    {
      name: "雙大道樞紐",
      target: ".s32",
      offset: "",
    },
    {
      name: "副都心的驚嘆號",
      target: ".s4",
      offset: "",
    },
    {
      name: "藝術融入生活",
      target: ".s5",
      offset: "",
    },
    {
      name: "國際頂級精工",
      target: ".s52",
      offset: "",
    },
    {
      name: "立即預約",
      target: ".order",
      offset: "",
      type: "btn",
    },
  ],
}
