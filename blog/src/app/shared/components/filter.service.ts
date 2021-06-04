import { Injectable } from "@angular/core";
import { Post } from "./interfaces";
import { Tag, Tags } from "./post/post";

@Injectable({ providedIn: 'root' })
export class FilterService {
    public categories: Tag[] = [
        { title: Tags.Journey },
        { title: Tags.Love },
        { title: Tags.Philosophy },
        { title: Tags.All }
    ];
    public category;
    public filteredItems: Post[] = [];
    

    public filterPost(category: Tag) {
        this.category = category.title;
    }

    public searchFilter(posts: Post[], category?: Tag) {
        let newArray: Post[] = [];
        console.log(newArray);
        category = this.category;
        if (this.category == undefined) {
            return posts;
        }
        this.filteredItems = posts;
        this.filteredItems.filter((post: Post)=>{
            post.tags.filter((tag: Tag)=>{
            if(tag.title.includes(this.category)){
                newArray.push(post)
            }
            })
        })
        console.log(newArray)
        return newArray;
    }
}