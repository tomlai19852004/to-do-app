import { response } from '../../utils';
// import * as db from '../../db';
import { addDutyService  } from './services/dutyService';

/**
 * Create duty controller function.
 *
 * @param {import('http').ServerRequest} req - The server request object.
 * @param {import('http').ServerResponse} res - The server response object.
 */
const createDuty = async (req: any, res: any) => {
    const rowModified = await addDutyService( req.body.name );
    const status_code = rowModified ? 200 : 404;
    const payload = rowModified ? { message: 'Duty created.' } : { error: 'Resources not found.' }
    response( res, { status: status_code, data: payload });
}

export default createDuty;