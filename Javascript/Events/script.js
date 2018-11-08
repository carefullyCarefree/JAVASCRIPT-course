// var firstLi = document.querySelector("li");
//
// // when you hover, use mouseover
// firstLi.addEventListener("mouseover", function(){
//     firstLi.classList.add("red");
// });
// firstLi.addEventListener("mouseout", function(){
//       firstLi.classList.remove("red");
// });

var lis = document.querySelectorAll("li");
//can't forget to reference [i] in the logic statement!!!
//Also don't forget the helpfulness of "this"
for(var i = 0; i < lis.length; i++){
  lis[i].addEventListener("mouseover", function(){
      this.classList.add("red");
  });
  lis[i].addEventListener("mouseout", function(){
      this.classList.remove("red");
  });
  lis[i].addEventListener("click", function(){
      if(this.style.color !== "grey"){
        this.style.color = "grey";
      } else {
        this.style.color = "black";
      }

  });
}
