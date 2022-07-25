import * as logger  from './modules/logger.js';
import * as toast from './modules/toast.js';
import * as postcreator from './modules/handleCreatePost.js'
import * as postremover from './modules/handleRemovePost.js'

// let toastcloser = document.getElementById("toast-close-btn");
let toastchanger = document.getElementById("post-submit");

// toastcloser.addEventListener("click",() => {
//         console.log("CloseToast Ran index.js");
//         toast.closeToast();
//     })
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
// Without following three lines , when the button is pressed for the first time it wont show the toast idk why
document.addEventListener("DOMContentLoaded", function(){
    postcreator.suss();
    toast.showToast();
    
});

// Remove and like btn left to be completed later on
// document.getElementById("removepostbutton").addEventListener("click",function() {
//     postremover.removePost(document.getElementById("removeposttitle").value);
// })

