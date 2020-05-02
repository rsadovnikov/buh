var money = prompt("Братишка, сколько готов потратить?", "");
    time = prompt("Теперь введи дату в формате YYYY-MM-DD", "");
    
var appData = {
    budget: money,
    timeData: time,
    expense : {},
    optionalExpenses : {},
    income : [],
    savings: false,
};

appData.expense.a = prompt("Введите обязательную статью расходов в этом месяце", "дрочить!");
appData.expense.b = Number(prompt("Во сколько обойдется?", "30000"));
appData.expense.c = prompt("Введите обязательную статью расходов в этом месяце", "спать!");
appData.expense.d = Number(prompt("Во сколько обойдется?", "30000"));

alert("В день будешь заносить " + (appData.expense.b + appData.expense.d)/30 + " ₽");