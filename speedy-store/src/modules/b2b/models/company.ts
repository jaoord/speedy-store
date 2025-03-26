import { model } from '@medusajs/framework/utils';
import { Employee } from './employee';

export const Company = model.define("company", {
    id: model
      .id({
        prefix: "comp",
      })
      .primaryKey(),
    name: model.text(),
    email: model.text(),
    phone: model.text().nullable(),
    address: model.text().nullable(),
    postcode: model.text().nullable(),
    city: model.text().nullable(),
    country: model.text().nullable(),
    logo_url: model.text().nullable(),
    credit_limit: model.number().default(0),
    payment_term: model.number().default(30),    
    employees: model.hasMany(() => Employee),
  });