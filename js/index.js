let add_card = document.querySelector('.fab');
let roar=document.querySelector(".roar");
let cards=document.querySelector(".cards");
let baby=document.querySelector(".image_primary");




roar.addEventListener("click",ror_pls);
add_card.addEventListener("click",add_cards);

function add_cards(){
    let card =document.createElement("div");
    card.classList.add("animated");
    card.classList.add("flipInX");
    card.classList.add("inner-card");
    card.innerHTML=`
        
    `
}
function ror_pls(){
    if(cards.childElementCount==0)
    {
        return;
    }
    else{

    }
}