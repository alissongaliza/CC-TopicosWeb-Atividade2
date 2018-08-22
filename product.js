class Product{


    constructor(name, category, price, img){

        this.name = name;
        this.category = category;
        this.price = price;
        this.img = img;
    }

    get name(){
        return this.name;
    }

    get price(){
        return this.price;
    }

    get img(){
        return this.img;
    }

    get category(){
        return this.category;
    }
}

module.exports = Product;
