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
