const caseName = "文華苑"

export default {
  meta: {
    title: caseName,
    description: caseName,
    keywords: caseName,
  },
  address1: "接待會館", //按鈕區的--- 如空白會只呈現地址
  address2: "接待會館", //map點下確認的--- 如空白會顯示"導航地址"
  address: "新北市新莊區中原路101號對面",
  googleSrc:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.3968571642185!2d121.45341507611329!3d25.05453483746298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAzJzE2LjMiTiAxMjHCsDI3JzIxLjYiRQ!5e0!3m2!1szh-TW!2stw!4v1701853096132!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/izBcPxPhYjCMDFjV9",
  phone: "02-2279-1188",
  fbLink: "https://www.facebook.com/61554320400557",
  fbMessage: "https://m.me/61554320400557",
  caseName: caseName,
  houseInfos: [
    ["建築規劃", "中德建設股份有限公司"],
    ["建築設計", "高仲廷建築師事務所 高仲廷"],
    ["園藝景觀", "瀚鼎設計"],
    ["坪數規劃", "20-28坪"],
    ["企劃銷售", "得邦廣告"],
    ["結構安全", "永安結構顧問 吳志強"],
    ["公設大廳", "呈境設計 袁世賢"],
    ["結構工程", "永安結構技師事務所 吳志強"],
    ["房型規劃", "2-3房"],
  ],
  gtmCode: ["GTM-WGDV7JR5"], // 可放置多個
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "我想了解",
    subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
  },
  //底下2個 沒項目就會隱藏
  room_type: ["兩房", "三房", "店面", "其他"],
  budget: [
    "1500-1800萬",
    "1800-2000萬",
    "2000-2200萬",
    "2200-2500萬",
    "2500萬以上",
  ],
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
