const caseName = "謙里"
export default {
    caseid: "4c84cb47-b6b2-4c3a-a68e-3e59a14f1be8",
   //case_code: "csl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市后里區三豐路三段1080號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14544.451486716187!2d120.71196831741628!3d24.30769772085668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691aa34085f109%3A0x6f2ac81470ffe75a!2zNDIx5Y-w5Lit5biC5ZCO6YeM5Y2A5LiJ6LGQ6Lev5LiJ5q61MTA4MOiZnw!5e0!3m2!1szh-TW!2stw!4v1755848590741!5m2!1szh-TW!2stw",
    googleLink: "hhttps://maps.app.goo.gl/tNTo6rTh7QiPWuEZ7",
    phone: "0000000",
    fbLink: "https://www.facebook.com/61579396628225/",
    fbMessage: "https://m.me/61579396628225/",
    caseName: caseName,
    houseInfos: [
        ["投資建設", "詠砌建設股份有限公司"],
        ["建築設計", "賴恩常建築師事務所"],
        ["建照號碼", "114中都建字第00692號"],
        ["行銷企劃", "自建自售"],
       // ["建照執照", "XXX"],
        // ["經&ensp;紀&ensp;人", "ＯＯＯ（114）新北經字第00138138號"], 
        /*
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],
        */
    ],
    gtmCode: ["GTM-W93JX264"], // 可放置多個
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "五感生活．從容開啟",
        subTitle: "敬獻菁英的專屬品味｜2-3房｜高感精工宅"
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
    /* 
      budget: {
        title: "購屋預算",
        hold: "請選擇區間",
        option: ["1000", "2000", "3000"],
        bypass:true, //必填開啟使用
      },
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