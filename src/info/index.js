const caseName = "梓園NEXT"

export default {
    caseid: "4af555cf-93db-4f2a-8dc5-555f2169b8b3",
// caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
  // case_code: "test", //某些舊案資料庫要單獨設定名稱
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
  address2: "",//map點下確認的--- 如空白會顯示"導航地址"
  address: "臺北市南港區忠孝東路七段539號",
  googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7281.820200933396!2d120.68387568670232!3d24.13979509349411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34693d004316b727%3A0x6ae5ff5117070033!2z6bqX5a-2QUNFIOm1rOeoi-WPsOS4reaZuuWMr-e4vemDqA!5e0!3m2!1szh-TW!2stw!4v1787539205034!5m2!1szh-TW!2stw",
  googleLink: "https://maps.app.goo.gl/",
  phone: "02-2788-1999",
    fbLink: "https://www.facebook.com/61578977057760/",
    fbMessage: "https://m.me/61578977057760/",
  // line: "https://lin.ee/88Y9fk9",
  caseName: caseName,
  houseInfos: [
    ["投資興建", "梓園建設股份有限公司"],
    ["建築規劃", "邱聖幃建築師事務所"],
    ["營造工程", "宏偉營造股份有限公司（甲級）"],
    ["結構顧問", "宏偉營造股份有限公司（甲級）"],
    ["建照號碼", "（114）汐建字第00326號"],
    ["企劃銷售", "忠勝行銷有限公司"],
    ["經&ensp;紀&ensp;人", "羅尹辰"],
    ["經紀人證號", "（115）北市字第01943號"],
   /*投資興建
鵬程建設股份有限公司
行銷企劃
海沃創意行銷
    ["建照號碼", "xxx"],
     ["經&ensp;紀&ensp;人", "xxx"],
    ["建築設計", "xxx"],
    ["使照號碼", "xxx"],
    ["行銷企劃", "xxx"],*/
    /*
    */
  ],
    gtmCode: ["GTM-KDXX3P9J"], // 可放置多個
    recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "如果您需要預約，可點選下方聯絡方式"
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
   /* company: {
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
        "51-100坪",
        "101-150坪",
        "151-300坪",
        "301-600坪",
        "600坪以上"
      ],
      required: false, //必填開啟使用
    },
    */
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
    {
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
      name: "預約賞屋",
      target: ".order",
      offset: "",
      type: 'btn'
    }
  ],
}