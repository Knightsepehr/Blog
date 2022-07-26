export function showToast(){
    let toastchanger = document.getElementById("post-submit");
    let element = document.getElementById("liveToast");
    let myToast = bootstrap.Toast.getOrCreateInstance(element);

    toastchanger.addEventListener("click", function(){
        myToast.show();
    });
}
export function changeToast(reason) {
    document.getElementById("toast-text").innerText = `${reason}`;
}