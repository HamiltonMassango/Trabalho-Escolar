import Order from '../models/Order';
import User from '../models/User';

class OrderController {
  async store(req, res) {
    const user = await User.findByPk(req.userId);

    if (!user) return res.status(400).json({ error: 'User not exist !' });
    if (!user.cart) return res.status(400).json({ error: 'Cart not exist !' });

    const order = await Order.create({
      products: user.cart,
      idUSer: req.userId,
    });
    await user.update({ cart: null });
    return res.json(order);
  }
}

export default new OrderController();
