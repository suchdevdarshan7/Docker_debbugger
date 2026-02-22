import express from 'express'
const router = express.Router();

import getProducts from './../controller/products.controller.js';
router.get('/', getProducts);

export default router;

