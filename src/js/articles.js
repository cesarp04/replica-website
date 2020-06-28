const div = document.getElementById("articles");
const lorem = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam laborum, dolore velit rerum officia eaque. Optio commodi, reiciendis saepe qui non totam corporis assumenda deserunt enim. Officiis, distinctio! Consequatur, adipisci?`;
const read = "Leer Mas";
const authorArticles = "Ernesto G. Bustamante";

div.addEventListener("click", () => {
  console.log("parent");
});

const articles = [
  {
    title: "Las bondades de HTML5",
    body: `${lorem}`,
    mas: `${read}`,
  },
  {
    title: "HTML5 en dispositivos moviles",
    body: `${lorem}`,
    mas: `${read}`,
  },
  {
    title: "Internet Explorer es una basura",
    body: `${lorem}`,
    mas: `${read}`,
  },
];
const author = [
  {
    fecha: `El 29 de octubre de 2012 <br/> Por <span>${authorArticles}</span>`,
    commentary: "3 comentarios",
  },
  {
    fecha: `El 28 de octubre de 2012 <br/> Por <span>${authorArticles}</span>`,
    commentary: "21 comentarios",
  },
  {
    fecha: `El 27 de octubre de 2012 <br/> Por <span>${authorArticles}</span>`,
    commentary: "6 comentarios",
  },
  {
    fecha: `El 26 de octubre de 2012 <br/> Por <span>${authorArticles}</span>`,
    commentary: "2 comentarios",
  },
];

for (let i = 0; i < articles.length; i++) {
  const divArticlesAuthor = document.createElement("div");
  divArticlesAuthor.classList.add("articles__author");
  const fecha = document.createElement("p");
  const comment = document.createElement("p");
  fecha.innerHTML = author[i].fecha;
  comment.innerHTML = author[i].commentary;

  divArticlesAuthor.appendChild(fecha);
  divArticlesAuthor.appendChild(comment);

  div.appendChild(divArticlesAuthor);

  const divArticleDescription = document.createElement("div");
  divArticleDescription.classList.add("articles__description");
  const h3 = document.createElement("h3");
  h3.classList.add("articles__description-title");
  const p = document.createElement("p");
  const span = document.createElement("span");
  h3.innerHTML = articles[i].title;
  p.innerHTML = articles[i].body;
  span.innerHTML = articles[i].mas;

  divArticleDescription.appendChild(h3);
  divArticleDescription.appendChild(p);
  divArticleDescription.appendChild(span);

  divArticleDescription.addEventListener("click", () => {
    event.stopPropagation();
    console.log("i'm not propagating", i);
  });
  div.appendChild(divArticleDescription);
}
