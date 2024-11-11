let fName = document.querySelector("#firstName");
let lName = document.querySelector("#lastName");
let rigion = document.querySelector("#countries");
let score = document.querySelector("#score")
let addBtn = document.querySelector(".box button");
let updateResult = document.querySelector("#show_result tbody")

// addTask function will be triggered when clicking on addBtn
addBtn.addEventListener("click", addTask);

function addTask() {
    // addTask function will be triggered when clicking on addBtn
    let player = {
        my_fName: fName.value,
        my_lName: lName.value,
        my_country: rigion.value,
        my_score: Number(score.value),
    };
    
    let tr = document.createElement("tr");
    let fName_td = document.createElement('td');
    fName_td.innerHTML = player.my_fName;
    
    let lName_td = document.createElement('td');
    lName_td.innerHTML = player.my_lName;
    
    let rigion_td = document.createElement('td');
    rigion_td.innerHTML = player.my_country;
    
    let score_td = document.createElement('td');
    score_td.classList = "score";
    score_td.innerHTML = player.my_score;
    
    let dltIcon = document.createElement("i");
    dltIcon.classList.add("fa-solid", "fa-trash");
    dltIcon.style.color = "red";
    
    // dltList function will be trigger at the time of click on dltIcon
    dltIcon.addEventListener("click", () => dltList(tr));
    
    let incrScore = document.createElement("button");
    incrScore.innerHTML = " +5 "
    
    // scoreBadhao function will be trigger at the time of click on innerScore
    incrScore.addEventListener("click", () => scoreBadhao(score_td));
    
    let DecrScore = document.createElement("button");
    DecrScore.innerHTML = " -5 "
    
    // scoreGhatao function will be trigger at the time of click on decrScore
    DecrScore.addEventListener("click", () => scoreGhatao(score_td));
    
    // append every created td in tr
    tr.append(fName_td, lName_td, rigion_td, score_td, dltIcon, incrScore, DecrScore);
    
    updateResult.append(tr);
    
    // clear every input after creating td
    fName.value = "";
    fName.focus();  // added focus on fname input
    lName.value = "";
    rigion.value = "Select Country";
    score.value = "";
    sorting()
}

// dltList function will be delete the entire td from tr
function dltList(list) {
    list.remove();
}

// scoreBadhao funcion will be add(plus) 5 more number in current score in Leader Board
function scoreBadhao(score) {
    score.innerHTML = Number(score.innerHTML) + 5;
    sorting();
}

// scoreGhatao funcion will be remove(minus) 5 number current from score in Leader Board    
function scoreGhatao(score) {
    score.innerHTML = Number(score.innerHTML) - 5;
    sorting();
}


function sorting(){
    const rows = Array.from(updateResult.querySelectorAll("tr"));
    rows.sort((a,b) => {
        const scoreA = Number(a.querySelector(".score").innerHTML);
        const scoreB = Number(b.querySelector(".score").innerHTML);
        return scoreB - scoreA;
    });

        // Clear the table before re-appending sorted rows
        updateResult.innerHTML = ""; // Clears all existing rows

    rows.forEach(row => updateResult.appendChild(row));
}





