import { Row, Col } from "react-bootstrap";
import { productsArray } from "../productsStore";

function Store() {
  return (
    <>
      <h1>Welcome to the store</h1>;
      <Row xs={1} md={3} className="g4">
        {productsArray.map((product, idx) => (
          <Col align="center" key={idx}>
            <h1>{product.title}</h1>
            <h2>{product.price}</h2>
          </Col>
        ))}
      </Row>
    </>
  );
}

export default Store;
