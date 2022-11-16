export default class Employee {
    private name: string
    private id: number
    
    constructor(name: string, id: number) {
        this.name = name
        this.id = id
    }
    public getName(): string {
        return this.name
    }

    public setName(n: string): void{
        this.name = n
    } 
    public getId(): number {
        return this.id
    }

    public setId(n: number): void{
        this.id = n
    } 
}