const caseName = "聽心苑"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "基地位置",//按鈕區的--- 如空白會只呈現地址
    address2: "基地位置",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台南市新化區民治路118號旁",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3671.7359694178344!2d120.3042367!3d23.0334647!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e71549d115cbd%3A0x6df379363589201b!2z6IG95b-D6IuR!5e0!3m2!1szh-TW!2stw!4v1692685565026!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/zhyCYWhL7pLf4zQ96",
    phone: "06-5902882",
    fbLink: "https://www.facebook.com/100064188570295",
    fbMessage: "https://m.me/100064188570295",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "仁邦建設開發股份有限公司"],
        ["建築設計", "技聯組工程顧問股份有限公司"],
        ["景觀設計", "太研規劃設計顧問有限公司"],
        ["基地面積", "259.17坪"],
        ["建照號碼", "(112)南工造字第02406號"],
        ["公設設計", "Whiteground 白本設計"],
        ["燈光設計", "OuDe light 偶得設計"],
        ["格局規劃", "全三房"],
    ],
    gtmCode: ["GTM-K22W633T"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    navList: [{
            name: "繁華核心",
            target: ".s2",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "國際視野",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "大師美學",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "汲光之居",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "立即來電",
            target: ".contact-info",
            offset: "0",
            offsetmo: "1",
            type: "btn",
        },
        {
              name: "地圖導航",
              target: ".gmap",
              offset: "-60",
              offsetmo: "1",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".order",
            offset: "-70",
            offsetmo: "1",
            type: 'btn'
        },
        /**/
    ],
    
}