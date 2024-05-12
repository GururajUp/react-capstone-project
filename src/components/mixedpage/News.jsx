import { useEffect, useState } from "react";

export default function News() {
  const [news, setNews] = useState(null);
  useEffect(() => {
    fetch(
      "https://api.webz.io/newsApiLite?token=9480d3af-803a-4964-b858-cc3cda51ca4c&q=songs"
    )
      .then((response) => response.json())
      .then((data) => setNews(data));
  }, []);
  function createMarkup() {
    return { __html: news ? news.posts[0].highlightText : <h1>Loading...</h1> };
  }
  const random = Math.floor(Math.random() * 100);

  return (
    <div>
      <h1>News</h1>
      {news ? (
        <div>
          <p> {news.posts[0].title}</p>
          {/* <p dangerouslySetInnerHTML={_html:news.posts[0].highlightText}></p> */}
          <p dangerouslySetInnerHTML={createMarkup()}></p>
          <img src={news.posts[0].thread.main_image} alt="news" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}