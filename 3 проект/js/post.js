document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main');
    const urlParams = new URLSearchParams(window.location.search);
    const articleData = urlParams.get('article');

    if (articleData) {
        const article = JSON.parse(decodeURIComponent(articleData));
        const imageUrl = article.multimedia && article.multimedia.length > 0 ? article.multimedia[0].url : "images/Img.svg";

        main.innerHTML = `
        
        <div class="newsfill-left">
            <div class="newsfill-left-frame">
                <div class="newsfill-left-frame-info-top">
                    <div class="author-image"><img src="${imageUrl}" alt="img"></div>
                    <div class="newsfill-left-frame-info-top-info">
                        <p class="author-name">${article.byline}</p>
                        <div class="newsfill-left-frame-info-top-info-texts">
                            <p>${new Date(article.created_date).toLocaleDateString()}</p>
                            <p>·</p>
                            <p>12 min read</p>
                            <p>·</p>
                            <p>Member-only</p>
                        </div>
                    </div>
                </div>
                <div class="newsfill-left-frame-logos">
                    <div class="newsfill-left-frame-logos-actions">
                        <div class="newsfill-left-frame-logos-actions-logo">
                            <img src="logos/LinkedIn.svg" alt="linked">
                        </div>
                        <div class="newsfill-left-frame-logos-actions-logo">
                            <img src="logos/Facebook Circled.svg" alt="facebook">
                        </div>
                        <div class="newsfill-left-frame-logos-actions-logo">
                            <img src="logos/Twitter.svg" alt="twiter">
                        </div>
                    </div>
                </div>
            </div>
            <div class="news-text">
              <p>${article.title}</p>
              <p>${article.abstract}</p>
            </div>
            <div class="big-img">
                <img src="${imageUrl}" alt="img">
            </div>
            <div class="news-subhead">
              <p>Subheader</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque, molestiae magni animi debitis modi nihil, eligendi, soluta aspernatur delectus est sed laboriosam labore amet at! Omnis pariatur sit temporibus voluptatum.
              Reiciendis provident natus fuga atque dicta, impedit nulla aperiam enim, iste excepturi distinctio totam minima voluptatem beatae dolorem aliquam odit temporibus porro, recusandae a ad vero ex corrupti. Minima, hic?</p>
            </div>
            <div class="news-actions">
              <div class="news-action-infos">
                <div class="news-action-state">
                  <div class="icon-state"><img src="logos/Heart.svg" alt="like"></div>
                  <p>180</p></div>
                <div class="news-action-state">
                  <div class="icon-state"><img src="logos/Speech Bubble.svg" alt="coms"></div>
                  <p>12</p>
                </div>
              </div>
              <div class="news-action-second">
                <img src="logos/Bookmark.svg" alt="bookmark">
              </div>
            </div>
        </div>
        `;
    }
});




{/* <div class="post">
<div class="post-header">
    <img src="${imageUrl}" alt="Article Image" class="post-image">
    <div class="post-info">
        <p>${article.byline}</p>
        <p>${new Date(article.created_date).toLocaleDateString()}</p>
    </div>
</div>
<h1>${article.title}</h1>
<p>${article.abstract}</p>
<p>${article.lead_paragraph}</p>
</div> 
<div class="newsfill-left">
<div class="newsfill-left-frame">
    <div class="newsfill-left-frame-info-top">
        <img src="${imageUrl}" alt="img">
        <div class="newsfill-left-frame-info-top-info">
            <p>Authors Name</p>
            <div class="newsfill-left-frame-info-top-info-texts">
                <p>7 july</p>
                <p>·</p>
                <p>12 min read</p>
                <p>·</p>
                <p>Member-only</p>
                
                <img style ="width: 50px;" src="${imageUrl}">
                <p>$${article.byline}</p>
                <p>in</p>
                <p>Topics Name</p>
                <p>·</p>
                <p>${new Date(article.created_date).toLocaleDateString()}</p>
            </div>
        </div>
    </div>
    <div class="newsfill-left-frame-logos">
        <div class="newsfill-left-frame-logos-actions">
            <div class="newsfill-left-frame-logos-actions-logo">
                <img src="logos/LinkedIn.svg" alt="linked">
            </div>
            <div class="newsfill-left-frame-logos-actions-logo">
                <img src="logos/Facebook Circled.svg" alt="facebook">
            </div>
            <div class="newsfill-left-frame-logos-actions-logo">
                <img src="logos/Twitter.svg" alt="twiter">
            </div>
        </div>
    </div>
</div>
<div class="news-text"></div>
</div> */}