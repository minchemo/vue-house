const caseName = "春陽逸居"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市大社區翠屏路84巷1號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14719.817077410187!2d120.34122582685178!3d22.7299410639108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e102c3a255555%3A0xa07256fb8afd1692!2zODE16auY6ZuE5biC5aSn56S-5Y2A56We6L6y6YeM57-g5bGP6LevODTlt7cx6Jmf!5e0!3m2!1szh-TW!2stw!4v1780626742542!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/8dfeK6PwfKfCm3wk9",
    phone: "07-352-1660",
    fbLink: "https://www.facebook.com/61567278457423/",
    fbMessage: "https://m.me/61567278457423/",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "百春陽建設股份有限公司"],
        ["建築設計", "林子森林伯諭聯合建築師事務所"],
        ["格局規劃", "2-3房"],
        ["建築代銷", "宸鈞地產"],
        /*
        ["格局規劃", "xxx"],
        ["空間設計", "相即空間設計"],
        ["企劃銷售", "低碳健康樂活行銷"],
        ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
        ["經紀人", "(91)北市經證字第00692號 陳子瑞"], 
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],"gtm-
5R729NRG"
        */
    ],
    gtmCode: ["GTM-5R729NRG","GTM-M58NRV56"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
      //  subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
       // subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    // room_type: ["兩房","三房","其他"],
    room_type: ["兩房","三房","四房"],
    budget: ["1000萬以下","1000~1500萬","1500~2000萬","2000~3000萬","3000萬以上"],
    ctime: ["上午","下午","晚上","皆可"],
   // use_type: [" "],

    navList: [
        /*
        {
            name: "雙核心地段",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通中軸",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "水岸生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英學區",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "安心品牌",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "電梯店墅",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "嚴選建材",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳家首席",
            target: ".s10",
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
    */
    ],
}