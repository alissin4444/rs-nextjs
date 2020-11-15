import { useState, useEffect } from "react";

import { Title } from "../styles/pages/Home";

export default function Home() {
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/recommended").then((response) => {
      response.json().then((data) => setRecommendedProducts(data));
    });
  }, []);

  return (
    <div>
      <Title>Hello World</Title>
      {recommendedProducts.map((product) => (
        <p key={product.id}>{product.title}</p>
      ))}
    </div>
  );
}
