const caseName = "宏璟青雲"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "土城區青雲路336巷30號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d4059.6169086360005!2d121.45657242813198!3d24.976061114862343!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDU4JzM0LjQiTiAxMjHCsDI3JzI3LjgiRQ!5e0!3m2!1szh-TW!2stw!4v1699258462437!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/xg5P7Y9mBxJz6g197",
    phone: "02-2263-1888",
    fbLink: "https://www.facebook.com/61551474076594",
    fbMessage: "https://m.me/61551474076594",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "宏璟建設股份有限公司"],
        ["建築設計", "廖錦盈建築師事務所"],
        ["工程營照", "福華工程股份有限公司"],
        ["建照號碼", "107土建字第00092號"],
        ["廣告銷售", "立都廣告企業有限公司"],
        ["經紀人", "林志龍"],
        ["經紀人字號", "（97）北縣字第001735號"],
        
        
    ],
    gtmCode: ["GTM-5CCR4GLZ"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["兩房","三房","四房","其他"],
    budget: ["1000~1500萬","1500~2000萬","2000~2500萬","2500~3000萬","3000~5000萬","5000萬以上"],

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