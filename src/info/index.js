const caseName = "國家公園"

export default {
    meta: {
        title: caseName,
        description: caseName,
        keywords: caseName,
    },
    address: "高雄市小港區高松路99號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1842.0860368320316!2d120.36925000000001!3d22.572666700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x56bbb594d965c250!2zMjLCsDM0JzIxLjYiTiAxMjDCsDIyJzA5LjMiRQ!5e0!3m2!1szh-TW!2stw!4v1673336378815!5m2!1szh-TW!2stw",
    googleLink: "https://goo.gl/maps/WZGwT3xyTRfk61To6",
    phone: "07-360-0033",
    fbLink: "https://www.facebook.com/107608068785783/",
    fbMessage: "https://m.me/107608068785783/",
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
    gtmCode: ["GTM-MQRTZPS","GTM-M87MK5M"], // 可放置多個
    recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC",
    // recaptcha_site_key_v2: "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI", //testkey
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
        subTitle: "",
    },
    navList: [{
            name: "重大建設",
            target: ".s3",
            offset: "",
        },{
            name: "公園特區",
            target: ".s4",
            offset: "",
        },{
            name: "生活機能",
            target: ".s5",
            offset: "",
        },{
            name: "制震地標",
            target: ".s6",
            offset: "",
        },{
            name: "會館公設",
            target: ".s7",
            offset: "",
        },{
            name: "加值服務",
            target: ".s8",
            offset: "",
        },{
            name: "選書合作",
            target: ".s9",
            offset: "",
        },{
            name: "誠意保固",
            target: ".s10",
            offset: "",
        },{
            name: "國際建材",
            target: ".s10",
            offset: "",
        },
    ],
}