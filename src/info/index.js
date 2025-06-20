const caseName = "白隅"

export default {
    caseid: "bfdced19-9d39-4c6d-9937-e9cb269790ab",
    case_code: "baiyu",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新竹高鐵站旁-竹北市光明六路東二段𝟔𝟐𝟏號𝟏𝐅",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3621.565489465441!2d121.03909047607384!3d24.810327947260433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3468370702ee5af1%3A0xcc53171ee49a30a2!2zMzAy5paw56u557ij56u55YyX5biC5YWJ5piO5YWt6Lev5p2x5LqM5q61NjIx6Jmf!5e0!3m2!1szh-TW!2stw!4v1747623184689!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/GgrzHuBa1C4Nrj5VA",
    phone: "𝟎𝟑-𝟓𝟓𝟎-𝟕𝟎𝟓𝟖",
    addressB: "高雄橋頭經武路𝟏𝟐𝟑號(橋新七路口)",
    googleSrcB: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.6349749530204!2d120.31233307603084!3d22.741805026746068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0fb4ab02c94d%3A0xadecbd88e4709140!2zODI16auY6ZuE5biC5qmL6aCt5Y2A57aT5q2m6LevMTIz6Jmf!5e0!3m2!1szh-TW!2stw!4v1747623230184!5m2!1szh-TW!2stw",
    googleLinkB: "https://maps.app.goo.gl/oF95FWHyFFQuj7Nn9",
    phoneB: "𝟎𝟕-𝟔𝟏𝟏-𝟖𝟑𝟑𝟑",
    fbLink: "https://www.facebook.com/61564328289468",
    fbMessage: "https://m.me/61564328289468",
    caseName: caseName,



    houseInfos: [
       /* ["新竹據點", "新竹高鐵站旁-<br>竹北市光明六路東二段𝟔𝟐𝟏號𝟏𝐅"],
        ["新竹專線", "03-5507058"],
        ["高雄據點", "高雄橋頭經武路𝟏𝟐𝟑號(橋新七路口)"],
        ["高雄專線", "07-611-8333"],*/
        ["投資興建", "興連城開發_興華城建設"],
        ["建築設計", "原東聯合建築師事務所"],
        ["行銷企劃", "允城國際事業"],
        /*
        ["空間設計", "相即空間設計"],
        ["企劃銷售", "低碳健康樂活行銷"],
        ["建照號碼", "(111)桃市都建執照字第會德00701-02號"],
        ["經紀人", "(91)北市經證字第00692號 陳子瑞"], 
        ["建築設計", "弘憲聯合建築師事務所"],
        ["使照號碼", "王朝雍建築師事務所"],
        ["行銷企劃", "自售"],
        */
    ],
    gtmCode: ["GTM-M7JZ2ZK2","GTM-NWNTDCWZ"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
   // room_type: ["兩房","三房"],
   // budget: [" "],
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