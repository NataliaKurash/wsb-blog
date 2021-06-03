import { Injectable } from "@angular/core";
import { Post } from "./interfaces";
import { Tag, Tags } from "./post/post";

@Injectable({ providedIn: 'root' })
export class FilterService {
    public categories: Tag[] = [
        { title: Tags.Journey },
        { title: Tags.Love },
        { title: Tags.Philosophy },
        { title: Tags.None }
    ];
    public category;
    public filteredItems: Post[] = [];
    public newArray: Post[] = []

    public filterPost(category: Tag) {
        this.category = category.title;
    }

    public searchFilter(posts: Post[]) {
        if (this.category == undefined) {
            return posts;
        }
        this.filteredItems = posts;
        console.log(this.filteredItems);
        this.filteredItems.filter((item: Post) => {
            item.tags.find((tag: Tag) => {
                if (tag.title.includes(this.category)) {
                    this.newArray.push(item);
                }
            })
        });
        console.log(this.newArray);
        return this.newArray;
    }
}