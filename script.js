$(function () {
	$('#cart').click(function () {
		$('.cart').toggleClass('show_cart')
	})
});

// выбираем все кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll(".add-to-cart");

// выбираем список элементов корзины
const cartItems = document.querySelector(".cart-items");

// добавляем обработчик события на все кнопки "Добавить в корзину"
addToCartButtons.forEach(button => {
  button.addEventListener("click", addToCart);
});

// функция добавления продукта в корзину
function addToCart(event) {
  // выбираем элемент продукта, на который нажали
  const button = event.target;
  const product = button.parentElement;

  // получаем данные продукта (id, имя, цену)
  const productId = product.dataset.id;
  const productName = product.dataset.name;
  const productPrice = product.dataset.price;

  // создаем новый элемент списка корзины
  const cartItem = document.createElement("li");
  cartItem.innerText = `${productName} - ${productPrice} Lei`;

  // добавляем кнопку "Удалить из корзины"
  const removeButton = document.createElement("del");
  removeButton.innerText = " X";
  removeButton.classList.add("remove-from-cart");
  cartItem.appendChild(removeButton);

  // добавляем обработчик события на кнопку "Удалить из корзины"
  removeButton.addEventListener("click", removeFromCart);

  // добавляем элемент корзины в список корзины
  cartItems.appendChild(cartItem);
}

// функция удаления продукта из корзины
function removeFromCart(event) {
  const button = event.target;
  const item = button.parentElement;
  item.remove();
}
