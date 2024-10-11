const caseName = "微笑雲朵"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "雲林縣斗六市中正路216號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.236786877387!2d120.54459399999998!3d23.703236799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346ec83dda9a4249%3A0x99a875329f001549!2zNjQw6Zuy5p6X57ij5paX5YWt5biC5Lit5q2j6LevMjE26Jmf!5e0!3m2!1szh-TW!2stw!4v1727419349998!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/UeWxH4orsE4985zc7",
    phone: "05-566-0588",
    fbLink: "https://www.facebook.com/61556636163046",
    fbMessage: "https://m.me/61556636163046",
    line: "https://lin.ee/jX9Xyhz",
    caseName: caseName,
    houseInfos: [
     /*   ["投資興建", "茂群國際投資有限公司"],
        ["建築設計", "曾聰憲建築師"],
        ["結構設計", "林慶榮結構技師"],
        ["工程營造", "笙泰營造"],
        ["企劃銷售", "欣和地產股份有限公司"],
        ["使用執照", "110重使字第00336號"],*/
    ],
    gtmCode: ["GTM-MCP2RFPF"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
     //   subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    //底下2個 沒項目就會隱藏
    room_type: ["套房","2房","3房"],
    budget: ["1000-1500萬","1500-2000萬","2000-2500萬","2500-3000萬"],
    
    navList: [{
        name: "最強增值",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "一橋北市",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "兩代共融",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "水岸人生",
        target: ".s7",
        offset: "-60",
        offsetmo: "0",
    },{
        name: "房貸瘦身",
        target: ".s5",
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