class Book { 
    
    private id: number;
    private name: string;
    private img: string;
    private  quantity: number;
    private price: number;

    constructor(id: number, name: string, img: string, quantity:number, price:number) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.quantity = quantity;
        this.price = price
    }

    
    public getId(): number
 {
        return this.id;
    }

    public setid(id: number
) {
        this.id = id;
    }

    public getName(): string
 {
        return this.name;
    }

    public setName(name: string
) {
        this.name = name;
    }

    public getImg(): string
 {
        return this.img;
    }

    public setImg(img: string
) {
        this.img = img;
    }

    public getQuantity(): number
 {
        return this.quantity;
    }

    public setQuantity(quantity: number
) {
        this.quantity = quantity;
    }

    public getPrice(): number
 {
        return this.price;
    }

    public setPrice(price: number
) {
        this.price = price;
    }





}


export default Book