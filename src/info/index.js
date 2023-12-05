const caseName = "國鉅興"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市泰山區莊田路62號旁",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3614.7386475651856!2d121.441041!3d25.042942000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDAyJzM0LjYiTiAxMjHCsDI2JzI3LjgiRQ!5e0!3m2!1szh-TW!2stw!4v1701229487342!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/QAfcXRMRzPv5pP5J7",
    phone: "02-2296-7799",
    fbLink: "https://www.facebook.com/100094458446747",
    fbMessage: "https://m.me/100094458446747",
    caseName: caseName,
    houseInfos: [
        /*
        */
        ["投資興建", "國鉅機構"],
        ["建築設計", "黃永興建築師"],
        ["建照號碼", "112泰建字第00306號"],
        ["行銷企劃", "澄品廣告"],
        ["經紀人", "陳佳享（112）新北經字第004521號"],
    ],
    gtmCode: ["GTM-MTSV7QCR"], // 可放置多個
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
    room_type: ["兩房","三房"],
    //budget: ["1000萬以下","1000~1500萬","1500~2000萬","2000~2500萬","2500~3000萬","3000~5000萬","5000萬以上"],

    navList: [{
            name: "區域環境",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "職人團隊",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "精品御所",
            target: ".s10",
            offset: "60",
            offsetmo: "0",
        },{
            name: "科技靚宅",
            target: ".s11",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "品質保證",
            target: ".s12",
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