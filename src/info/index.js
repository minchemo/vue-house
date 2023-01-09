const caseName = "國家公園"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address: "高雄市小港區高松路99號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3684.169379283246!2d120.3695737!3d22.5727675!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e1ce91aa1fd53%3A0x83cf196d40691da9!2zODEy6auY6ZuE5biC5bCP5riv5Y2A6auY5p2-6LevOTnomZ8!5e0!3m2!1szh-TW!2stw!4v1673292846156!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/PY57vKgt72k726ng7",
    phone: "07-360-0033",
    fbLink: "",
    fbMessage: "",
    caseName: caseName,
    houseInfos: [
        ["投資興建", "清景麟資產有限公司"],
        ["工程營造", "力洋營造"],
        ["建築設計", "大磊建築師事務所"],
        ["燈光設計", "旭川光禾照明設計"],
        ["公設設計", "盼達創意事業"],
        ["基地面積", "約2180坪"],
        ["房型規劃", "2-3房"],
        ["企劃銷售", `<img class="w-full" src="${new URL(`../section/form/comp.png`, import.meta.url).href}">`],
    ],
    gtmCode: ["GTM-MKGNRHW"], // 可放置多個
    recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC",
    // recaptcha_site_key_v2: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", //testkey
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "",
    },
    navList: [{
            name: "沁心丰景",
            target: ".s2",
            offset: "",
        },
        {
            name: "轉瞬繁華",
            target: ".s3",
            offset: "",
        },
        {
            name: "水岸至美",
            target: ".s4",
            offset: "",
        },
        {
            name: "建築品牌",
            target: ".s5",
            offset: "",
        },
        {
            name: "格局規劃",
            target: ".s6",
            offset: "",
        },
        
    ],
}