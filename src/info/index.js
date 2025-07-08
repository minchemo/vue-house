const caseName = "松陽馥麗"

export default {
    caseid: "e35e238b-6a62-4722-b340-a3a799ef3e58",
    //case_code: "zhsd",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市土城區中央路三段93號旁",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d760.3711699011237!2d121.43634903487587!3d24.967638101711515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU4JzAyLjciTiAxMjHCsDI2JzE0LjciRQ!5e0!3m2!1szh-TW!2stw!4v1751529969832!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/FPx9trbBsL5vFKcM8",
    phone: "02-2268-8388",
    fbLink: "https://www.facebook.com/61576581560017",
    fbMessage: "https://m.me/61576581560017/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "宸實建設股份有限公司"],
        ["建築設計", "周劍平建築師事務所"],
        ["建照號碼", "113土建字第00215號"],
        ["行銷企劃", "五率國際地產行銷"],
        ["經 紀 人", "何成英 (112)新北經字第004095號"],
    ],
    gtmCode: ["GTM-MKH2GFP3",], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
   // recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "複利未來 從一次預約展開",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    //selectFields: {
    //    room_type: {
    //      title: "需求房型",
    //      hold: "請選擇房型",
    //      option: ["三房"],
    //      bypass:false,
    //    },
    //    budget: {
    //      title: "購屋預算",
    //      hold: "請選擇區間",
    //      option: ["2388~2588萬","2688~2888萬"],
    //      bypass:false, //必填開啟使用
    //    },
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
  //},

    navList: [
        {
            name: "未來複利",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通複利",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "科技複利",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "健康複利",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "知識複利",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "核心複利",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "品牌複利",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "建築複利",
            target: ".s10",
            offset: "-60",
            offsetmo: "0",
        },{
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
        ,{
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
    ],
}