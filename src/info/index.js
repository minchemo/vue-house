const caseName = "豐秀大境"

export default {
    caseid: "2dcbcbc2-2afa-4a21-9349-85b3a1b3f2d8",
    //case_code: "zhsd",
    address1: "接待中心",
    //按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "桃園市新屋區中山東路二段777號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3617.0858794291444!2d121.1466186!3d24.9631926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468245d3e4ab351%3A0xdec61165b606235!2zMzI35qGD5ZyS5biC5paw5bGL5Y2A5Lit5bGx5p2x6Lev5LqM5q61Nzc36Jmf!5e0!3m2!1szh-TW!2stw!4v1770194713805!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/tJR6QnPxEVGVTStk6",
    phone: "03-490-5553",
    fbLink: "https://www.facebook.com/profile.php?id=61579968897663",
    fbMessage: "https://m.me/61579968897663/",
    line: "https://lin.ee/eVsJqdc",// 客戶加賴
    caseName: caseName,
    houseInfos: [
        ["起造興建", "和創建設有限公司"],
        ["建築設計", "張金城建築師事務所"],
        ["建照照號", "113桃市都建執照字第會屋01379號"],
        ["樓層規劃", "地上5層"],
        ["樓層規劃", "2房2衛|電梯寓所"],
        ["企劃行銷", "鴻智廣告有限公司"],
        ["經 紀 人", "陳怡靜 (104)新北經字第000884號"],
        ["銷售中心地址", "桃園市新屋區中山東路二段777號"],
    ], /**/
    gtmCode: ["GTM-12345678",], // 可放置多個

    recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    // recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3

    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",


    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
        subTitle_mo: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    //  表單欄位
    // room_type: ["兩房", "三房"],
    selectFields: {
        /*
        room_type: {
            title: "需求房型",
            hold: "請選擇房型",
            option: ["二房", "三房"],
            bypass: false,
        },
       
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["2388~2588萬","2688~2888萬"],
          bypass:false, //必填開啟使用
        },
   
     use_type: {
       title: "使用用途",
       hold: "請選擇用途",
       option: ["自住", "投資", "租賃"]
     },
     */
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