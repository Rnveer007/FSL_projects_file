const fullname = document.querySelector("#fname");
const lastname = document.querySelector("#lname");
const region = document.querySelector("#countries");
const score = document.querySelector("#score");
const btn = document.querySelector("#btn");
const table = document.querySelector("table tbody");



btn.addEventListener("click", enterscore)
function enterscore() {

    const tr = document.createElement("tr");

    const td1 = document.createElement("td");
    td1.innerHTML = fullname.value;


    const td2 = document.createElement("td");
    td2.innerHTML = lastname.value;

    const td3 = document.createElement("td");
    td3.innerHTML = region.value;

    const td4 = document.createElement("td");
    td4.innerHTML = Number(score.value);

    const delIcon = document.createElement("i");
    delIcon.classList.add("fa-solid", "fa-trash");
    delIcon.addEventListener("click", () => deltask(tr))


    const span = document.createElement("span");
    span.innerHTML = "+5"
    span.addEventListener("click", () => increase(td4))

    const span1 = document.createElement("span");
    span1.innerHTML = "-5"
    span1.addEventListener("click", () => decrease(td4))


    table.append(tr)
    tr.append(td1, td2, td3, td4, delIcon, span, span1)

    fullname.value = ""
    lastname.value = ""
    region.value = "Select Country"
    score.value = ""


}

function deltask(list) {
    list.remove()
}

function increase(plus) {
    plus.innerHTML = Number(plus.innerHTML) + 5
}

function decrease(less) {
    less.innerHTML = Number(less.innerHTML) - 5
}