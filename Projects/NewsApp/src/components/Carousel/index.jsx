import { useEffect, useState } from 'react';
import './index.css'
import Carousel from 'react-bootstrap/Carousel';

function NewsCarousel() {
  const [news, setNews] = useState([])
  useEffect(() => {
    fetchNews()
  }, [])

  async function fetchNews() {
    try {
      const API_KEY = import.meta.env.VITE_NEWS_API_KEY
      const API_URL = `https://newsapi.org/v2/everything?apiKey=${API_KEY}&q=technology`

      const res = await fetch(API_URL)
      const data = await res.json()
      setNews(data.articles)
    } catch(error) {
      alert(error.message)
    }
  }

  return (
    <Carousel>
      {news.map((singleNews, index) => (
        <Carousel.Item key={index} interval={1000}>
          <img
            className="d-block news-image"
            src={singleNews.urlToImage}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>{singleNews.title}</h3>
            <p>{singleNews.description}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default NewsCarousel;