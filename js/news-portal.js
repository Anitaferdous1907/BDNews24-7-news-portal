const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data.news_category)
}
const displayNews = news => {
    console.log(news);

    const newsContainer = document.getElementById('news-categories-container');
    news.forEach(arr_item => {
        const newsNav = document.createElement('nav');
        newsNav.classList.add('nav');
        newsNav.innerHTML = `
        
        <pclass="nav-item" >
    <a onclick="loadNewsCatagory('${arr_item.category_id}')" class="nav-link" href="#">${arr_item.category_name}</a>

    </p>`;
        newsContainer.appendChild(newsNav);
    })
}
loadNews();


/* news 01 */

const loadNewsCatagory = async (id) => {
    const url = `https://openapi.programming-hero.com/api/news/category/${id}`

    const res = await fetch(url);
    const data = await res.json();
    displayNews01(data.data);


}


displayNews01 = news => {
    news.sort(function (a, b) {
        return (b.total_view) - (a.total_view);
    });
    const countNews = document.getElementById('count-news')
    countNews.innerHTML = `
    
    <h1> ${news.length} News Catagory Found </h1>

    `;

    const newsContainer01 = document.getElementById('news-categories-01');
    newsContainer01.innerHTML = ``;
    news.forEach(arr_item => {
        console.log(arr_item);
        const newsDiv = document.createElement('div');
        newsDiv.innerHTML = `
        <div class="card h-100">
        <img src="${arr_item.image_url}" class="card-img-top" alt="...">
        <div class="card-body mb-2">
          <h5 class="card-title">${arr_item.title}</h5>
          <p class="card-text">${arr_item.details.slice(0, 150)}...</p>
          <img class="rounded-circle w-25"src="${arr_item.author.img}"
          <p class="fst-italic"> ${arr_item.author.name}</p>
          <p> <i class="fa-regular fa-eye"></i> ${arr_item.total_view}</p>
          
          <button onclick="newsModalDetails" class="btn btn-primary"> <i class="fa-solid fa-arrow-right" data-bs-toggle="modal" data-bs-target="#newsModalDetails"></i></button>
        </div>
    </div>  

   
      `;


        newsContainer01.appendChild(newsDiv);
    });

}

loadNewsCatagory('08');


/* ------- modal ----- */
/* const loadNewsDetails = async id => {
    const url = `https://openapi.programming-hero.com/api/news/${news_id} `;
    const res = await fetch(url);
    const data = await res.json();
    displayNewsDetails(data.data);
}

const displayNewsDetails = news => {
    console.log(news);
    const modalTitle = document.getElementById('newsModalDetailsLabel');
    modalTitle.innerText = ;
    const newsDetails = document.getElementById('newsModalDetailsLabel');
    
    `;
}
 */



