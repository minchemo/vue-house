const caseName = "RiVER PARK"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    // address: "XXXX",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14456.713232321394!2d121.54841739999999!3d25.06194495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1szh-TW!2stw!4v1701074829535!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/gpLWXKGf8L4TAaaE6",
    // phone: "00-00000000",
    fbLink: "https://www.facebook.com/61551470159566/",
    fbMessage: "https://m.me/61551470159566",
    caseName: caseName,
    houseInfos: [
        /*
        */
        /*   ["投資興建", "漢皇開發股份有限公司"],
        ["行銷企劃", "創意家行銷股份有限公司"],
     ["建築設計", "XXX"],
        ["工程營照", "XX"],
        ["建照號碼", "XXX"],*/
        
        
    ],
    gtmCode: ["GTM-KD4NPGMM"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "服務諮詢",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["兩房","三房"],
    budget: ["1000-1999萬","2000-2999萬","3000-3999萬","4000-4999萬","5000-6000萬"],
    use_type: ["投資","自住","置產","贈與"],

    navList: [{
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
    ],
    
}