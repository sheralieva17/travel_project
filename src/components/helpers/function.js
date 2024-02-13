// Функция для получения данных из хранилища под ключом favorites
export const getFavoritesLocalStorage = () => {
	const favorites = JSON.parse(localStorage.getItem("favorites"));
	return favorites;
  };
  // Функция для подсчета суммы всех товаров в избранном
  export const calcFavoritesTotalPrice = (favorites) => {
	const totalPrice = favorites.reduce((acc, curr) => (acc += curr.subPrice), 0);
	return totalPrice;
  };
  // Функция для подсчета стоимости за одну позицию в избранном
  export const calcFavoritesSubPrice = (favorite) => {
	return +favorite.item.price * favorite.count;
  };
  // Функция для получения количества товаров в избранном
  export const getProductsCountInFavorites = () => {
	let favorites = getFavoritesLocalStorage();
	return favorites ? favorites.products.length : 0;
  };
  