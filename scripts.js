let money = +prompt("Братишка, сколько готов потратить?", "120000");
    time = prompt("Теперь введи дату в формате YYYY-MM-DD", "2016-02-07");
    
let appData = {
    budget: money,
    timeData: time,
    expense : {},
    optionalExpenses : {},
    income : [],
    savings: false,
};

/* for (let i = 0; i < 2; i++) {
    a = prompt("Введите обязательную статью расходов в этом месяце — " + (i + 1), "Похавать");
    b = +prompt("Во сколько обойдётся?", "30000");
    if (typeof(a) === "string" && typeof(a) != null && a != "" && typeof(b) === "number" && typeof(b) != null && b != "" 
        && a.length < 50) {
        appData.expense[a] = b;
    }
    else {
        i--;
        console.log("В данных косяк, повторяем цикл");
    }
    
} */

let i = 0;
/* while (i < 2) {
    a = prompt("Введите обязательную статью расходов в этом месяце — " + (i + 1), "Похавать");
    b = +prompt("Во сколько обойдётся?", "30000");
    if (typeof(a) === "string" && typeof(a) != null && a != "" && typeof(b) === "number" && typeof(b) != null && b != "" 
        && a.length < 50) {
        appData.expense[a] = b;
        i++;
        console.log('всё ок');
    }
    else {
        console.log("В данных косяк, повторяем цикл");
    }
} */

/* do {
    a = prompt("Введите обязательную статью расходов в этом месяце — " + (i + 1), "Похавать");
    b = +prompt("Во сколько обойдётся?", "30000");
    if (typeof(a) === "string" && typeof(a) != null && a != "" && typeof(b) === "number" && typeof(b) != null && b != "" 
        && a.length < 50) {
        appData.expense[a] = b;
        i++;
        console.log('всё ок');
    }
    else {
        console.log("В данных косяк, повторяем цикл");
    }
} while (i < 2); */

appData.moneyPerDay = appData.budget /30 ;

alert("В день нужно " + appData.moneyPerDay + " ₽");

if (appData.moneyPerDay < 100) {
    console.log ("Нищеёб!");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log ("Крепкий хозяйственник!");
} else if (appData.moneyPerDay > 2000) {
    console.log ("При бабках!");
} else {
    console.log ("Чёт не то");
}