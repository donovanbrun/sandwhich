export default class Sandwich {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    userId: number;
    
    constructor(id: number, name: string, description: string, imageUrl: string, userId: number) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.imageUrl = imageUrl;
        this.userId = userId;
    }
}