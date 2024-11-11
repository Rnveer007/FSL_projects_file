// const icons = document.querySelectorAll(".accord h1 i");
// const paragraphs = document.querySelectorAll(".accord p");


// icons.forEach((icon) => icon.addEventListener("click", toggleContent));


// function toggleContent(e) {
//     const para = e.target.parentElement.nextElementSibling;
//     let eventIcon = e.target
//     if (para.classList.contains("active")) {

//         // hide paragraph
//         para.classList.remove("active");

//         // change the sign from minus to plus
//         eventIcon.classList.remove("fa-square-minus");
//         eventIcon.classList.add("fa-square-plus");
//     } else {
//         // close any curruntly open para, and change the sign to plus
//         paragraphs.forEach((para) => {
//             if (para.classList.contains("active")) {
//                 para.classList.remove("active");
//                 const sign = para.previousElementSibling.children[0];
//                 sign.classList.remove("fa-square-minus")
//                 sign.classList.add("fa-square-plus")
//             }
//         })

//         // show para
//         para.classList.add("active");
//         // change sign minus to minus
//         eventIcon.classList.remove("fa-square-minus")
//         eventIcon.classList.add("fa-square-plus")
//     }
// }






const icons = document.querySelectorAll(".accord h1 i");
const paragraph = document.querySelectorAll(".accord p");


icons.forEach((icon) => icon.addEventListener("click", toggleItem));

function toggleItem(event) {
    let para = event.target.parentElement.nextElementSibling;
    if (para.classList.contains("active")) {
        // hide para
        para.classList.remove("active");

        // change Sign
        event.target.classList.remove("fa-square-minus");
        event.target.classList.add("fa-square-plus");
    } else {
        paragraph.forEach((p) => {
            if (p.classList.contains("active")) {
                p.classList.remove("active");
    
                //  change sign
                let sign = p.previousElementSibling.children[0];
                sign.classList.remove("fa-square-minus");
                sign.classList.add("fa-square-plus");
            }
            // Show the clicked paragraph and change icon to minus

            para.classList.add("active");
            event.target.classList.remove("fa-square-minus");
            event.target.classList.add("fa-square-plus");
        })
    }
}
