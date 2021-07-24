/* extractor.js
For the sake of this task imagine that the data structure of the parsing html is certain, so using it make an object containing title of the category, its description and items with their titles and descriptions.
*/
///// THE HTML STRUCTURE
//<!DOCTYPE html>
// <html lang="en">
// <head>
//   <script type="module" src="./extractor.js" defer></script>
//   <script type="module" src="./index.js" defer></script>
// </head>
// <body>
// <div class="content">
//   <h1>Category Name</h1>
//   <div class="description">Category Description</div>
//   <div class="links">
//     <div>
//       <h2><a href="#">Article Name 1</a></h2>
//       <p>Article Description 1</p>
//     </div>
//     <div>
//       <h2><a href="#">Article Name 2</a></h2>
//       <p>Article Description 2</p>
//     </div>
//   </div>
// </div>
// </body>
// </html>

///// PARSING
const extractor = (document) => {
  const root = document.querySelector('.content');
  const title = root.querySelector('h1').innerHTML;
  const description = root.querySelector('.description').innerHTML;
  const articles = Array.from(root.querySelectorAll('.links > div'));
  const items = articles.map(item => {
    let titleArticle = item.querySelector('h2 > a').innerHTML;
    let descrArticle = item.querySelector('p').innerHTML;
    return { title: titleArticle, description: descrArticle };
  })
  return { title, description, items };
}
export default extractor;
///// RESULT

