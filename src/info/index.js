const caseName = "成大之森"
export default {
    caseid: "1d2db7f2-157b-4a33-acbc-f4abfde91846",
   //case_code: "csl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    //address: "000",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7226.915786208114!2d121.4393011!3d25.0863568!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a7004e1a2e15%3A0x9f6429d44cf95b57!2z6bWs56iL6LGQ6aalIOaOpeW-heS4reW_gw!5e0!3m2!1szh-TW!2stw!4v1761534781180!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/",
    phone: "06-2370888",
    fbLink: "https://www.facebook.com/ForestofAspiration/",
    fbMessage: "https://m.me/ForestofAspiration/",
    // line: "https://lin.ee/FTYKISC",
    caseName: caseName,
    houseInfos: [
      /*    ["投資建設", "鵬程建設股份有限公司"],
        ["建照號碼", "110股建字第00368-01號"],
        ["企劃表現", "欣和地產股份有限公司"],
      ["行銷企劃", "自建自售"],
      */
    ],
    gtmCode: ["GTM-KGPCM5TH"], // 可放置多個
    // recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我要預約",
        //subTitle: "敬獻菁英的專屬品味｜2-3房｜高感精工宅"
    },
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
        option: ["1000萬-1500萬", "1501萬-2000萬", "2001萬以上"],
        bypass:false, //必填開啟使用1000萬-1500萬、1501萬-2000萬、2001萬以上
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