import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";
import ProductCard from "../components/ProductCard";



function Store() {
  return (
    <>
      <h1>Welcome to the store</h1>
      <br></br>
      <br></br>
      <br></br>
      <Row xs={1} md={3} className="g4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
