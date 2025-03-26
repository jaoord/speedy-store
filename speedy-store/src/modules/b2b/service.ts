import { MedusaService } from "@medusajs/framework/utils";
import { Company, Employee } from './models';

class B2bModuleService extends MedusaService({
    Company,
    Employee,
}) {}

export default B2bModuleService;