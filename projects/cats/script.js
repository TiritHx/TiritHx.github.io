const addCatsImages = () => {
   fetch('https://api.thecatapi.com/v1/images/search?limit=10')
       .then(response => response.json())
       .then(data => {
            data.map(x => {
                let img = document.createElement("img");
                img.src = x.url;
                img.id = x.id;
                document.getElementById("cats").appendChild(img);
            });
       })
       .catch((error) => {
        console.error(error);
     });
};
if(window.innerWidth > 900) {
    addCatsImages();
}
addCatsImages();
document.getElementById("IwantCats").addEventListener("click", addCatsImages);
document.getElementById("cats").addEventListener("click", (e) => console.log(e.target));


// const addCatImage = () => {
//    fetch('https://api.thecatapi.com/v1/images/search')
//        .then(response => response.json())
//        .then(data => {
//            const imageUrl = data[0].url;
//            console.log(data)
//            const imageElement = document.createElement("img");
//            imageElement.src = imageUrl;
//            document.getElementById("cats").appendChild(imageElement);
//        });
// };
//let start = 0;
//switch(true){
//    case(innerWidth > 1300):
//        start = 30;
//        break;
//    case(innerWidth > 900):
//        start = 25;
//        break;
//    case(innerWidth > 600):
//        start = 20;
//        break;
//    default:
//        start = 15;
//        break;
//}
//Array(start).fill().forEach(addCatImage);
//document.getElementById("IwantCats").addEventListener("click", () => {
//    Array(10).fill().forEach(addCatImage);
//});