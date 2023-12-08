// let cartItems = [];
//         let cartTotal = 0;

//         function addToCart(productName, price) {
//             cartItems.push({ name: productName, price: price });
//             cartTotal += price;

//             updateCart();
//         }

//         function removeFromCart(index) {
//             const removedItem = cartItems.splice(index, 1)[0];
//             cartTotal -= removedItem.price;

//             updateCart();
//         }

//         function updateCart() {
//             const cartList = document.getElementById('cart-items');
//             const totalSpan = document.getElementById('cart-total');

//             // Clear previous items
//             cartList.innerHTML = '';

//             // Add updated items
//             cartItems.forEach((item, index) => {
//                 const li = document.createElement('li');
//                 li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
//                 const removeButton = document.createElement('button');
//                 removeButton.textContent = 'Remove';
//                 removeButton.onclick = () => removeFromCart(index);
//                 li.appendChild(removeButton);
//                 cartList.appendChild(li);
//             });

//             // Update total
//             totalSpan.textContent = cartTotal.toFixed(2);
//         }

//         function checkout() {
//             // Simulate checkout process
//             alert(`Total Amount: $${cartTotal.toFixed(2)} - Payment Successful`);
//             // Reset cart after successful payment
//             cartItems = [];
//             cartTotal = 0;
//             updateCart();
//         }