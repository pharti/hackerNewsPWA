import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col, Card } from "react-bootstrap";
function App() {
  const [news, setNews] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?tags=front_page"
        );
        if (response && response.data && response.data.hits)
          setNews(response.data.hits);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);
  console.log("news", news);
  return (
    <div className="App">
      <h1>Hacker News</h1>
      {news &&
        news.map((item, index) => {
          return (
            <Container className="p-3">
              <Row>
                <Col sm={8}>
                  <h4>{item.title}</h4>
                  <a href={item.url}>{item.url}</a>
                </Col>
              </Row>
            </Container>
          );
        })}
    </div>
  );
}

export default App;
