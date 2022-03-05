//Navbar mobile search scripts start
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
//Navbar mobile search scripts END

//price range start
var slider = document.getElementById("priceRange");
var output = document.getElementById("priceValue");
output.innerHTML = slider.value;
slider.oninput = function() {
  output.innerHTML = this.value;
}
//price range end

//product filters start
function toggleFilter() {
    var x = document.getElementById("productsFilter");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  //product filters end
  
  function redirectPage(page){
   window.location.href = page;
  }


