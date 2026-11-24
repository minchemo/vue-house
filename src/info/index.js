const caseName = "豐秀大境"

export default {
    caseid: "10de2364-633a-4991-b149-4aba5646ff47",
    // caseid_j: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx", // 不同時才需要開啟
    //case_code: "zhsd", //某些舊案資料庫要單獨設定名稱
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新北市新店區北宜路一段60號1F",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.2941331564143!2d121.53610269214659!3d24.956105467571483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34680148cc5a6579%3A0xd30582faab2b44ee!2z6LGQ56eA5aSn5aKD5o6l5b6F5Lit5b-D!5e0!3m2!1szh-TW!2stw!4v1795504984879!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/wP58uXcAA5Nfgyvi7",
    phone: "02-2915-9797",
    fbLink: "https://www.facebook.com/PlentyLand/",
    fbMessage: "https://m.me/PlentyLand/",
    line: "https://lin.ee/pNsK1vE",// 客戶加賴
    caseName: caseName,
    houseInfos: [/*
        ["投資興建", "鵬程建設股份有限公司"],
        ["投資興建", "良昱建設股份有限公司"],
        ["建照號碼", "113土建字第XXXXX號"],
        ["行銷企劃", "XX國際地產行銷"],
        ["經 紀 人", "XXX (112)新北經字第004095號"],*/
    ],
    gtmCode: ["GTM-W69C8322",], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    // recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
        subTitle_mo: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 控制表單欄位
    //性別
    formConfig: {
        gender: {
            enabled: false,
            required: false //必填開啟使用
        }
    },
    //各種欄位
    selectFields: {
        room_type: {
            title: "需求房型",
            type: "select",
            hold: "請選擇房型",
            option: ["二房", "三房"],
            required: false, //必填開啟使用
        },
        /*
        budget: {
          title: "購屋預算",
          type: "select",
          hold: "請選擇區間",
          option: ["2388~2588萬","2688~2888萬"],
          required: false, //必填開啟使用
        },
        use_type: {
          title: "使用用途",
          type: "select",
          hold: "請選擇用途",
          option: ["自住", "投資", "租賃"],
          required: false,
        },
        */
    },
    //縣市地區
    locationConfig: {
        city: {
            enabled: true,
            required: false
        },
        area: {
            enabled: true,     // ⚠️ 不能單獨 true
            required: false
        }
    },

    navList: [
        {
            name: "未來複利",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "交通複利",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "科技複利",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "健康複利",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "知識複利",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "核心複利",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "品牌複利",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        }, {
            name: "建築複利",
            target: ".s10",
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