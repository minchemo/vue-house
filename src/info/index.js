const caseName = "昕暉景寬"

export default {
    caseid: "3ebb3c4d-367f-4d51-99c4-29925dccda17",
   //case_code: "csl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "台南市永康區公園路．永善路口",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14688.474453457598!2d120.250688!3d23.0194167!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e715b95f29ca9%3A0x2f4514d6a7753303!2z5piV5pqJ5pmv5a-s6Yq35ZSu5pyD6aSo!5e0!3m2!1szh-TW!2stw!4v1750833529520!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/gvif6Pzfa34TCkgi9",
    phone: "06-7031311",
    fbLink: "https://www.facebook.com/61553920125279/",
    fbMessage: "https://m.me/61553920125279/",
    caseName: caseName,
    houseInfos: [
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
    gtmCode: ["GTM-PS4SVBWM"], // 可放置多個
    recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    //recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "預約賞屋",
    },
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
      room_type: {
        title: "需求房型",
        hold: "請選擇房型",
        option: ["兩房", "三房", "店面"],
        bypass:false,
      },
      ctime: {
        title: "聯絡時段",
        hold: "請選擇時段",
        option: ["上午", "下午", "晚上", "皆可"],
        bypass:false, //必填開啟使用
      },
      budget: {
        title: "購屋預算",
        hold: "請選擇區間",
        option: ["1000萬以下", "1000-1500萬", "1500萬以上"],
        bypass:true, //必填開啟使用
      },
      /*
      budget: {
        title: "購屋預算",
        hold: "請選擇區間",
        option: ["1000", "2000", "3000"],
        bypass:true, //必填開啟使用
      },
      use_type: {
        title: "使用用途",
        hold: "請選擇用途",
        option: ["自住", "投資", "租賃"]
    },
      */
},

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