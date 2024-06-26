const caseName = "協勝大聚"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "接待中心",//map點下確認的--- 如空白會顯示"導航地址"
    address: "新竹縣竹北市文興路二段2號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7243.256439264223!2d121.02758189084733!3d24.80818104725497!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34683655383ab73d%3A0x419ad0738a8278f3!2zMzAy5paw56u557ij56u55YyX5biC5paH6IiI6Lev5LqM5q61MuiZnw!5e0!3m2!1szh-TW!2stw!4v1717751317733!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/xBSKbeKYndXGpRte9",
     phone: "03-590-5588",
    fbLink: "https://www.facebook.com/61558478311163/",
    fbMessage: "https://m.me/61558478311163/",
    caseName: caseName,
    houseInfos: [
        ["工程營造", "洛城營造有限公司"],
        ["建築設計", "曾聰憲建築師事務所"],        
        ["規劃戶數", "住家121戶・店面9戶・<br>車位137平面車位"],
        ["坪數規劃", "2+1房 (30坪)・3房(36坪)・<br>4房(46坪)・店面(17-52坪)"],        
        ["樓層規劃", "地上15層/地下2層"],
        ["企劃銷售", "新智力廣告有限公司"],
    ],
    gtmCode: ["GTM-MN3GRRP6"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "若想了解更多資訊，歡迎填寫表單或來電洽詢，將由專人為您服務，謝謝！",
        subTitle_mo: "若想了解更多資訊，歡迎填寫表單或來電洽詢<br>將由專人為您服務，謝謝！",  
        /*  */
    },
    // 底下2個 沒項目就會隱藏
    room_type: ["兩房","三房","四房","店面"],
   // budget: ["1500-2000萬","2001-3000萬","3001-4000萬","4001-5000萬","5000萬以上"],
    navList: [
        {
            name: "聚 特區",
            target: ".s3",
            offset: "0",
            offsetmo: "0",
        },{
            name: "聚 大境",
            target: ".s4",
            offset: "0",
            offsetmo: "0",
        },{
            name: "聚 文風",
            target: ".s5",
            offset: "0",
            offsetmo: "0",
        },{
            name: "聚 綠境",
            target: ".s6",
            offset: "0",
            offsetmo: "0",
        },{
            name: "聚 團隊",
            target: ".s7",
            offset: "0",
            offsetmo: "0",
        },{
            name: "聚 精工",
            target: ".s9",
            offset: "0",
            offsetmo: "0",
        },{
            name: "聚 空間",
            target: ".s10",
            offset: "0",
            offsetmo: "0",
        }
    ],
}