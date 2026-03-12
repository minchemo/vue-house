const caseName = "春陽沄集"

export default {
    caseid: "d8fe067d-8064-4a5c-9c54-3444fde66b68",
    // case_code: "wsys",
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "屏東縣內埔鄉勝利路650號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.862050175205!2d120.55723177628218!3d22.62162603116982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e22e8da6432f3%3A0xb53a058c50bb71a2!2zOTEy5bGP5p2x57ij5YWn5Z-U6YSJ5Yud5Yip6LevNjUw6Jmf!5e0!3m2!1szh-TW!2stw!4v1773281500673!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/cbEZc3dhpk175f948",
    phone: "08-7788760",
    fbLink: "https://www.facebook.com/61588580858859",
    fbMessage: "https://m.me/61588580858859",
    line: "https://lin.ee/jX9Xyhz",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "百春陽建設股份有限公司"],
        ["建築設計", "李季岡建築師事務所"],
        ["企劃銷售", "自售"],
        ["使用執照", "(115)屏府城管使(內)字第00145-00159號"],
    ],
    gtmCode: ["GTM-P49QXNXC"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        //subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
    },
    //底下2個 沒項目就會隱藏
    selectFields: {
        room_type: {
            title: "需求房型",
            hold: "請選擇房型",
            option: ["套房", "兩房", "三房"],
            bypass: false,
        },
        budget: {
            title: "購屋預算",
            hold: "請選擇區間",
            option: ["1000-1500萬", "1500-2000萬", "2000-2500萬", "2500-3000萬"],
            //bypass: true, //必填開啟使用
        },
    },

    navList: [{
        name: "最強增值",
        target: ".s4",
        offset: "-60",
        offsetmo: "0",
    }, {
        name: "一橋北市",
        target: ".s3",
        offset: "-60",
        offsetmo: "0",
    }, {
        name: "兩代共融",
        target: ".s6",
        offset: "-60",
        offsetmo: "0",
    }, {
        name: "水岸人生",
        target: ".s7",
        offset: "-60",
        offsetmo: "0",
    }, {
        name: "房貸瘦身",
        target: ".s5",
        offset: "-60",
        offsetmo: "0",
    }, {
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
        , {
        name: "立即預約",
        target: ".order",
        offset: "",
        type: 'btn'
    },
    ],

}