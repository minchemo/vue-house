const caseName = "和彩吉翔"

export default {
  caseid: "50d0972d-079c-4fc4-8840-167e228edefa",
  //case_code: "dgm1",
  address1: "",//按鈕區的--- 如空白會只呈現地址
  address2: "",//map點下確認的--- 如空白會顯示"導航地址"
  address: "",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.4778349491326!2d121.5309497760775!3d24.98387434030678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34680203afde0fd5%3A0xcb35a451dcd660a7!2zMjMx5paw5YyX5biC5paw5bqX5Y2A5Lit5q2j6LevNTAxLTjomZ8!5e0!3m2!1szh-TW!2stw!4v1749523868318!5m2!1szh-TW!2stw",//嵌入的
  googleLink: "",//導航網址
  phone: "",
  fbLink: "https://www.facebook.com/100054446832848/",
  fbMessage: "https://m.me/100054446832848/",
  caseName: caseName,
  houseInfos: [
    /*
    */
    ["投資興建", "和彩開發股份有限公司"],
    ["營造公司", "億東營造股份有限公司"],
    ["產品規劃", "地上12層／地下2層／2-3房"],
    ["行銷公司", "森鴻行銷有限公司"],
  ],
  gtmCode: ["GTM-NM43DCPN"], // 可放置多個
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "立即預約",
    subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    // subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
  },
  // 底下2個 沒項目就會隱藏
  // 控制固定板的新欄位
  // room_type: ["兩房","三房"],
  selectFields: {
    room_type: {
      title: "需求房型",
      hold: "請選擇房型",
      option: ["2房", "3房", "4房"],
      bypass: false,
    },
    budget: {
      title: "購屋預算",
      hold: "請選擇區間",
      option: ["900-1000萬", "1100-1200萬", "1300-1400萬", "1500萬以上",],
      //bypass: false, //必填開啟使用
    },
  },

  navList: [
    {
      name: "璽寓核心",
      target: ".s2",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "尊榮捷境",
      target: ".s3",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "制霸機能",
      target: ".s4",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "名匠薈萃",
      target: ".s5",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "榮耀四冠",
      target: ".s6",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "重大建設",
      target: ".s7",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "菁英磁場",
      target: ".s8",
      offset: "-60",
      offsetmo: "0",
    }, {
      name: "立即來電",
      target: ".contact-info",
      offset: "",
      type: 'btn'
    },
    {
      name: "地圖導航",
      target: ".gmap",
      offset: "",
      type: "btn",
    }
    , {
      name: "立即預約",
      target: ".order",
      offset: "",
      type: 'btn'
    },
    /*
*/
  ],
}