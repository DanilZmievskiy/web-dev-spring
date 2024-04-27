const _footer = "<div> {{company}}@copyleft</div> "

let footer = Handlebars.compile(_footer)
let htmlFooter = footer({ company:'pr.Ruby'})
Handlebars.registerPartial( "footer", htmlFooter )