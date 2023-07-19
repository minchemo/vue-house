const caseName = "微笑歐洲"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市梧棲區建國北街31巷158號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3637.800898233423!2d120.5306116!3d24.2487415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34691569a3de9af9%3A0x83cfbf71cb2093bb!2z6bqX55ubLeW-rueskeatkOa0sg!5e0!3m2!1szh-TW!2stw!4v1689321806178!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/wkjqMvf9LVWwjuF99",
    phone: "04-26562089",
    fbLink: "https://www.facebook.com/lihshingsmileeurope",
    fbMessage: "https://m.me/lihshingsmileeurope",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "麗寶集團-麗盛建設"],
        ["建築設計", "陳明偉建築師 "],
        ["使照號碼", "109中都使字第01065號等2個"],
        ["行銷企劃", "海沃創意行銷"],
    ],
    gtmCode: "GTM-KZ6H36GQ", // 可放置多個
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