const caseName = "展志縱橫時代"

export default {
    caseid: "ecaae525-3875-4bf9-9dac-fde123650294",
    case_code: "zhsd",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "桃園區昆明路與樹林四街口（同基地位置)",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.4653026281558!2d121.31112527607773!3d24.98430044028975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f0051a653f7%3A0x46981af0a5f5d47f!2z57ix5qmr5pmC5Luj56S-5Y2ALeWxleW_l-W7uuiorQ!5e0!3m2!1szh-TW!2stw!4v1779270251776!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/iGWaWzZjev6FjhHM6",
    phone: "03-364-2277",
    fbLink: "https://www.facebook.com/61565182162397",
    fbMessage: "https://m.me/61565182162397",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "展志建設開發股份有限公司"],
        ["建築設計", "李俊利建築師事務所"],
        ["行銷企劃", "錦盒建築行銷有限公司"],
        ["建照號碼", "(111)桃市都建執照字第會桃00148-01號"],
        ["基地位置", "桃園區昆明路與樹林四街口"],
    ],
    gtmCode: ["GTM-TLNH82HB","GTM-5BP5WN26"], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["三房"],
          bypass:false,
        },
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["2388~2588萬","2688~2888萬"],
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
        {
            name: "縱橫未來",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "三心六線",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "舊城新生",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "三鐵共構",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "繁華時尚",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "香榭綠馥",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "展志品牌",
            target: ".s8",
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