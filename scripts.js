var money = prompt("Братишка, сколько готов потратить?", "300000");
    time = prompt("Теперь введи дату в формате YYYY-MM-DD", "2016-02-07");
    
var appData = {
    budget: money,
    timeData: time,
    expense : {},
    optionalExpenses : {},
    income : [],
    savings: false,
};

appData.expense.a = prompt("Введите обязательную статью расходов в этом месяце", "дрочить!");
appData.expense.b = prompt("Во сколько обойдется?", "30000");
appData.expense.c = prompt("Введите обязательную статью расходов в этом месяце", "спать!");
appData.expense.d = prompt("Во сколько обойдется?", "30000");

alert(appData.budget /30 + " ₽");