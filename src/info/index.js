const caseName = "三景三錦"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待會館",//按鈕區的--- 如空白會只呈現地址
    address2: "接待會館",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市鳳山區國泰路二段13巷6號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0114573400842!2d120.34940707630585!3d22.616047331374592!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1b51d5101915%3A0x342883cd9e436cbf!2zODMw6auY6ZuE5biC6bOz5bGx5Y2A5ZyL5rOw6Lev5LqM5q61MTPlt7c26Jmf!5e0!3m2!1szh-TW!2stw!4v1710121953279!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/mRqw51WXNyyUpKcZ8",
    phone: "07-763-0999",
    fbLink: "https://www.facebook.com/61556786833263",
    fbMessage: "https://m.me/61556786833263",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "自冠建設"],
        ["建築設計", "原東聯合建築師事務所"],
        ["使照號碼", "(112)高工使字第.02450號"],
        ["建設公司", "自售"],
    ],
    gtmCode: ["GTM-TR3R56SJ"], // 可放置多個
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
    room_type: ["四房","其他"],
    budget: ["3000-3500萬","3600-4200萬"],
    navList: [
        {
            name: "千億建設",
            target: ".s3",
            offset: "",
        },{
            name: "軌道鍍金",
            target: ".s4",
            offset: "",
        },{
            name: "綠富生活",
            target: ".s5",
            offset: "",
        },{
            name: "書香名門",
            target: ".s6",
            offset: "",
        },{
            name: "實力深蘊",
            target: ".s7",
            offset: "",
        },{
            name: "別墅名作",
            target: ".s8",
            offset: "",
        },{
            name: "精品建材",
            target: ".s9",
            offset: "",
        },{
            name: "樣品屋",
            target: ".s10",
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