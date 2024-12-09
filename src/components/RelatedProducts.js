import { useEffect, useState } from 'react';

export default function RelatedProducts({ productId }) {
  const [related, setRelated] = useState([]);

  useEffect(() => {
    // In a real scenario, you'd fetch data from an API.
    // Here, we simulate this with a hard-coded list.
    // Let's pretend related products differ based on the product ID.
    const allProducts = [
      { id: '1', name: 'Coffee Beans', price: '$12' },
      { id: '2', name: 'Tea Leaves', price: '$8' },
      { id: '3', name: 'Sugar Pack', price: '$2' },
      { id: '4', name: 'Creamer', price: '$4' }
    ];

    // A simplistic "related" logic: 
    // If productId is even, pick items 1 & 2; if odd, pick items 3 & 4.
    const relatedItems = 
      parseInt(productId, 10) % 2 === 0 
        ? allProducts.filter(p => p.id === '1' || p.id === '2')
        : allProducts.filter(p => p.id === '3' || p.id === '4');

    // Simulate a delay to reflect a network request.
    const timeoutId = setTimeout(() => {
      setRelated(relatedItems);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [productId]);

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Related Products</h2>
      {related.length === 0 ? (
        <p>Loading related products...</p>
      ) : (
        <ul>
          {related.map(item => (
            <li key={item.id}>{item.name} - {item.price}</li>
          ))}
        </ul>
      )}
    </div>
  );
}