import { TableDataColumn } from "src/ui/decorators/table-data/tabledata.decorator";

export default class Article  {
    id?: string | undefined;
    
    @TableDataColumn("Título")
    title: string;

    @TableDataColumn("Conteúdo")
    content: string;

    @TableDataColumn("Autor")
    author: string;

    @TableDataColumn("Criado em", {
        type: "date"
    })
    createdAt: Date;

    updatedAt: Date;
    
    constructor (
        title?: string,
        content?: string,
        author?: string,
        createdAt?: Date
      ) {
        this.title = title || "";
        this.content = content || "";
        this.author = author || "";
        this.createdAt = createdAt || new Date;
      }
}
