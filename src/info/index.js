const caseName = "大將長春"

export default {
  caseid: "a5ed763b-c183-4ef2-8703-fc7fef149571",
// caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
  // case_code: "test", //某些舊案資料庫要單獨設定名稱
  address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
  address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
  address: "台北市中山區長春路372號",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.39889597534!2d121.54285269999998!3d25.054465699999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abe7330ed55d%3A0x722eb865fe7fe6db!2zMTA0OTHoh7rljJfluILkuK3lsbHljYDlvqnoj6_ph4zplbfmmKXot68zNzLomZ8!5e0!3m2!1szh-TW!2stw!4v1787553224469!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/Bd2GDdxtXQZJMKRS7",
  phone: "02-8770-5588",
  fbLink: "https://www.facebook.com/61589706388074",  // 開關這個 跑版 contactInfo.vue css 有寫註解 改上排按鈕數
  fbMessage: "https://m.me/61589706388074",
  // line: "https://lin.ee/88Y9fk9",
  caseName: caseName,
  houseInfos: [
    ["坪數規劃", "18-52坪"],
    ["投資興建", "大將開發股份有限公司"],
    ["工程營造", "豐興營造"],
    ["建築規劃", "王克強建築師事務所"],
    ["公設設計", "美合設計"],
    ["建築行銷", "泰瑀行銷股份有限公司"],
    ["建照執照", "114建字第0013號"],
    ["經紀人", "(113)新北經字第004687號"],
   /*接待會館｜台北市中山區長春路372號
預約專線｜02-8770-5588
坪數規劃｜18-52坪
投資興建｜大將開發股份有限公司
工程營造｜豐興營造
建築規劃｜王克強建築師事務所
公設設計｜美合設計
建築行銷｜泰瑀行銷股份有限公司
建照執照｜114建字第0013號
經紀人｜(113)新北經字第004687號
    */
  ],
   gtmCode: ["GTM-M555LZ6L"], // 可放置多個
  recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
  //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
  //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
  recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
  recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
  order: {
    title: "立即預約",
    subTitle: "請輸入您的聯絡方式，我們將盡快請專人回覆，謝謝您!",
   // subTitle_mo: "將有專人與您聯絡，我們將竭誠為您服務",
  },
  // 控制表單欄位
  //性別
  formConfig: {
    gender: {
      enabled: true, 
      required: false //必填開啟使用
    }
  },
  //各種欄位
  selectFields: {
    
    room_type: {
      title: "需求房型",
      type: "select",
      hold: "請選擇房型",
      option: ["2房", "3房", "4房"],
      required: false,
      //apiB: "room_type" // B API 對應欄位
    },
    /*
    room_type: {
    title: "公司行號",
    type: "input",
    hold: "請填寫公司行號(公司名)",
    // option: ["上午", "下午", "晚上", "全天"],
    required: false,
    apiB: "room_type" // B API 對應欄位
  },
  budget: {
      title: "坪數需求",
      type: "select",
      hold: "請選擇區間",
      option: [
        "20-50坪",
        "51-100坪",
        "101-150坪",
        "151-300坪",
        "301-600坪",
        "600坪以上"
      ],
      required: false, //必填開啟使用
    },*/
  /* contact_time: {
    title: "聯絡時段",
    type: "select",
    hold: "請選擇時段",
    option: ["上午", "下午", "晚上", "全天"],
    required: false,
    apiB: "room_type" // B API 對應欄位
  },
 
    budget: {
      title: "購屋預算",
      type: "select",
      hold: "請選擇區間",
      option: [
        "1500-1700萬", 
        "1800-2000萬", 
        "2100-2300萬"
      ],
      required: false, //必填開啟使用
    }, 表單欄位樣式會同線上預約頁　補充欄位

公司行號(公司名)  

坪數需求(20-50 / 51-100 / 101-150 / 151-300 / 301-600 / 600坪以上)
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
   /* {
        name: "王牌計畫",
        target: ".s1",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "榮耀再現",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "王牌地段",
        target: ".s8",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "王牌團隊",
        target: ".s9",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "王牌總部",
        target: ".s10",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "王牌優勢",
        target: ".s13",
        offset: "-60",
        offsetmo: "0",
    }, {
      name: "立即來電",
      action: "phone",
      offset: "",
      type: 'btn'
    }, {
      name: "地圖導航",
      action: "gmap",
      offset: "",
      type: "btn",
    }, {
      name: "立即預約",
      target: ".order",
      offset: "",
      type: 'btn'
    }*/
  ],
}