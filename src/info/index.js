const caseName = "佳瓚大賀"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    // address1: "基地位置",//按鈕區的--- 如空白會只呈現地址
    // address2: "基地位置",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市梧棲區四維中路・四維西路口",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14549.766282686254!2d120.5253988091313!3d24.261302693629446!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346914b67268ebd7%3A0x228c0d49a75733dd!2zNDM16Ie65Lit5biC5qKn5qOy5Y2A5Zub57at6KW_6LevICYg5Zub57at5Lit6Lev!5e0!3m2!1szh-TW!2stw!4v1695282916118!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/co8cjYkNHdmvheYF9",
    phone: "04-2656-3111",
    fbLink: "https://www.facebook.com/",
    fbMessage: "https://m.me/",
    caseName: caseName,
    houseInfos: [
       /* ["投資興建", ""],
        ["建照號碼", ""],
        ["建築設計", ""],
        ["公設設計", ""],
        ["景觀設計", ""],
        ["燈光設計", ""],
        ["基地面積", ""],
        ["格局規劃", ""],*/
    ],
    gtmCode: ["GTM-WBVL46WZ"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        // subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    navList: [{
            name: "區域空拍",
            target: ".s2",
            offset: "",
        },{
            name: "市心商圈",
            target: ".s3",
            offset: "",
        },{
            name: "就業聚落",
            target: ".s4",
            offset: "",
        },{
            name: "文化商圈",
            target: ".s6",
            offset: "",
        },{
            name: "公園首排",
            target: ".s7",
            offset: "",
        },{
            name: "建材規格",
            target: ".s8",
            offset: "",
        },{
            name: "房型規劃",
            target: ".s9",
            offset: "",
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
   
    /* */
}