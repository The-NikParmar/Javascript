document.addEventListener('DOMContentLoaded', function() {
    var a = document.querySelector("h5");
    var addf = document.querySelector("#add");
    var flag = 0
    if (a && addf) {
        addf.addEventListener("click", function() {
            if (flag == 0) {
            a.innerText = "Remove Follower";
            a.style.color = "green";
            flag = 1
            }
            else{
                a.innerText = "Follow";
                a.style.color = "red";
                flag =0
            }
            
        });
    } else {
        if (!a) console.error('Element <h5> not found');
        if (!addf) console.error('Element with id "add" not found');
    }
});
