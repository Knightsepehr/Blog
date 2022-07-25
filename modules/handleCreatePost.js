import { removePost } from "./handleRemovePost.js";
export const PostTitle = document.getElementById("post-title");
export const PostImage = document.getElementById("post-image");
export const PostText = document.getElementById("post-text");
export const PostTags = document.getElementById("post-tags");
export const PostAuthor = document.getElementById("post-author");
export const PostButton = document.getElementById("post-submit");
const postUL = document.getElementById("posts-ul");

const savedLCPosts = localStorage.getItem("postList");
const parsesavedLCPosts = JSON.parse(savedLCPosts) || [];
export let savedPosts = [...parsesavedLCPosts];

export function suss() {
    console.log(savedPosts);
    savedPosts.forEach(
        function (post) {
            createPost(post.title,post.image,post.text,post.tags,post.author,post.numberoflikes)
        });
}


let posts = [];

export function createPost(ptitle,pimage,ptext,tags,pauthor,pnumberoflikes) {
    const newPost = {
        title: ptitle,
        image: pimage,
        text: ptext,
        tags: tags,
        author: pauthor,
        numberoflikes:0 + pnumberoflikes,
    };
    const listItem = document.createElement("li");
    listItem.classList.add("list-item");
    listItem.classList.add("list-group-item");
    listItem.classList.add("d-flex");
    listItem.classList.add("flex-column");
    listItem.classList.add("w-50");
    listItem.classList.add("mw-50");
    postUL.appendChild(listItem);
    
    const postedTitleSection = document.createElement("div");
    postedTitleSection.classList.add("posted-title-section");
    postedTitleSection.classList.add("d-flex");
    postedTitleSection.classList.add("align-items-center");
    listItem.appendChild(postedTitleSection);
    
    const upperTitleparagraph = document.createElement("p");
    upperTitleparagraph.classList.add("me-2");
    upperTitleparagraph.classList.add("fs-20");
    upperTitleparagraph.classList.add("fw-500");
    upperTitleparagraph.innerHTML += "Title : "; 
    postedTitleSection.appendChild(upperTitleparagraph);
    
    const innerTitleParagraph = document.createElement("p");
    innerTitleParagraph.classList.add("posted-title");
    innerTitleParagraph.classList.add("fw-400");
    innerTitleParagraph.classList.add("fs-16");
    innerTitleParagraph.innerText = newPost.title; // ADDED TITLE TO ITS ELEMENT
    upperTitleparagraph.appendChild(innerTitleParagraph);
    
    listItem.appendChild(document.createElement("hr"));
    
    const postedContentDiv = document.createElement("div");
    postedContentDiv.classList.add("posted-content");
    postedContentDiv.classList.add("mw-100");
    listItem.appendChild(postedContentDiv);
    
    const PostedImage = document.createElement("img");
    PostedImage.src = newPost.image; //ADDED IMAGE TO ITS ELEMENT
    
    const PostedText = document.createElement("p");
    PostedText.classList.add("posted-text");
    PostedText.classList.add("fs-16");
    PostedText.classList.add("fw-400");
    PostedText.innerText = newPost.text; // ADDED TEXT TO POST
    postedContentDiv.appendChild(PostedImage);
    postedContentDiv.appendChild(PostedText);
    
    listItem.appendChild(document.createElement("hr"));
    
    const postedinfoDIV = document.createElement("div");
    postedinfoDIV.classList.add("posted-info");
    postedinfoDIV.classList.add("d-flex");
    postedinfoDIV.classList.add("align-items-center");
    postedinfoDIV.classList.add("justify-content-center");
    postedinfoDIV.style.gap = "1rem";
    listItem.appendChild(postedinfoDIV);
    
    const tagsparagraph = document.createElement("p");
    tagsparagraph.classList.add("fw-500");
    tagsparagraph.classList.add("fs-10");
    tagsparagraph.innerText = "Tags:";
    postedinfoDIV.appendChild(tagsparagraph);
    
    const postedtagsparagraph = document.createElement("p");
    postedtagsparagraph.classList.add("posted-tags");
    postedtagsparagraph.classList.add("fw-400");
    postedtagsparagraph.classList.add("fs-10");
    postedtagsparagraph.innerText = newPost.tags;
    tagsparagraph.appendChild(postedtagsparagraph);
    
    
    const authorparagraph = document.createElement("p");
    authorparagraph.classList.add("fw-500");
    authorparagraph.classList.add("fs-10");
    authorparagraph.innerText = "Author:";
    postedinfoDIV.appendChild(authorparagraph);
    
    const postedauthorparagraph = document.createElement("p");
    postedauthorparagraph.classList.add("posted-author");
    postedauthorparagraph.classList.add("fw-400");
    postedauthorparagraph.classList.add("fs-10");
    postedauthorparagraph.innerText = newPost.author;
    authorparagraph.appendChild(postedauthorparagraph);
    
    
    
    const likesparagraph = document.createElement("p");
    likesparagraph.classList.add("fw-500");
    likesparagraph.classList.add("fs-10");
    likesparagraph.innerText="Likes: ";
    postedinfoDIV.appendChild(likesparagraph);
    
    const postedlikesspan = document.createElement("span");
    postedlikesspan.classList.add("posted-likes");
    postedlikesspan.classList.add("badge");
    postedlikesspan.classList.add("bg-danger");
    postedlikesspan.classList.add("rounded-pill");
    postedlikesspan.classList.add("fs-10");
    likesparagraph.appendChild(postedlikesspan);
    postedlikesspan.innerText = newPost.numberoflikes; 
    listItem.appendChild(document.createElement("hr"));

    
    listItem.innerHTML += `<div class="posted-buttons d-flex justify-content-between">
    <a role="button" class="posted-button posted-button-like btn btn-warning btn-sm text-danger fs-36" id="${ptitle}" name="${pnumberoflikes}">♥ Like</a>
    <a role="button"  class="posted-button posted-button-comment btn btn-secondary btn-sm">Comment</a>
    <a role="button"  class="posted-button posted-button-edit btn btn-info btn-sm">Edit</a>
    <button role="button"  class="posted-button posted-button-remove btn btn-danger btn-sm" id="${ptitle}">Remove</button>
    </div>`;
    posts.push(newPost);
    localStorage.setItem("postList",JSON.stringify(posts));
}