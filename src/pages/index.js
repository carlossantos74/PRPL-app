import Link from 'next/link';

export async function getServerSideProps() {
  // Simulate fetching products from an API
  const products = [
    { id: '1', name: 'Coffee Mug', price: '$10' },
    { id: '2', name: 'Notebook', price: '$5' },
    { id: '3', name: 'Pen Set', price: '$3' }
  ];

  return { props: { products } };
}

export default function Home({ products }) {
  return (
    <div>
      <h1>Welcome to the Store</h1>
      <ul>
        {products.map(p => (
          <li key={p.id}>
            <Link href={`/product/${p.id}`}>
              {p.name} - {p.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}