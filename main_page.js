// import Product from "/home/lumo/CC-TopicosWeb-Atividade2/product.js";

//const Product= require('./product.js');

class Product{


    constructor(name, category, price, img, thumb){

        this.name = name;
        this.category = category;
        this.price = price;
        this.img = img;
        this.thumb = thumb;
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

function load_categories(all_categories){
    
    var ul = document.getElementById("category-list-recipient");

    for (var i = 0; i < all_categories.length; i++)
    {
        var li = document.createElement("li");  
        li.className = "category";
        li.addEventListener('click',() => {
            sessionStorage.setItem('selected_category',li.a.innerHTML);
        });

        var a = document.createElement("h3");
        a.innerHTML = all_categories[i].name;

        li.appendChild(a);
        ul.appendChild(li);
    }
}

function load_products(all_products){
    
    var div = document.getElementById("products");

    for (var i = 0; i < all_products.length; i++)
    {
        var div_produto = document.createElement("div");
        div_produto.className = 'product_item';

        var thumbnail = document.createElement('img');
        thumbnail.className = 'product_item_thumbnail';
        thumbnail.src = `./imgs/${all_products[i].thumb}`
        //TODO: Inserir as imagens de cada produto

        var name = document.createElement('h4');
        name.id = 'product_item_name';
        name.innerHTML = all_products[i].product_name;

        // var div_produto_inline_price = document.createElement('div');
        // div_produto_inline_price.className = 'inline_block'

        var price = document.createElement('label');
        price.className = 'product_item_price';
        price.innerHTML = `R$ ${all_products[i].product_price.toFixed(2)}`;

        var add_to_cart = document.createElement('button');
        add_to_cart.className = 'product_item_add_to_cart';
        add_to_cart.innerHTML = 'Add';

        div_produto.appendChild(thumbnail);
        div_produto.appendChild(name);
        div_produto.appendChild(price);
        div_produto.appendChild(add_to_cart);
        // div_produto_inline_price.appendChild(price);
        // div_produto_inline_price.appendChild(add_to_cart);
        // div_produto.appendChild(div_produto_inline_price);
        div.appendChild(div_produto);
    }
}

function main(){

    var all_products = [

        new Product('Sueter Bomber De Seda Barroca', 'Sueter', 18050.00, 'JaquetaBomberDeSedaBarroca.jpg','JaquetaBomberDeSedaBarrocaThumbnail.jpg'),
        new Product('Sueter Breton J W Anderson', 'Sueter', 2734.00, 'SueterBretonJWAnderson.jpg','SueterBretonJWAndersonThumbnail.jpg'),
        new Product('Sueter Listrado Missoni', 'Sueter', 2850.00, 'SueterListradoMissoni.jpg','SueterListradoMissoniThumbnail.jpg'),
        new Product('Sueter Com Estampas Versace', 'Sueter', 4452.00, 'SueterComEstampasVersace.jpg','SueterComEstampasVersaceThumbnail.jpg'),
        new Product('Slide Medusa Com Glitter Versace', 'Chinelo', 2767.00, 'SlideMedusaComGlitter.jpg','SlideMedusaComGlitterThumbnail.jpg'),
        new Product('Slide D&G 1984 Couro', 'Chinelo',2469.50,'SlideD&G1984Couro.jpg','SlideD&G1984CouroThumbnail.jpg'),
        new Product('Slide Industrial', 'Chinelo',2530.99, 'SlideIndustrial.jpg','SlideIndustrialThumbnail.jpg'),
        new Product('Vestido Longo Preto Givenchy', 'Vestido', 814.99, 'VestidoLongoPretoGivenchy.jpg','VestidoLongoPretoGivenchyThumbnail.jpg'),
        new Product('Vestido de camurça Saint Laurent', 'Vestido', 23920.00, 'VestidoDeCamurcaSaintLautent.jpg','VestidoDeCamurcaSaintLautentThumbnail.jpg'),
        new Product('Vestido Asymmetrical Bolt Balmain', 'Vestido', 22820.99, 'VestidoAsymmetricalBoltBalmain.jpg','VestidoAsymmetricalBoltBalmainThumbnail.jpg')
    
    ];
    
    //a seguinte desgraca conta o numero diferente de categorias dos nossos produtos
    var all_categories = [...new Set(all_products.map(product =>product.category))]
                .map(category => ({ name:category,count: all_products.filter(product =>product.category ===category).length }));    
    
    load_categories(all_categories);
    load_products(all_products);
}