import { useEffect, useState } from "react";
import './News.css'

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
    <div className="header">
      {news ? (
        <div>
          <p style={{color:'white'}}> {news.posts[0].title}</p>
          {/* <p dangerouslySetInnerHTML={_html:news.posts[0].highlightText}></p> */}
          <img style={{width:'300px',height:'300px'}} src={news.posts[0].thread.main_image} alt="news" />
          <p style={{color:'white'}} dangerouslySetInnerHTML={createMarkup()}></p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}