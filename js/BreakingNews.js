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
          <img src="..." class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          </div>
      </div>
    
    `;
        newsContainer.appendChild(newsDiv);
    });

}
loadNews01();