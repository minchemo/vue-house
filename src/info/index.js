const caseName = "梓園NEXT"
export default {
    //caseid: "76ba5df2-d3a5-4d7d-8e41-ee1d8128a3e4",
    caseid: "4af555cf-93db-4f2a-8dc5-555f2169b8b3",
   //case_code: "csl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "臺北市松山區民權東路3段181號2樓",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3614.1874332013117!2d121.54416325252252!3d25.061635595178924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1755050513229!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/",
    phone: "0000000",
    fbLink: "https://www.facebook.com/61578977057760/",
    fbMessage: "https://m.me/61578977057760/",
    caseName: caseName,
    houseInfos: [
        ["投資建設", "梓園建設股份有限公司"],
        ["企劃銷售", "忠勝行銷有限公司"],
       // ["建照執照", "XXX"],
        // ["經&ensp;紀&ensp;人", "ＯＯＯ（114）新北經字第00138138號"], 
        /*
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],
        */
    ],
    gtmCode: ["GTM-000"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "如果您需要預約，可點選下方聯絡方式"
    },
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
    /* 
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