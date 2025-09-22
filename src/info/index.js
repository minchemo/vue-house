const caseName = "國家公園"

export default {
    caseid: "f2da1585-59f8-4d5f-9190-9825f8efb3ad",
    //case_code: "cjl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市小港區松金里松園六路123號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7368.49467639778!2d120.36437874463134!3d22.569850791565685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1d0ab7391117%3A0x5465493064c089b4!2z5riF5pmv6bqf5ZyL5a625YWs5ZySIOaOpeW-heacg-mkqA!5e0!3m2!1szh-TW!2stw!4v1756891908806!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/NwCdwBtNKx9998yq5",
    phone: "07-8018000",
    fbLink: "https://www.facebook.com/107608068785783/",
    fbMessage: "https://m.me/107608068785783/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "清景麟資產有限公司"],
        ["工程營造", "力洋營造"],
        ["建築設計", "大磊建築師事務所"],
        ["燈光設計", "旭川光禾照明設計"],
        ["公設設計", "盼達創意事業"],
        ["基地面積", "約2180坪"],
        ["房型規劃", "2-3房"],
        ["企劃銷售", "上揚國際實業股份有限公司"],
    ],
    gtmCode: ["GTM-KLF25LBV","GTM-MQRTZPS","GTM-M87MK5M"], // 可放置多個
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
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
       {
            name: "重大建設",
            target: ".s3",
            offset: "",
        },{
            name: "公園特區",
            target: ".s4",
            offset: "",
        },{
            name: "生活機能",
            target: ".s5",
            offset: "",
        },{
            name: "制震地標",
            target: ".s6",
            offset: "",
        },{
            name: "會館公設",
            target: ".s7",
            offset: "",
        },{
            name: "加值服務",
            target: ".s8",
            offset: "",
        },{
            name: "選書合作",
            target: ".s9",
            offset: "",
        },{
            name: "誠意保固",
            target: ".s10",
            offset: "",
        },{
            name: "國際建材",
            target: ".s10",
            offset: "",
        },
    ],
}