import { Injectable } from "@angular/core";
import ITableData from "src/ui/components/table/interfaces/table-data.interface";
import { AbstractParser, PayloadList } from "../base/abstract.parser";
import { UserProfileTableData } from "src/ui/components/table/models/user-profile-table-data.model";
import Article from "@entities/article/article";

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
      let a = new UserProfileTableData(this.parseList(payload));
      console.log("teste", a);
      
      return a; 
    }
}
