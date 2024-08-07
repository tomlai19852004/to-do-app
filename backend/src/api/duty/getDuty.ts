import { response } from '../../utils';
// import * as db from '../../db';
import { getDutyService, getDutiesService } from './services/dutyService';


/**
 * Get a single duty / list of duties controller function.
 *
 * @param {import('http').ServerRequest} req - The server request object.
 * @param {import('http').ServerResponse} res - The server response object.
 */
const getDuty = async ( req: any, res: any ) => {
    if( req.params && req.params.id ){
        const response_payload = await getDutyService(req.params.id);
        response( res, { status: 200, data: response_payload });
    } else {
        const offset = req.query.offset ? req.query.offset : 0;
        const limit = req.query.limit ? req.query.limit : 20;

        const result = await getDutiesService( offset, limit );
        response( res, { status: 200, data: result });
    }
    
}

export default getDuty;