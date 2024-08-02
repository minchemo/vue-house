const caseName = "國源可頌"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "桃園市桃園區青溪二路115號", //隱藏這條 地址地圖消失
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.914616676359!2d121.31107540000001!3d25.003017099999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34681f3bd5e6cb4b%3A0xf5f4e303be168c16!2z5ZyL5rqQ5bu66Kit5bCP5qqc5rqq!5e0!3m2!1szh-TW!2stw!4v1722397883294!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/93fdvCUtyHW5aSeu9",
    phone: "02-2888-5888", 
    fbLink: "https://www.facebook.com/",
    fbMessage: "https://m.me/",
    caseName: caseName,
    houseInfos: [
        /*
        ["投資興建", "國源建設股份有限公司"],
        ["建築設計", "蔡廷芳建築師事務所"],
        ["基地面積", "614.13坪"],
        ["建照號碼", "（110）桃市都建執照字第會桃01003號"],
        ["公設設計", "沐橙設計有限公司"],
        ["基地位於", "桃園市桃園區日光路、青溪二路口"],
        ["格局規劃", "2房、3房"],
        */
    ],
    gtmCode: ["GTM-00000"], // 可放置多個
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我想了解",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
        //subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["兩房","三房"],
    //  budget: ["2000萬以下","2000-2500萬","2500-3000萬","3000萬以上"],

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