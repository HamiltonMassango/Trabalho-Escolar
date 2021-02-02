import Products from '../models/Products';

import * as yup from 'yup';

class ProductsController {
  async store(req, res) {
    const schema = yup.object().shape({
      name: yup.string().required(),
      url: yup.string().required(),
      descrition: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails ' });
    }

    const product = await Products.create(req.body);
    return res.status(200).json(product);
  }
  async index(req, res) {
    const products = await Products.findAll();
    return res.status(200).json(products);
  }
}

export default new ProductsController();
