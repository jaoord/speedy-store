import { CustomerDTO, CustomerGroupDTO } from "@medusajs/framework/types";

export interface CompanyDTO {
  id: string;
  name: string;
  phone: string;
  email: string;
  address: string | null;
  city: string | null;
  postcode: string | null;
  country: string | null;
  logo_url: string | null;
  employees?: EmployeeDTO[];
  customer_group?: CustomerGroupDTO;
  created_at: Date;
  updated_at: Date;
}

export interface EmployeeDTO extends CustomerDTO {
  id: string;
  is_admin: boolean;
  company_id: string;
  company?: CompanyDTO;
  customer?: CustomerDTO;
  created_at: Date;
  updated_at: Date;
}