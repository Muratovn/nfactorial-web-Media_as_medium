document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');

    function mediaUrl(article) {
        if (article.multimedia && article.multimedia.length > 0) {
            return article.multimedia[0].url;
        } else {
            return "images/Img.svg";
        }
    }

    function getTopStories() {
        fetch('https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=o31G1KOG06lYvAiTP5ZG6vPACFMtOglA')
        .then(response => response.json())
        .then(data => {
            const articles = data.results;

            articles.forEach((article, index) => {
                if (index <= 2) {
                    const imageUrl = mediaUrl(article);
                    const articleData = encodeURIComponent(JSON.stringify(article));

                    main.innerHTML += `
                    <div class="news-list-news">
                        <div class="news-left">
                            <div class="news-left-top">
                                <div class="news-left-top-top">
                                    <div class="author-image"><img src="${imageUrl}" alt="Article Image"></div>
                                    <p>${article.byline} </p>
                                    <p>in</p>
                                    <p>Topics Name</p>
                                    <p>·</p>
                                    <p>${new Date(article.created_date).toLocaleDateString()}</p>
                                </div>
                                <div class="news-left-top-text">
                                    <a href="post.html?article=${articleData}"><p class="news-left-top-text-them">${article.title}</p></a>
                                    <p class="news-left-top-text-text">${article.abstract}</p>
                                </div>
                            </div>
                            <div class="news-left-infobottom">
                                <div class="infobottom-info">
                                    <div class="infobottom-info-buttom">
                                        <p>Java Script</p>
                                    </div>
                                    <p>12 min read</p>
                                    <p>·</p>
                                    <p>Selected for you</p>
                                </div>
                                <div style="display: flex; align-items: flex-start; gap: 14px;">
                                    <div class="cube"></div>
                                    <div class="cube"></div>
                                    <div class="cube"></div>
                                </div>
                            </div>
                        </div>
                        <div class="news-img">
                            <img src="${imageUrl}" alt="Article Image">
                        </div>
                    </div>
                    `;
                }
            });
        })
        .catch(e => console.log(e));
    }

    getTopStories();
});
