var slicedMovies = movies.slice(4,24); // Bu Yoda etilvoti kinoni birinchi ontaligini kesib oladi

var elWrapper = document.querySelector(".card__wrapper");


function renderMovies(array, wrapper) {    

    wrapper.innerHTML = null

    for (var item of array) {
              // heading h5
              var newH5 = document.createElement("h5");
              newH5.textContent = item.Title;
              newH5.classList = "card-title d-inline-block text-truncate";
             
              // card-body div 
              var newWrapperDiv = document.createElement("div");
              newWrapperDiv.classList = "card-body";
              newWrapperDiv.appendChild(newH5);
          
              // img
              var newImg = document.createElement("img");
              newImg.src = `https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`
              newImg.classList = "card-img-top"
          
              // card h-100
              var newDivCard = document.createElement("div");
              newDivCard.classList = "card h-100";
              newDivCard.appendChild(newImg);
              newDivCard.appendChild(newWrapperDiv)
          
              // Card wrapper
              var newCardWrapper = document.createElement("div");
              newCardWrapper.classList = "col mb-5";
          
              newCardWrapper.appendChild(newDivCard);
              
              wrapper.appendChild(newCardWrapper);
            //   console.log("item");
    }
}

renderMovies(slicedMovies, elWrapper)


// console.log(newUl);
