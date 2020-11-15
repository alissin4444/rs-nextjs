import { GetStaticProps } from "next";

interface IProduct {
  id: number;
  title: string;
}

interface Top10Props {
  products: IProduct[];
}

export default function Top10({ products }) {
  return (
    <div>
      <h1>Top 10</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<Top10Props> = async (context) => {
  const response = await fetch("http://localhost:3333/products");
  const products = await response.json();

  return {
    props: {
      products,
    },
    revalidate: 5,
  };
};
