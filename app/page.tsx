
import products from './products/[id]/page.js';
export default function Home() {
  return (
    <div>
      <h1>Welcome to the E-commerce App</h1>
      <p>This is the home page.</p>
      <h2>This is help me for the making the e-comerce website.</h2>
      {products()}
    </div>
  );
} 
