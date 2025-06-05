const caseName = "都匯天地"

export default {
    caseid: "a40fbc82-32dc-4886-af8f-20ace8a7e2fe",
    //case_code: "test",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市新莊區富貴路．中華路三段路口",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7359.266492949288!2d120.3097038172106!3d22.74186923554725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjLCsDQ0JzMwLjciTiAxMjDCsDE4JzUzLjUiRQ!5e0!3m2!1szh-TW!2stw!4v1725006447269!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/eLWxyc2yPaKc228G9",
    phone: "02-8522-7337",
    fbLink: "https://www.facebook.com/100082950231720/",
    fbMessage: "https://m.me/100082950231720/",
    caseName: caseName,
    houseInfos: [
        /*
        ["空間設計", "相即空間設計"],
        ["企劃銷售", "低碳健康樂活行銷"],
        ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
        ["經紀人", "(91)北市經證字第00692號 陳子瑞"], 
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],
        */
    ],
     gtmCode: ["GTM-T54BQ9W2"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["兩房", "三房"],
          bypass:false,
        },
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["1600-2000萬", "2000-2500萬", "2500萬以上"],
          bypass:false, //必填開啟使用
        },
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