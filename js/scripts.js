let width = screen.width;
let searchBlock = document.getElementById("mobileSearchBlock");
let searchInput = document.getElementById("mobileSearchInput");
if(width <= 768){
    mobileSearchMenu.onclick = () => searchBlock.style.zIndex = 1;
    searchInput.addEventListener("blur", function(event) {
        searchBlock.style.zIndex = -1;
    });
    searchInput.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            searchBlock.style.zIndex = -1;
        }
    });
}


