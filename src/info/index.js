const caseName = "東基M1"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "預約中心",//按鈕區的--- 如空白會只呈現地址
    address2: "導航地址",//map點下確認的--- 如空白會顯示"導航地址"
     address: "新店區中正路501-8號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3616.4774949616485!2d121.53354069999999!3d24.983885899999994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34680319f5b9f925%3A0x6b200f6f3222f28!2z5p2x5Z-6TTHmjqXlvoXkuK3lv4M!5e0!3m2!1szh-TW!2stw!4v1745996030885!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/XDm6n7BFrqFHSH7E9",
    phone: "02-8667-2266",
    fbLink: "https://www.facebook.com/100054446832848/",
    fbMessage: "https://m.me/100054446832848/",
    caseName: caseName,
    houseInfos: [
        /*
        ["投資興建", "中德建設"],
        ["營造公司", "承優營造"],
        ["建築執照", "(112)高市工建築使字第01079號"],
        ["企劃銷售", "得邦廣告"],
        ["樓層規劃", "地上15層、地下4層"],
        ["房型規劃", "2-3房、21~35坪"],
        */
    ],
    gtmCode: ["GTM-KQ46V36N"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        //title: "預約增值",
       // subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
       // subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    // ctime: ["上午","下午","晚上","皆可"],//連絡時段
    // use_type: ["自住","投資","二代置產","換屋"],//購屋用途
    room_type: ["1房","2房","3房","4房"],//需求房型
    budget: ["1500-2000萬","2000-2500萬","2500-3000萬","3000-3500萬","3500-4000萬","4000萬以上",],//購屋預算

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