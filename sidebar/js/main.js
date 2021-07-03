let chevron = document.querySelector("#chevron");
let sidebar = document.querySelector(".sidebar");
let sidebar_li = document.querySelectorAll(".sidebar_body_li");
let sidebar_li_a = document.querySelectorAll(".sidebar_body_li_a");

function tgl() {
    sidebar.classList.toggle("sidebar_deactive");
    for (let item of sidebar_li_a) {
        if (arrayIfHasText(item.classList, "sidebar_a_deactive")) {
            item.classList.remove("sidebar_a_deactive");
            item.classList.add("sidebar_a_active");
        } else {
            item.classList.remove("sidebar_a_active");
            item.classList.add("sidebar_a_deactive");
        }
    }
}

// check if array includes txt or not
function arrayIfHasText(arr = [], txt = "") {
    for (let cl of arr) {
        if (cl === txt) {
            console.log("it includes");
            return true;
        } else {
            console.log("it not includes");
            return false;
        }
    }
}
