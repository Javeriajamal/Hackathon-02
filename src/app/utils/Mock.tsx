import { IProduct } from '@/app/utils/Types';

const Products: IProduct[] = [
  {
    _id: '1',
    title: 'SleekSpin',
    description: 'A sleek and modern spin for your workspace.',
    price: 50,
    image: ['image1.jpg'],
    slug: 'sleekspin',
    qty: 10,
    discount: 10,
    id: '1',          // If needed, this can be optional
    category: 'Office' // Add category if required
  },
  {
    _id: '2',
    title: 'Modern Cozy',
    description: 'Cozy and modern chair for comfort.',
    price: 70,
    image: ['image2.jpg'],
    slug: 'modern-cozy',
    qty: 5,
    discount: 0,
    id: '2',
    category: 'Furniture'  // Add category if required
  },
  // More products here...
];

export default Products;
