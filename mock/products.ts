import { Request, Response } from 'express';

const getProducts = (req: Request, res: Response) => {
  res.json([
    {
      id: '000000001',
      title: 'iPhone 13',
      brand: 'Apple',
      price: '2017-08-09',
      rating: '5',
    },
  ]);
};

export default {
  'GET /api/products': getProducts,
};
