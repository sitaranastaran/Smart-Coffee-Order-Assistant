function startCoffeeAssistant() {
    // Login and access control
    const username = prompt("Enter your username (admin or user):");
    const password = prompt("Enter your password:");

    if ((username === "admin" || username === "user") && password === "1234") {
        const role = username;
        alert(`Welcome! you are successfully logged in. ${role}`);
    } else {
        alert("Invalid credentials! Access denied.");
        return;
    }
    // Order
    const name = prompt("What is your name?");
    const age = parseInt(prompt("How old are you?"));
    const coffee = prompt("Which coffee would you like? (espresso / latte / cappuccino)").toLowerCase();
    const quantity = parseInt(prompt("How many cups would like?"));
    const prices = {
        espresso: 100,
        latte: 150,
        cappuccino: 180
    };
    const pricefor1cup = prices[coffee] || 0;

    if (pricefor1cup === 0 || isNaN(quantity) || quantity < 1) {
        alert("The order was invalid!❌");
        return;
    }
    const originalTotal = pricefor1cup * quantity;

    // Discount based on age
    let discount = 0;
    if (age < 18 || age > 60) {
        discount = originalTotal * 0.1;
    }
    const totalAfterDiscount = originalTotal - discount;
    // Division of the bell if there were several people
    const split = parseInt(prompt("How many people are splitting the bill?"));
    const tipPercent = parseInt(prompt("Tip percentage? (0, 5, 10, 15) "));

    const tipAmount = totalAfterDiscount * (tipPercent / 100);
    const finaltotal = totalAfterDiscount + tipAmount;
    const foreachpers = finaltotal / split;

    // Final output
    const bill = `
 Hello ${name}
............................
 You ordered: ${coffee}
 Number of cups: ${quantity}
 Orginal total: ${originalTotal} Afg
 Age discount:${discount.toFixed(1)} Afg
 tip: (${tipPercent}%): ${tipAmount.toFixed(1)} Afg
.............................
Total with tip: ${finaltotal.toFixed(1)} Afg
 Split between ${split}
.............................
Thanks for your order!✨
  `;

    alert(bill);
}