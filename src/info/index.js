const caseName = "家河大陳"

export default {
  caseid: "1087f36a-f31d-4048-b6c2-91c418118f00",
 // caseid_j: "1d2db7f2-157b-4a33-acbc-f4abfde91846", //兩邊id一樣可以不用有
  address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
  address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
  address: "新北市永和區永和路二段46號",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.6894714433797!2d121.51221757644582!3d25.01066553922868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a9e9e5a1ba85%3A0x4b1c028428aaef7b!2zMjM05paw5YyX5biC5rC45ZKM5Y2A5q2j6IiI6YeM5rC45ZKM6Lev5LqM5q61NDbomZ8!5e0!3m2!1szh-TW!2stw!4v1782441359655!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/aFxeedWKAYfXgSmX8",
  phone: "02-29205858",
  fbLink: "https://www.facebook.com/61590298962464",
  fbMessage: "https://m.me/61590298962464",
  // line: "https://lin.ee/qakWswp",
  caseName: caseName,
  houseInfos: [/*
    ["空間設計", "相即空間設計"],
    ["企劃銷售", "低碳健康樂活行銷"],
    ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
    ["經紀人", "(91)北市經證字第00692號 陳子瑞"],
    ["建築設計", "弘憲聯合建築師事務所"],
    ["使照號碼", "王朝雍建築師事務所"],
    ["行銷企劃", "自售"],*/
    /*
    */
  ],
  gtmCode: ["GTM-5SSVH742"], // 可放置多個
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "立即預約",
  },
  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: true,     // ✅ 控制顯示 / 隱藏
      required: false    // ✅ 是否必填（通常不會必填）
    }
  },
  //各種欄位
  selectFields: {
    room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["兩房", "三房"],
      required: true, //必填開啟使用
    }, 
    /*
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["1000", "2000", "3000"],
          //bypass:true, //必填開啟使用
        },
       
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
  },
  //縣市地區
  locationConfig: {
  city: {
    enabled: true,
    required: false
  },
  area: {
    enabled: true,     // ⚠️ 不能單獨 true
    required: false
  }
},

  navList: [
    /*
    {
        name: "雙核心地段",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "交通中軸",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    }
*/
  ],
}