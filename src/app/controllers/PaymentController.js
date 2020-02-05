import * as Yup from 'yup';

import Payment from '../models/Payment';
import Customer from '../models/Customer';

class PaymentController {
  async index(req, res) {
    const payments = await Payment.findAll();

    return res.json(payments);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      customer_id: Yup.number().required(),
      due_date: Yup.date().required(),
      paid_at: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const customerExist = await Customer.findOne({
      where: { id: req.body.customer_id },
    });

    if (!customerExist) {
      return res.status(400).json({ error: "This customer ID doesn't exists" });
    }

    const { customer_id, due_date, paid_at } = await Payment.create(req.body);

    return res.json({
      customer_id,
      due_date,
      paid_at,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      paid_at: Yup.date().required(),
      due_date: Yup.date(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const payment = await Payment.findByPk(req.body.id);

    await payment.update(req.body);

    return res.json(payment);
  }
}

export default new PaymentController();
