const caseName = "清景麟長勝"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台南市新營區金華路二段282號(隔壁)",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3664.2613488514044!2d120.29530227379603!3d23.306274605684493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e85d529c6fa85%3A0x59e69a54dace07b8!2zNzMw5Y-w5Y2X5biC5paw54ef5Y2A6YeR6I-v6Lev5LqM5q61Mjgy6Jmf!5e0!3m2!1szh-TW!2stw!4v1685288845074!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/P8An6DZ5ugQVZDQ6A",
    phone: "06-6026333",
    fbLink: "https://www.facebook.com/100084318365743",
    fbMessage: "https://m.me/100084318365743",
    caseName: caseName,
    houseInfos: [
      ["投資興建", "XXX"],
        ["產品規劃", "XXX"],
     //   ["建築代銷", "上揚國際建築團隊"],
         /* ["公設設計", ""],
        ["景觀設計", ""],
        ["燈光設計", ""],
        ["基地面積", ""],
        ["格局規劃", ""],*/
    ],
    gtmCode: ["GTM-PKH9LVK6"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["兩房","三房","四房","店面"],
    //budget: ["1000萬以下","1000~1500萬","1500~2000萬","2000~2500萬","2500~3000萬","3000~5000萬","5000萬以上"],
    navList: [{
            name: "區域空拍",
            target: ".s2",
            offset: "0",
            offsetmo: "0",
        },{
            name: "新營爆發力",
            target: ".s4",
            offset: "0",
            offsetmo: "0",
        },{
            name: "外觀",
            target: ".s6",
            offset: "0",
            offsetmo: "0",
        },{
            name: "建材規格",
            target: ".s7",
            offset: "0",
            offsetmo: "0",
        },{
            name: "公設",
            target: ".s8",
            offset: "0",
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