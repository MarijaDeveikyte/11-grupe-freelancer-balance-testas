function metuBalansas(account) {
    let HTML = '';

    for (let i = 0; i < account.length; i++) {
        const month = account[i];

        HTML += '<div class="table-row"> <
            div class = "cell" > $ < /div > <
            div class = "cell" > Sausis < /div> <
            div class = "cell" > $income Eur < /div> <
            div class = "cell" > $expense Eur < /div> <
            div class = "cell" > $balance Eur < /div> <
            /div >';
    }
}