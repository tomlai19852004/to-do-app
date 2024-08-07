import { response } from '../../utils';
// import * as db from '../../db';
import { getDutyService, getDutiesService } from './services/dutyService';

const getDuty = async ( req: any, res: any ) => {
    // console.log( req.query );
    // console.log( req.params );

    if( req.params && req.params.id ){
        // const result = await db.query('SELECT * FROM duty WHERE id=$1 and deleted=false', [req.params.id]);
        // const response_payload = result.rows.length ? result.rows[0] : {};
        const response_payload = await getDutyService(req.params.id);
        response( res, { status: 200, data: response_payload });
    } else {
        const offset = req.query.offset ? req.query.offset : 0;
        const limit = req.query.limit ? req.query.limit : 20;

        // const result = await db.query('SELECT * FROM duty where deleted=false ORDER BY created_at OFFSET $1 LIMIT $2', [offset, limit])
        const result = await getDutiesService( offset, limit );
        response( res, { status: 200, data: result });
    }
    
}

export default getDuty;