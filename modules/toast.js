// export function closeToast() {
//     console.log("CloseToast Ran toast.js");
//     if ( document.getElementById("liveToast").className.match(/(?:^|\s)show(?!\S)/) ){
//         document.getElementById("liveToast").className =
//    document.getElementById("liveToast").className.replace
//       ( /(?:^|\s)show(?!\S)/g , ' hide' )
//     }
// }

// export function showToast(time) {
//     console.log("showToast Ran toast.js");
//     if ( document.getElementById("liveToast").className.match(/(?:^|\s)hide(?!\S)/) ){
//         document.getElementById("liveToast").className =
//    document.getElementById("liveToast").className.replace
//       ( /(?:^|\s)hide(?!\S)/g , ' show' )
//     }
//     setTimeout(function () {
//         closeToast();
//       }, time || 3000);
// }

// This is better !  

export function showToast(){
    console.log("showToast Ran toast.js");
    let toastchanger = document.getElementById("post-submit");
    let element = document.getElementById("liveToast");

    let myToast = bootstrap.Toast.getOrCreateInstance(element);
    // let myToast = new bootstrap.Toast(element);

    toastchanger.addEventListener("click", function(){
        myToast.show();
    });
}
export function changeToast(reason) {
    console.log("ToastChanger Ran toast.js");
    document.getElementById("toast-text").innerText = `${reason}`;
}