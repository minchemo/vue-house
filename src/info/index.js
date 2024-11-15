const caseName = "佳瓚鹿瓚"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台中市沙鹿區鎮南路二段&南斗路口", //隱藏這條 地址地圖消失
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3638.7009377030636!2d120.56832638437805!3d24.21725150000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346915000d39a495%3A0x3688d6f5b4322214!2z5L2z55Oa6bm_55OaLeaOpeW-heacg-mkqA!5e0!3m2!1szh-TW!2stw!4v1731574149001!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/6sto7n6JyckM34Ye6",
    phone: "04-26566600",  //隱藏電話
    fbLink: "//facebook.com/61568301731210",
    fbMessage: "//m.me/61568301731210",
    caseName: caseName,
    houseInfos: [
        ["投資興建　　", "佳瓚建設股份有限公司"],
        ["建築執照　　", "111中都建字第02524號"],
        ["企劃銷售　　", "富麗廣告有限公司"],
        ["不動產經紀人", "鄭吟君（105）新北經字第003223號"],
        /*
        */
    ],
    gtmCode: ["GTM-TQJMNDSQ"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "歡迎預約，將有專人與您聯絡，我們將竭誠為您服務",
        //subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["兩房","三房","店面"],
    budget: ["800-1000萬","1000-1200萬","1200-1400萬","1400-1600萬","1600萬以上"],
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