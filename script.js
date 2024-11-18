let pI = document.getElementById("personalInfo");
let edu = document.getElementById("education")
let sk = document.getElementById("skills")
let wE = document.getElementById("workExperience")


document.getElementById("navbtn1id").addEventListener("click",()=>{
    pI.style.display = "block";
    edu.style.display = "none";
    sk.style.display = "none";
    wE.style.display = "none";

})


document.getElementById("navbtn2id").addEventListener("click",()=>{
    pI.style.display = "none";
    edu.style.display = "block";
    sk.style.display = "none";
    wE.style.display = "none";
})

document.getElementById("navbtn3id").addEventListener("click",()=>{
    pI.style.display = "none";
    edu.style.display = "none";
    sk.style.display = "block";
    wE.style.display = "none";
})

document.getElementById("navbtn4id").addEventListener("click",()=>{
    pI.style.display = "none";
    edu.style.display = "none";
    sk.style.display = "none";
    wE.style.display = "block";
})