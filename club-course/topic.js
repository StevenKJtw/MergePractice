let topicsArray=[

    "進化一隻寶可夢",
    "購買一個商城道具",
    "抓到一隻電系寶可夢",
    "獲得10元金幣",
    "傳送一隻寶可夢"
];

let startDate= new Date();

function setMonthAndDay(startMonth,startDay){
    startDate.setMonth(startMonth-1,startDay);
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}

setMonthAndDay(2,21);