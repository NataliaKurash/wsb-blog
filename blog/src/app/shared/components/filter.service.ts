import { Injectable } from "@angular/core";
import { Post } from "./interfaces";
import { Tag, Tags } from "./post/post";

@Injectable({ providedIn: 'root' })
export class FilterService {
    public category: Tags;
    public categories: Tag[] = [
        { title: Tags.Journey },
        { title: Tags.Love },
        { title: Tags.Philosophy },
        { title: Tags.All }
    ];

    public filterPost(category: Tag) {
        this.category = category.title;
    }

    public filterPostsByTag(posts: Post[]): Post[] {
        if (this.category == undefined || this.category == Tags.All) {
            return posts;
        }

        let filteredPosts: Post[] = [];
        posts.filter((post: Post) => {
            post.tags.filter((tag: Tag) => {
                if (tag.title.includes(this.category)) {
                    filteredPosts.push(post);
                }
            });
        });
        return filteredPosts;
    }
}