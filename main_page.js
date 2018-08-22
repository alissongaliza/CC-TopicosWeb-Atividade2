// import Product from "/home/lumo/CC-TopicosWeb-Atividade2/product.js";

// const Product= require('./product.js');

class Product{


    constructor(name, category, price, img){

        this.name = name;
        this.category = category;
        this.price = price;
        this.img = img;
    }

    get product_name(){
        return this.name;
    }

    get product_price(){
        return this.price;
    }

    get product_img(){
        return this.img;
    }

    get product_category(){
        return this.category;
    }
}

var all_products = [

    new Product('Sueter Bomber De Seda Barroca', 'Sueter', 18050.00, null),
    new Product('Sueter Breton J W Anderson', 'Sueter', 2734.00, null),
    new Product('Sueter Listrado Missoni', 'Sueter', 2850.00, null),
    new Product('Sueter Com Estampas Versace', 'Sueter', 4452.00, null),
    new Product('Slide Medusa Com Glitter Versace', 'Chinelo', 2767.00, null),
    new Product('Slide D&G 1984 Couro', 'Chinelo',2469.50,null),
    new Product('Slide Industrial', 'Chinelo',2530.99, null),
    new Product('Vestido Longo Preto Givenchy', 'Vestido', 814.99, null),
    new Product('Vestido de camurça Saint Laurent', 'Vestido', 23920.00, null),
    new Product('Vestido Asymmetrical Bolt Balmain', 'Vestido', 22820.99, null)

];

var all_categories = [...new Set(all_products.map(product =>product.category))]
            .map(category => ({ name:category,count: all_products.filter(product =>product.category ===category).length }));

            

function load_categories(){
    
    var items_category = 5;     //lista com produtos filtrados por categoria
    var ul = document.getElementById("category-list-recipient");

    for (var i = 1; i <= items_category; i++)
    {
        var li = document.createElement("li");  
        li.className = "category";

        var a = document.createElement("a");
        a.innerHTML = "Subfile " + i;

        li.appendChild(a);
        ul.appendChild(li);
    }
}

function load_products(){
    
    var products = 5;           //lista com todos os produtos
    var div = document.getElementById("products");

    for (var i = 1; i <= products; i++)
    {
        var div_produto = document.createElement("div");
        div_produto.className = 'product_item';

        var thumbnail = document.createElement('img');
        thumbnail.className = 'product_item_thumbnail';
        //TODO: Inserir as imagens de cada produto

        var name = document.createElement('paragraph');
        name.id = 'product_item_name';

        var price = document.createElement('paragraph');
        price.className = 'product_item_price';

        var add_to_cart = document.createElement('button');
        add_to_cart.className = 'product_item_add_to_cart';

        div.appendChild(div_produto);
        div.appendChild(thumbnail);
        div.appendChild(name);
        div.appendChild(price);
        div.appendChild(add_to_cart);
    }
}