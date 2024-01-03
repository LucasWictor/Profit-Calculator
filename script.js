function calculateTotal() {
    var priceInput = document.getElementById('priceInput');
    var priceString = priceInput.value.replace(',', '.');
    var price = parseFloat(priceString);

    if (!isNaN(price)) {
        var totalPrice = price * 1.25 * 1.5;

        document.getElementById("result").innerHTML = "Det justerade priset inklusive moms och vinst är: " + totalPrice.toFixed(2) + " SEK";
        priceInput.value = '';
    } else {
        document.getElementById("result").innerHTML = "Vänligen ange ett giltigt pris.";
    }
}
