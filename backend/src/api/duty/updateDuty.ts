import { response } from '../../utils';
// import * as db from '../../db';
import { modifyDutyService } from './services/dutyService';

/**
 * Update duty controller function.
 *
 * @param {import('http').ServerRequest} req - The server request object.
 * @param {import('http').ServerResponse} res - The server response object.
 */
const updateDuty = async (req: any, res: any) => {
    if( req.params && req.params.id ){
        const rowModified = await modifyDutyService( req.params.id, req.body.name );
        const status_code = rowModified ? 200 : 404;
        const payload = rowModified ? { message: 'Duty updated.' } : { error: 'Resources not found.' }
        response( res, { status: status_code, data: payload });
    } else {
        response( res, { status: 400, data: { error: 'Missing required parameters.' } });
    }
}

export default updateDuty;