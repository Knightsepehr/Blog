import { savedPosts } from "./handleCreatePost.js";
export function removePost(postitle) {
    console.log("PostRemover ran");
    savedPosts.forEach(
        function (post,index){
            if (post.title == postitle) {
                console.log(post.title + " == " + postitle + " index " + index);
                // savedPosts.splice(index,1);
                console.log(savedPosts);
            }
        }
    )
}