import { Injectable } from "@angular/core";
import ITableData from "src/ui/components/table/interfaces/table-data.interface";
import { AbstractParser, PayloadList } from "../base/abstract.parser";
import Article from "@entities/article/article";
import { TableData } from "src/ui/components/table/models/table-data.model";

@Injectable({providedIn: `root`})
export class ArticleParser extends AbstractParser<Article> {
    parse(payload: any): Article {
        return {
          title: payload.title,
          content: payload.content,
          author: payload.author,
          createdAt: payload.createdAt,
          updatedAt: payload.updatedAt,
        };
    }

    parseListAsTableData(payload: PayloadList): ITableData {
      return new TableData(this.parseList(payload), Article); 
    }
}
