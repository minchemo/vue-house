const caseName = "高大π計畫"
// const caseName = "test"
export default {
   caseid: "9584cf78-47b2-43eb-8f42-1997bf4f4f2c",
    // caseid: "1d2db7f2-157b-4a33-acbc-f4abfde91846",
    address1: "",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "高雄市楠梓區藍田路x大學西路口",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14720.565993669337!2d120.2566881!3d22.7229815!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e0f16f5704453%3A0x2397ed388311211b!2z6auY5aSn5LmL5qOuL-WinuWAvOaloOaikyDljbPliLvpoJDntIQ!5e0!3m2!1szh-TW!2stw!4v1736128841746!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/Fs3jaRzHt3j2sqBT9",
    phone: "07-3648088",
    fbLink: "https://www.facebook.com/pi.debang/",
    fbMessage: "https://m.me/pi.debang/",
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
     gtmCode: ["GTM-K3BF79NM"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    //recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我要預約",
    },
    // 底下2個 沒項目就會隱藏
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
        room_type: {
          title: "需求房型",
          hold: "請選擇房型",
          option: ["2房", "3房"],
          bypass:false,
        },
        budget: {
          title: "購屋預算",
          hold: "請選擇區間",
          option: ["1000-1500萬","1501-2000萬","2001萬以上",],
          bypass:false, //必填開啟使用
        },
        /*
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
        }
    */
    ],
}