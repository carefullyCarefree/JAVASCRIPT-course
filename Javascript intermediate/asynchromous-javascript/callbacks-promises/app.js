//
// function getRecipe() {
//     setTimeout(() => {
//         const recipeID = [290, 242, 123, 563];
//         console.log(recipeID);
//
//         setTimeout((id) => {
//             const recipe = {title: 'Cookie dough', publisher: 'Bill'};
//             console.log(`${id}: ${recipe.title}`);
//
//             setTimeout(publisher => {
//                 const recipe2 = {title: 'Pizza', publisher: 'Bill'};
//                 console.log(recipe);
//             }, 1500, recipe.publisher);
//
//         }, 1000, recipeID[2]);
//     }, 1500);
// }
// getRecipe();



const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([290, 242, 123, 563]);
    }, 1000);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Cookie dough', publisher: 'Bill'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID);
    });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
     setTimeout(pub => {
         const recipe = {title: 'Pizza', publisher: 'Bill'};
         resolve(`${pub}: ${recipe.title}`)
     }, 1500, publisher);
  });
};

getIDs
.then(IDs => {
   console.log(IDs);
   return getRecipe(IDs[2]);
})
.then(recipe => {
    console.log(recipe);
    return getRelated('Bill');
})
.then(pubRecipe => {
    console.log(pubRecipe);
})
.catch(error => {
    console.log(error);
});
