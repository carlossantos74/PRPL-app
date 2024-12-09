import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

// Dynamically load the related products component
const RelatedProducts = dynamic(() => import('../../components/RelatedProducts'), {
  loading: () => <p>Loading related products...</p>
});

export async function getServerSideProps({ params }) {
  // Fetch product details by ID
  const product = { id: params.id, name: 'Coffee Mug', description: 'A nice mug.' };
  return { props: { product } };
}

export default function ProductPage({ product }) {
  const router = useRouter();
  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      
      {/* Only load the RelatedProducts component on the client side when needed */}
      {router.isFallback ? <p>Loading...</p> : <RelatedProducts productId={product.id} />}
    </div>
  );
}