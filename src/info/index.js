const caseName = "天好運3"
export default {
    caseid: "592c1522-ab1f-4c54-99f2-f02c4ae1a428",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市土城區科技路27號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.178339549067!2d121.42242759999999!3d24.9600463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681d00580a232d%3A0xb6aa67a9366e82db!2z5aSp5aW96YGLMw!5e0!3m2!1szh-TW!2stw!4v1767664041150!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/oNpJMsMVCxAxvoBg9",
    phone: "02-2268-8765",
    fbLink: "https://www.facebook.com/100057418720587/",
    fbMessage: "https://m.me/100057418720587/",
    // line: "https://lin.ee/VOzO2Sx",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "福美國際建設x永京建設"],
        ["建照號碼", "114土建字第00319號"],
        ["行銷企劃", "海沃創意行銷"],
        ["經 紀 人", "周美秀(90)嘉縣字第00016號"],
        /*
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],投資興建｜福美國際建設x永京建設
建照號碼｜114土建字第00319號
行銷企劃｜海沃創意行銷
經紀人｜周美秀(90)嘉縣字第00016號
        */
    ],
    gtmCode: ["GTM-PHJZS3QV"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
        //  subTitle_mo: "歡迎預約，將有專人與您聯絡<br>我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
            title: "需求房型",
            hold: "請選擇房型",
            option: ["兩房", "三房"],
            //bypass:false,
        },
        budget: {
            title: "購屋預算",
            hold: "請選擇區間",
            option: ["1000萬內", "1000-1500萬", "1500-2000萬"],
            //bypass:false,
        },
        //budget: {
        //  title: "購屋預算",
        //  hold: "請選擇區間",
        //  option: ["1600-2000萬", "2000-2500萬", "2500萬以上"],
        //  bypass:false, //必填開啟使用
        //},
        /*
        use_type: {
          title: "使用用途",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"]
      },
        */
    },

    navList: [
        {
            name: "天選美地",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "八達交通",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "好運機能",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "鴻運建築",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "質選建材",
            target: ".s10",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "立即來電",
            action: "phone",
            offset: "",
            type: 'btn'
        }, {
            name: "地圖導航",
            action: "gmap",
            offset: "",
            type: "btn",
        }, {
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
    ],
} 