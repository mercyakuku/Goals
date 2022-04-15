export class Goal {

    id: number;
    name: string;
    description: string;
    showDescription: boolean;

    constructor(id: number, name: string, description: string){
        this.showDescription=false;
        this.id=id;
        this.name=name;
        this.description=description;
}


}