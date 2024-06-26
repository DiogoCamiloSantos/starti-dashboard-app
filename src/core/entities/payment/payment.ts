import { TableDataColumn } from "src/ui/decorators/table-data/tabledata.decorator";

export class Payment {

    private id?: string;   

    @TableDataColumn("Usuário", {
        subtitle: "username"
    })
    private name: string;

    
    @TableDataColumn("Criado em", {
        type: "date"
    })
    private createdAt: string;
    

    private username: string;


    private title: string;

    


    @TableDataColumn("Valor", {
        type: "currency"
    })
    private value: number;

    
    private updatedAt: string;

 

    private image: string;


    @TableDataColumn("Verificado", {
        type: "text"
    })
    private isPayed: boolean;

    constructor (
      id?: string,
      name?: string,
      username?: string,
      title?: string,
      value?: number,
      date?: string,
      isPayed?: boolean,
      image?: string
    ) {
      this.id = id;
      this.name = name || "";
      this.username = username || "";
      this.title = title || "";
      this.value = value || 0;
      this.createdAt = date || "";
      this.image = image || "";
      this.isPayed = isPayed || false;
    }

    public getId(): string {
        return String(this.id);
    }

    public setId(id: string): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getUsername(): string {
        return this.username;
    }

    public setUsername(username: string): void {
        this.username = username;
    }

    public getTitle(): string {
        return this.title;
    }

    public setTitle(title: string): void {
        this.title = title;
    }

    public getValue(): number {
        return this.value;
    }

    public setValue(value: number): void {
        this.value = value;
    }

    public getCreatedAt(): string {
        return this.createdAt;
    }

    public getUpdatedAt(): string {
        return this.updatedAt;
    }

    public setCreatedAt(date: string): void {
        this.createdAt = date;
    }    

    public setUpdatedAt(date: string): void {
        this.updatedAt = date;
    }

    public getImage(): string {
        return this.image;
    }

    public setImage(image: string): void {
        this.image = image;
    }

    public getIsPayed(): boolean {
        return this.isPayed;
    }

    public setIsPayed(isPayed: boolean): void {
        this.isPayed = isPayed;
    }
}
