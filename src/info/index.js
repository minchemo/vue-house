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
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1818.7253289806445!2d120.533941!3d24.2609851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691552554e63ed%3A0xe0ad475a1e77c2ad!2z5L2z55Oa5aSn6LOA!5e0!3m2!1szh-TW!2stw!4v1695885134646!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/zw7XMhKHTkvBYbHw6",
    phone: "04-2656-3111",
    fbLink: "https://www.facebook.com/61551670328744",
    fbMessage: "https://m.me/61551670328744",
    caseName: caseName,
    houseInfos: [
      ["投資興建", "佳瓚建設"],
        ["行銷企劃", "富田廣告"],
        ["產品規劃", "2-4房"],
         /* ["公設設計", ""],
        ["景觀設計", ""],
        ["燈光設計", ""],
        ["基地面積", ""],
        ["格局規劃", ""],*/
    ],
    gtmCode: ["GTM-WBVL46WZ","GTM-P8K5GNZG"], // 可放置多個
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
            offset: "-60",
            offsetmo: "0",
        },{
            name: "市心商圈",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "就業聚落",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "文化商圈",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "公園首排",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "建材規格",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "房型規劃",
            target: ".s8",
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
   
    /* */
}