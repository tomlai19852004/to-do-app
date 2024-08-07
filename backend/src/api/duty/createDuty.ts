import { response } from '../../utils';
// import * as db from '../../db';
import { addDutyService  } from './services/dutyService';

const createDuty = async (req: any, res: any) => {
    // const result = await db.query('INSERT INTO duty (name) values ($1)', [req.body.name]);
    // console.log( result );
    const rowModified = await addDutyService( req.body.name );
    const status_code = rowModified ? 200 : 404;
    const payload = rowModified ? { message: 'Duty created.' } : { error: 'Resources not found.' }
    response( res, { status: status_code, data: payload });
}

export default createDuty;