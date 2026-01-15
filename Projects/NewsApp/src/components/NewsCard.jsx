import { useEffect } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchNews } from "../store/actions/news";
import { useParams } from "react-router";

function NewsCard(props) {
  const news = useSelector((store) => store.news.articles)
  const dispatch = useDispatch()
  const { category } = useParams()

  const fallbackImage ='https://images.unsplash.com/photo-1579532536935-619928decd08?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  useEffect(() => {
    dispatch(fetchNews(category))
  }, [category])

  return (
    <Container>
      <Row>
        {news.map((singleNews, index) => (
          <Col className="my-2" key={index}>
            <Card style={{ width: '18rem' }}>
              <Card.Img 
                variant="top" 
                src={singleNews.urlToImage || fallbackImage} 
                style={{ height: '160px'}}
              />
              <Card.Body>
                <Card.Title
                  style={{ minHeight: '96px' }}
                >
                  {singleNews.title && singleNews.title.length > 90 
                    ? `${singleNews.title.slice(0, 90)}...`
                    : singleNews.title
                  }
                </Card.Title>
                <Card.Text
                  style={{ minHeight: '120px' }}
                >
                  {singleNews.description && singleNews.description.length > 150 
                    ? `${singleNews.description.slice(0, 150)}...`
                    : singleNews.description
                  }
                </Card.Text>
                <a 
                  href={singleNews.url}
                  className="btn btn-primary w-100"
                  target="_blank"
                >Read more from the source</a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NewsCard;