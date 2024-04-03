let selectedAmount = 0;

function selectPlan(amount) {
    selectedAmount = amount;
    document.getElementById('selected-plan').innerText = 'Выбран план на сумму $' + amount;
}

function applyDiscount() {
    const promoCode = document.getElementById('promo').value.trim().toLowerCase();
    
    if (promoCode === '50') {
        selectedAmount *= 0.5; // Применение скидки 50%
    }

    document.getElementById('selected-plan').innerText = 'Выбран план на сумму $' + selectedAmount.toFixed(2);
}
