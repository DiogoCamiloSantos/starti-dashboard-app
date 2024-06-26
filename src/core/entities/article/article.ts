import { TableDataColumn } from "src/ui/decorators/table-data/tabledata.decorator";
import { IArticle } from "./article.interface";

export default class Article implements IArticle {
    id?: string | undefined;
    
    @TableDataColumn("Título")
    title: string;

    @TableDataColumn("Conteúdo")
    content: string;

    // @TableDataColumn("Autor")
    author: string;

    // @TableDataColumn("Criado em", {
    //     type: "date"
    // })
    createdAt: Date;

    updatedAt: Date;
}
