const loadNews = async () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    const res = await fetch(url);
    const data = await res.json();
    displayNews(data.data.news_category)
}
const displayNews = news => {
    //console.log(news);

    const newsContainer = document.getElementById('news-categories-container');
    news.forEach(arr_item => {
        const newsNav = document.createElement('nav');
        newsNav.classList.add('nav');
        newsNav.innerHTML = `
        
        <li class="nav-item">
    <a class="nav-link" href="#">${arr_item.category_name}</a>
</li>
    `;
        newsContainer.appendChild(newsNav);
    })
}
loadNews();


/* news 01 */

const loadNews01 = async () => {
    const url = `https://openapi.programming-hero.com/api/news/category/01`
    const res = await fetch(url);
    const data = await res.json();
    displayNews01(data.data);
}

displayNews01 = news => {
    //console.log(phones)
    const newsContainer01 = document.getElementById('news-categories-01');
    news.forEach(arr_item => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('col');
        newsDiv.innerHTML = `
        
        <div class="card h-100">
          <img src="${arr_item.image_url}" class="card-img-top" alt="...">
          <div class="card-body mb-2">
            <h5 class="card-title">${arr_item.title}</h5>
            <p class="card-text">${arr_item.details.slice(0, 70)}...</p>
            <img class="rounded-circle w-25"src="${arr_item.author.img}"
            <p class="fst-italic"> ${arr_item.author.name}</p>
            <p> <i class="fa-regular fa-eye"></i> ${arr_item.total_view}</p>

            <button onclick="" class="btn btn-primary"> <i class="fa-solid fa-arrow-right"></i></button>
          </div>
      </div>
    
    `;
        newsContainer01.appendChild(newsDiv);
    });

}
loadNews01();

/* ------- modal ----- */

