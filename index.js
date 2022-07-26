import * as toast from './modules/toast.js';
import * as postcreator from './modules/handleCreatePost.js'

let toastchanger = document.getElementById("post-submit");

toastchanger.addEventListener("click",() => {
        console.log("ToastChanger Ran index.js");
        console.log(postcreator.savedPosts)
        if (postcreator.PostAuthor.value == null || postcreator.PostAuthor.value == '' ) {
            toast.changeToast("Name field could not be empty");
            toast.showToast();
            console.log("showToast Ran index.js");
        } else if (postcreator.PostTags.value == null || postcreator.PostTags.value == '' ) {
            toast.changeToast("Tags field could not be empty");
            toast.showToast();
            console.log("showToast Ran index.js");
        } else if (postcreator.PostImage.value == null || postcreator.PostImage.value == '' ) {
            toast.changeToast("URL field could not be empty");
            toast.showToast();
            console.log("showToast Ran index.js");
        } else if (postcreator.PostText.value == null || postcreator.PostText.value == '' ) {
            toast.changeToast("Text field could not be empty");
            toast.showToast();
            console.log("showToast Ran index.js");
        } else if (postcreator.PostTitle.value == null || postcreator.PostTitle.value == '' ) {
            toast.changeToast("Title field could not be empty");
            toast.showToast();
            console.log("showToast Ran index.js");
        }else{
            toast.changeToast("Posted Was created !");
            postcreator.createPost(postcreator.PostTitle.value,
                postcreator.PostImage.value,
                postcreator.PostText.value,
                postcreator.PostTags.value,
                postcreator.PostAuthor.value,
                0
                );
        }

})
document.addEventListener("DOMContentLoaded", function(){
    postcreator.handle();
    toast.showToast(); 
});


