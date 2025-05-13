const caseName = "福泰侘"

export default {
    caseid: "fbc4d7d7-9864-44b7-9b27-56f4197b637f",
    case_code: "futai",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "大園科一街171號（大園國中旁）",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3614.37358204022!2d121.1707325!3d25.0553241!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468274ab208439d%3A0x612c2e8076cad70e!2zMzM35qGD5ZyS5biC5aSn5ZyS5Y2A56eR5LiA6KGXMTcx6Jmf!5e0!3m2!1szh-TW!2stw!4v1731304962970!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/rVrCb53SgNPQYjAw7",
    phone: "03-3842666",
    fbLink: "https://www.facebook.com/61567038103972/?",
    fbMessage: "https://m.me/61567038103972/?",
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
    gtmCode: ["GTM-WZMP4MCX"], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！"
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

    navList: [{
            name: "未來光景",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "發展脈動",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "未來生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "多元生活",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "淡淡芬芳",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "居住堅韌",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "細節守護",
            target: ".s9",
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