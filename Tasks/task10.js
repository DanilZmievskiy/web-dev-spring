//todo:  Задан произвольный url необходимо получить его домен.

// Пеример:
// var url = "http://www.ozon.ru/context/detail/id/19677670/"
// Домен: www.ozon.ru

const protocol = 'http://'

function getDomainName (url) {
	if (typeof(url) != 'string') {
		console.log("URL should be string")
	} else {
		let domainName = url.slice(protocol.length).split('/')[0]
		return domainName
	}
}

console.log(getDomainName("http://www.ozon.ru/context/detail/id/19677670/"))