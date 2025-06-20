const caseName = "一功青"

export default {
    caseid: "d6e26da0-67e3-475f-a15d-ad199c16cce8",
    case_code: "yikung",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "鵬程東三路vs介壽路",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3678.489826005084!2d120.289203!3d22.784307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ3JzAzLjUiTiAxMjDCsDE3JzIxLjEiRQ!5e0!3m2!1szh-TW!2stw!4v1721979864766!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/Y3AsifGx63NWpNSQA",
    phone: "07-6267888",
    fbLink: "https://www.facebook.com/61562121533694/",
    fbMessage: "https://m.me/61562121533694/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "升鴻水電工程股份有限公司"],
        ["建築設計", "弘憲聯合建築師事務所"],
        ["企劃銷售", "上旺開發股份有限公司"],
        ["接待中心", "鵬程東三路vs介壽路"],
    ],
    gtmCode: ["GTM-WPMCT7FB"], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["兩房","三房"],
          bypass:false,
        },
        //budget: {
        //  title: "購屋預算",
        //  hold: "請選擇區間",
        //  option: ["1000", "2000", "3000"],
        //  bypass:true, //必填開啟使用
        //},
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
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