let balance = 100000;
let portfolio = {};

function updateBalance() {
    document.getElementById("balance").innerText = balance;
}

function updatePortfolio() {
    const list = document.getElementById("portfolioList");
    list.innerHTML = "";

    for (let stock in portfolio) {
        let li = document.createElement("li");
        li.innerText = ${stock} : ${portfolio[stock]} shares;
        list.appendChild(li);
    }
}

function buyStock(stock, price) {
    if (balance >= price) {
        balance -= price;
        portfolio[stock] = (portfolio[stock] || 0) + 1;
        updateBalance();
        updatePortfolio();
        alert(You bought 1 share of ${stock});
    } else {
        alert("Insufficient balance!");
    }
}

function sellStock(stock, price) {
    if (portfolio[stock] && portfolio[stock] > 0) {
        balance += price;
        portfolio[stock]--;
        if (portfolio[stock] === 0) {
            delete portfolio[stock];
        }
        updateBalance();
        updatePortfolio();
        alert(You sold 1 share of ${stock});
    } else {
        alert("You don't own this stock!");
    }
}
