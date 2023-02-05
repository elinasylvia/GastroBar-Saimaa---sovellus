export class Product {
    description: string;
    imageUrl: string;
    price: number;
    name: string;
    id: string;

    constructor(description: string, imageUrl: string, price: number, name: string, id: string) {
        this.description = description;
        this.imageUrl = imageUrl;
        this.price = price;
        this.name = name;
        this.id = id;
    }
}
