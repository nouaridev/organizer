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




// administration
function openModal() {
document.getElementById('editModal').style.display = 'block';
}

function closeModal() {
document.getElementById('editModal').style.display = 'none';
}

function openModalAdd(){
document.getElementById('AddModal').style.display = 'block';
}

function closeModalAdd() {
document.getElementById('AddModal').style.display = 'none';
}
function deleteModal() {
document.getElementById('deleteModal').style.display = 'block';
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
    document.querySelector('.add-quiz').style.display= 'block';
}

function closeAddCat(){
    document.querySelector('.add-cat').style.display = 'none';
}
function openAddCat(){
    document.querySelector('.add-cat').style.display= 'block';
}


function closeEditCat(){
    document.querySelector('.edit-cat').style.display = 'none';
}
function openEditCat(){
    document.querySelector('.edit-cat').style.display= 'block';
}
//quiz&questions



//Events Archive home

function openModalAddEvent(){
document.getElementById('AddeventModal').style.display = 'block';
}

function closeModalAddEvent(){
document.getElementById('AddeventModal').style.display = 'none';
}

function openprofileModal() {
document.getElementById('profile-Modal').style.display = 'block';
}
function closeprofileModal() {
document.getElementById('profile-Modal').style.display = 'none';
}

function openNoteModal() {
document.getElementById('NoteModal').style.display = 'block';
}
function closeModalnote() {
document.getElementById('NoteModal').style.display = 'none';
}


document.getElementById('uploadButton').addEventListener('click', function() {
document.getElementById('imageUpload').click();
});

//end  Events Archive home


//AI models

function openModalAI() {
document.getElementById('AddeAIModal').style.display = 'block';
}
function closeModalAI() {
document.getElementById('AddeAIModal').style.display = 'none';
}

function EditAIModal(){
document.getElementById('EditAIModal').style.display = 'block';
}
function CloseEditAIModal(){
document.getElementById('EditAIModal').style.display = 'none';
}

