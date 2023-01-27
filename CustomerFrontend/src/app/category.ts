export class Category {

    imageUrl: string;
    id: number;
    name: string;
    alternative: string;

    constructor(imageUrl: string, name: string, id: number, alternative: string) {

        this.imageUrl = imageUrl;
        this.id = id;
        this.name = name;
        this.alternative = alternative;

    }
}
