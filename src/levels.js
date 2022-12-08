const PURPLE_PLAN = 1
const SILVER_PLAN = 2
const GOLD_PLAN = 3
const levels = [{
    id: 1,
    plan: PURPLE_PLAN,
    amount: 35,
    description: "Количество выплат: 3 Профит: 65% (3*65%=195%) Реферальный доход: 10%",
}, {
    id: 2,
    plan: PURPLE_PLAN,
    amount: 50,
    description: "Количество выплат:Профит: 65% (3*65%=195%) Реферальный доход: 10%"
}, {
    id: 3,
    plan: PURPLE_PLAN,
    amount: 75,
    description: "Количество выплат: 3 Профит: 65% (3*65%=195%) Реферальный доход: 10%"
}, {
    id: 4,
    plan: PURPLE_PLAN,
    amount: 100,
    description: "Количество выплат: 3 Профит: 65% (3*65%=195%) Реферальный доход: 10%"
}, {
    id: 5,
    plan: SILVER_PLAN,
    amount: 125,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 6,
    plan: SILVER_PLAN,
    amount: 150,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 7,
    plan: SILVER_PLAN,
    amount: 150,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 8,
    plan: SILVER_PLAN,
    amount: 175,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 9,
    plan: SILVER_PLAN,
    amount: 200,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 10,
    plan: SILVER_PLAN,
    amount: 225,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 11,
    plan: SILVER_PLAN,
    amount: 250,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 12,
    plan: SILVER_PLAN,
    amount: 275,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 13,
    plan: SILVER_PLAN,
    amount: 300,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 14,
    plan: SILVER_PLAN,
    amount: 350,
    description: "Количество выплат: 3 Профит: 70% (3*70%=210%) Реферальный доход: 15%"
}, {
    id: 15,
    plan: SILVER_PLAN,
    amount: 400,
    description: "Количество выплат: 3 Профит: 73% (3*73%=219%) Реферальный доход: 20%"
}, {
    id: 16,
    plan: SILVER_PLAN,
    amount: 400,
    description: "Количество выплат: 3 Профит: 73% (3*73%=219%) Реферальный доход: 20%"
}, {
    id: 17,
    plan: SILVER_PLAN,
    amount: 400,
    description: "Количество выплат: 3 Профит: 73% (3*73%=219%) Реферальный доход: 20%"
}, {
    id: 18,
    plan: SILVER_PLAN,
    amount: 450,
    description: "Количество выплат: 3 Профит: 73% (3*73%=219%) Реферальный доход: 20%"
}, {
    id: 19,
    plan: GOLD_PLAN,
    amount: 500,
    description: "Количество выплат: 3 Профит: 75% (3*75%=225%) Реферальный доход: 25%"
}, {
    id: 20,
    plan: GOLD_PLAN,
    amount: 500,
    description: "Количество выплат: 3 Профит: 75% (3*75%=225%) Реферальный доход: 25%"
}, {
    id: 21,
    plan: GOLD_PLAN,
    amount: 700,
    description: "Количество выплат: 3 Профит: 75% (3*75%=225%) Реферальный доход: 25%"
}, {
    id: 22,
    plan: GOLD_PLAN,
    amount: 1000,
    description: "Количество выплат: 3 Профит: 75% (3*75%=225%) Реферальный доход: 25%"
}, {
    id: 23,
    plan: GOLD_PLAN,
    amount: 1500,
    description: "Количество выплат: 3 Профит: 75% (3*75%=225%) Реферальный доход: 25%"
}, {
    id: 24,
    plan: GOLD_PLAN,
    amount: 2000,
    description: "Количество выплат: 3 Профит: 75% (3*75%=225%) Реферальный доход: 25%"
}, {
    id: 25,
    plan: GOLD_PLAN,
    amount: 5000,
    description: "Количество выплат: 3 Профит: 75% (3*75%=225%) Реферальный доход: 25%"
}

]


const levelsContainer = document.querySelector("[data-levels-container]")

function getPlanetName(plan) {
    if (plan === PURPLE_PLAN) {
        return "planets rurple"
    }
    if (plan === SILVER_PLAN) {
        return "planets silver"
    }
    if (plan === GOLD_PLAN) {
        return "planets gold"
    }
}

function getLevelCardHtml(level) {
    return `        
        <div class="levels__card">
            <div class="levels__wrapper">
          <div class="levels__card-numbers">  ${level.id} </div>
            <img class="levels__planets" src="./public/main/levels/${getPlanetName(level.plan)}.svg" alt="#">
             </div>
            <span class="levels__price">${level.amount} USDT</span>
            <span class="levels__text">${level.description}</span>
            <button onclick="activeButton(event.target)" class="levels__button levels__button-off">Активировать</button>
        </div>`
}

function activeButton(element) {
    element.classList.remove('levels__button-off')
    element.classList.add('levels__button-on')
    element.innerHTML = 'Активно'
}


let html = ""
for (let i = 0; i < levels.length; i++) {
    html += getLevelCardHtml(levels[i])
}
levelsContainer.innerHTML = html






