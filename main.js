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


