let subtotal = 0;

document.getElementById("add-plan").addEventListener("click", () => {
    const plan = document.getElementById("plan");
    const subscription = document.getElementById("subscription");

    const planText = `${plan.options[plan.selectedIndex].text} - ${subscription.value}`;
    const price = plan.value * (subscription.value === "annual" ? 200 : 20);

    addRowToTable(planText, price);
});

document.getElementById("add-addon").addEventListener("click", () => {
    const addon = document.getElementById("addon");
    const addonText = addon.options[addon.selectedIndex].text;
    const price = parseFloat(addon.value);

    addRowToTable(addonText, price);
});

function addRowToTable(item, price) {
    const table = document.querySelector("#order-table tbody");
    const row = table.insertRow();
    row.insertCell(0).innerText = item;
    row.insertCell(1).innerText = `$${price}`;

    subtotal += price;
    updateTotals();
}

function updateTotals() {
    const discount = document.getElementById("discount").value;
    const total = subtotal - (subtotal * discount / 100);
    document.getElementById("subtotal").innerText = subtotal.toFixed(2);
    document.getElementById("total").innerText = total.toFixed(2);
}

document.getElementById("discount").addEventListener("input", updateTotals);

// Export to PDF
document.getElementById("export-pdf").addEventListener("click", () => {
    window.print();
});
