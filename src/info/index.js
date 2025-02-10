const caseName = "鴻儀臻城"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "彰化縣竹塘鄉竹林路一段174號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.8788527051615!2d120.42910990000001!3d23.858435300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346eb35c3d74426b%3A0xccfd57d206ecab8!2zNTI15b2w5YyW57ij56u55aGY6YSJ56u55p6X6Lev5LiA5q61MTc06Jmf!5e0!3m2!1szh-TW!2stw!4v1738895268980!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/jfcFo2TREfyvW4JZ6",
    phone: "04-8970857",
    fbLink: "https://www.facebook.com/100083195897306/",
    fbMessage: "https://m.me/100083195897306/",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "鴻儀建設"],
        ["建築設計", "黃妙禎建築師"],
        ["建照號碼", "(113)府建管(建)字第0327885號"],
        ["行銷企劃", "海沃創意行銷"],
        ["經紀人", "黃靖雯"],
    ],
    gtmCode: ["GTM-KBJH3CSX"], // 可放置多個
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
    room_type: ["4房","5房"],
    //budget: ["1000萬以下","1000~1500萬","1500~2000萬","2000~2500萬","2500~3000萬","3000~5000萬","5000萬以上"],

    navList: [{
            name: "就業臻方便",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "生活臻便捷",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "漫翠臻樂活",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通臻便利",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "學區臻卓越",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "鴻儀臻誠意",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "建材臻用心",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳承臻幸福",
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