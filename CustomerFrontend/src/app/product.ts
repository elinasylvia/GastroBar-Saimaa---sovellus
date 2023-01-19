export class Product {
    description: string;
    imageUrl: string;
    price: number;
    name: string;

    constructor(description: string, imageUrl: string, price: number, name: string) {
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
    }
}
