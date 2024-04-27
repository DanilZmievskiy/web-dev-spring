const _menu = "<ul><li>{{ link_one }}</li><li>{{ link_two }}</li> </ul>"

let menu = Handlebars.compile(_menu)
let htmlMenu = menu({ link_one: 'Главная', link_two: 'О нас' })
Handlebars.registerPartial( "menu",  htmlMenu )