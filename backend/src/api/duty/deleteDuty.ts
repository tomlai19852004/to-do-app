import { response } from '../../utils';
import * as db from '../../db';
import { removeDutyService } from './services/dutyService';


/**
 * Delete duty controller function.
 *
 * @param {import('http').ServerRequest} req - The server request object.
 * @param {import('http').ServerResponse} res - The server response object.
 */
const deleteDuty = async (req: any, res: any) => {
    if( req.params && req.params.id ){
        const rowModified = await removeDutyService( req.params.id );
        // const result = await db.query('UPDATE duty SET deleted=$1, modified_at=now() WHERE id=$2', [true, req.params.id]);
        // console.log( result );
        const status_code = rowModified ? 200 : 404;
        const payload = rowModified ? { message: 'Duty deleted.' } : { error: 'Resources not found.' }
        response( res, { status: status_code, data: payload });
    } else {
        response( res, { status: 400, data: { error: 'Missing required parameters.' } });
    }
}

export default deleteDuty;