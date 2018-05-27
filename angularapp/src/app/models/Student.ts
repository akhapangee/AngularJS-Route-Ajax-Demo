export class Student {
    private id: number;
    private name: string;
    private status: boolean;

    public constructor() {

    }

    public setId(id: number): void {
        this.id = id;
    }
    public getId(): number {
        return this.id;
    }
    public setName(name: string): void {
        this.name = name;
    }
    public getName(): string {
        return this.name;
    }
    public setStatus(status: boolean): void {
        this.status = status;
    }
    public getStatus(): boolean {
        return this.status;
    }
   
    
}