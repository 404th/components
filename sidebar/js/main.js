let chevron = document.querySelector("#chevron");
let sidebar = document.querySelector(".sidebar");
let sidebar_li = document.querySelectorAll(".sidebar_body_li");
let sidebar_li_a = document.querySelectorAll(".sidebar_body_li_a");

function tgl() {
    sidebar.classList.toggle("sidebar_deactive");

    for (let a of sidebar_li_a) {
        if (arrayIfHasText(a.classList, "sidebar_a_deactive")) {
            a.classList.remove("sidebar_a_deactive");
            a.classList.add("sidebar_a_active");
        } else if (arrayIfHasText(a.classList, "sidebar_a_active")) {
            a.classList.remove("sidebar_a_active");
            a.classList.add("sidebar_a_deactive");
        } else {
            console.log("What's up?");
        }
    }
}

// check if array includes txt or not
function arrayIfHasText(arr = [], txt = "") {
    for (let item of arr) {
        if (item === txt) {
            return true;
        } else {
            continue;
        }
    }
    return false;
}
