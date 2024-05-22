import {v4 as uuidv4} from 'uuid';

export class Payment {

    private id: string;
    private name: string;
    private username: string;
    private title: string;
    private value: number;
    private date: string;
    private image: string;
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
      this.id = id || uuidv4();
      this.name = name || "";
      this.username = username || "";
      this.title = title || "";
      this.value = value || 0;
      this.date = date || "";
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

    public getDate(): string {
        return this.date;
    }

    public setDate(date: string): void {
        this.date = date;
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
