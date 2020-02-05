import * as Yup from 'yup';

import Customer from '../models/Customer';

class CustomerController {
  async index(req, res) {
    const customers = await Customer.findAll();

    return res.json(customers);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      id: Yup.number().required(),
      name: Yup.string().required(),
      responsible: Yup.string(),
      cnpj: Yup.string().min(14),
      cpf: Yup.string().min(11),
      contract_due: Yup.date().required(),
      comments: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const customerExist = await Customer.findOne({
      where: { id: req.body.id },
    });

    if (customerExist) {
      return res.status(400).json({ error: 'Customer already exists' });
    }

    const {
      id,
      name,
      responsible,
      cnpj,
      cpf,
      contract_due,
      comments,
    } = await Customer.create(req.body);

    return res.json({
      id,
      name,
      responsible,
      cnpj,
      cpf,
      contract_due,
      comments,
    });
  }
}

export default new CustomerController();
