const caseName = "艾美綠河"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市梧棲區建國北街31巷158號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14728.68466696281!2d120.2933703140734!3d22.647405930223364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e04f0a93c64a9%3A0x5df6f456aa9d2987!2zODA36auY6ZuE5biC5LiJ5rCR5Y2A5Y2a5oSb5LiA6LevMjE46Jmf!5e0!3m2!1szh-TW!2stw!4v1685326637556!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/ZPxzNsXB4AuxLE918",
    phone: "04-26562089",
    fbLink: "https://www.facebook.com/100090655188296",
    fbMessage: "https://m.me/100090655188296",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "麗寶集團-麗盛建設"],
        ["建築設計", "陳明偉建築師 "],
        ["使照號碼", "109中都使字第01065號等2個"],
        ["行銷企劃", "海沃創意行銷"],
    ],
    gtmCode: ["GTM-WD38SWD"], // 可放置多個
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
            name: "微笑歐洲",
            target: ".s1",
            offset: "",
        },{
            name: "10大看點",
            target: ".s3",
            offset: "",
        },{
            name: "大墅人生",
            target: ".s4",
            offset: "",
        },{
            name: "機能在手",
            target: ".s6",
            offset: "",
        },{
            name: "港灣錢潮",
            target: ".s7",
            offset: "",
        },{
            name: "麗寶承諾",
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
              target: ".google-map",
              offset: "",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".contact",
            offset: "",
            type: 'btn'
        },
    ],
    
}