export const checkImageURL = (url) => {
	defaultLogoURL =
		"https://t4.ftcdn.net/jpg/05/05/61/73/360_F_505617309_NN1CW7diNmGXJfMicpY9eXHKV4sqzO5H.jpg";
	if (!url) return defaultLogoURL;
	else {
		const pattern = new RegExp(
			"^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
			"i"
		);
		return pattern.test(url) ? url : defaultLogoURL;
	}
};
