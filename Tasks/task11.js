//todo: Задан произвольный url необходимо получить router, action и id

// Пример:
// var url = "http://www.ozon.ru/context/detail/id/19677670/"
// router: context
// action: detail
// id: 19677670


function getUrlDetails (url) {
	if (typeof(url) != 'string') {
		console.log("URL should be string")
	} else {
		let domain, router, action, id, id_n
		[domain, router, action, id, id_n] = url.slice(protocol.length).split('/')
		return [router, action, id_n]
	}
}

console.log(getUrlDetails("http://www.ozon.ru/context/detail/id/19677670/"))