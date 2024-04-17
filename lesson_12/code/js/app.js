import Handlebars from "handlebars";
// compile the template
    // import { _menu } from "./partial/menu.hbs.js"
    // import { _footer } from "./partial/footer.hbs.js"
    let template = Handlebars.compile(`<div>Отладка</div>`)
    
    // let template = Handlebars.compile(`<div>
    //         {{> menu}}
            
    //         <div class="entry">
    //             {{#if author}}
    //                 <h1>{{firstName}} {{lastName}}</h1>
    //             {{/if}}
    //         </div>
            
    //         {{> footer}}
    //         </div>`);
    
    let body = {
            author: true,
            firstName: "Yehuda",
            lastName: "Katz",
        }
    // execute the compiled template and print the output to the console
    let str = template(body)
    
    let root = document.getElementById('root')
    root.innerHTML = str