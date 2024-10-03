// activities
    
let actCards = document.querySelectorAll(".main-section .main .proposition-cards .card .left")
let actCardsExit = document.querySelectorAll(".main-section .main .proposition-main .card-info-section .exit")

/// make  the  info card visible
actCards.forEach((e)=>e.addEventListener("click" , function(e){
        this.parentNode.children[0].classList.remove("hidden");
        console.log(this.parentNode)
}))
// hid  the  info card
actCardsExit.forEach((e)=>e.addEventListener("click" , function(e){
    this.parentNode.classList.add("hidden");
    console.log(this.parentNode)
}))
// activities

// other activities
    
let oactCards = document.querySelectorAll(".main-section .main .other-acts-cards .card .left")
let oactCardsExit = document.querySelectorAll(".main-section .main .other-acts-cards .card-info-section .exit")

/// make  the  info card visible
oactCards.forEach((e)=>e.addEventListener("click" , function(e){
        this.parentNode.children[0].classList.remove("hidden");
        console.log(this.parentNode)
}))
// hid  the  info card
oactCardsExit.forEach((e)=>e.addEventListener("click" , function(e){
    this.parentNode.classList.add("hidden");
    console.log(this.parentNode)
}))
// other activities


// administration
function openModal() {
document.getElementById('editModal').style.display = 'flex';
}

function closeModal() {
document.getElementById('editModal').style.display = 'none';
}

function openModalAdd(){
document.getElementById('AddModal').style.display = 'flex';
}

function closeModalAdd() {
document.getElementById('AddModal').style.display = 'none';
}
function deleteModal() {
document.getElementById('deleteModal').style.display = 'flex';
}
function closeModaldelete() {
document.getElementById('deleteModal').style.display = 'none';
}

// administration



//quiz&questions
function closeAddQuiz(){
    document.querySelector('.add-quiz').style.display = 'none';
}
function openAddQuiz(){
    document.querySelector('.add-quiz').style.display= 'flex';
}

function editmodal(){
    document.querySelector('.edit-quiz').style.display = 'flex';
}
function closeEditQuiz(){
    document.querySelector('.edit-quiz').style.display = 'none';
}
function closeAddCat(){
    document.querySelector('.add-cat').style.display = 'none';
}
function openAddCat(){
    document.querySelector('.add-cat').style.display= 'flex';
}


function closeEditCat(){
    document.querySelector('.edit-cat').style.display = 'none';
}
function openEditCat(){
    document.querySelector('.edit-cat').style.display= 'flex';
}
//quiz&questions



//Events Archive home

function openModalAddEvent(){
document.getElementById('AddeventModal').style.display = 'flex';
}

function closeModalAddEvent(){
document.getElementById('AddeventModal').style.display = 'none';
}

function openprofileModal() {
document.getElementById('profile-Modal').style.display = 'flex';
}
function closeprofileModal() {
document.getElementById('profile-Modal').style.display = 'none';
}

function openNoteModal() {
document.getElementById('NoteModal').style.display = 'flex';
}
function closeModalnote() {
document.getElementById('NoteModal').style.display = 'none';
}


//error sur cette code 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('uploadButton').addEventListener('click', function() {
        document.getElementById('imageUpload').click();
    });
});

//end  Events Archive home


//AI models

function openModalAI() {
document.getElementById('AddeAIModal').style.display = 'flex';
}
function closeModalAI() {
document.getElementById('AddeAIModal').style.display = 'none';
}

function EditAIModal(){
document.getElementById('EditAIModal').style.display = 'flex';
}
function CloseEditAIModal(){
document.getElementById('EditAIModal').style.display = 'none';
}

//dashboard
document.getElementById('seeAllBtndash').onclick = function() {
    document.getElementById('dash2Modal').style.display = 'flex';
};

document.getElementById('closeModaldash').onclick = function() {
    document.getElementById('dash2Modal').style.display = 'none';
};

document.getElementById('seeAllBtndash5').onclick = function() {
    document.getElementById('dash5Modal').style.display = 'flex';
};

document.getElementById('closeModaldash5').onclick = function() {
    document.getElementById('dash5Modal').style.display = 'none';
};


//dashboard