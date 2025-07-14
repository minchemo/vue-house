const caseName = "微笑巨蛋"

export default {
    caseid: "1d2db7f2-157b-4a33-acbc-f4abfde91846",
    case_code: "test",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "0000",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.3098394683584!2d121.45248950000001!3d25.0574855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a965069393e1%3A0x3f4f54588cc81ac7!2z5ZyL546L5aSn6YGTS0lORyBQQVJL5o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1748616767788!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/",
    phone: "0000",
    fbLink: "https://www.facebook.com/",
    fbMessage: "https://m.me/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "XX興業股份有限公司"],
        ["工程營造", "XX營造有限公司"],
        ["建築設計", "XX建築師事務所"],
        ["公設規劃", "XX設計有限公司"],
        ["外觀設計", "XX設計有限公司"],
        ["景觀規劃", "XX園藝工程有限公司"],
        ["企劃設計", "海沃創意行銷"],
        /*["投資興建", "長昇事業夥伴 冠奕建設"],
        ["建築設計", "王朝雍建築師事務所"],
        ["工程營造", "又廣營造"],
        ["空間設計", "相即空間設計"],
        ["企劃銷售", "低碳健康樂活行銷"],
        ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
        ["經紀人", "(91)北市經證字第00692號 陳子瑞"], 
        */
    ],
    gtmCode: ["GTM-0000"], // 可放置多個
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        // subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        // subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
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
          option: ["1000", "2000", "3000"],
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
        },{
            name: "水岸生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英學區",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "安心品牌",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "電梯店墅",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "嚴選建材",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳家首席",
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
    */
    ],
}