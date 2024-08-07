import url from 'url';
import { default as getDuty } from './getDuty';
import { default as createDuty } from './createDuty';
import { default as updateDuty } from './updateDuty';
import { default as deleteDuty } from './deleteDuty';
import { parseBodyMiddleware, parseParamsMiddleware } from '../../middlewares';
import { response } from '../../utils';

export default (req: any, res: any) => {
    const parsedUrl = url.parse( req.url, true );
    const path = parsedUrl.pathname as string;

    switch(req.method) {
        case 'GET':
            if( path == '/api/duty' || path == '/api/duty/' ){
                getDuty(req, res);
            } else {
                parseParamsMiddleware('/api/duty/:id', req, res, [getDuty]);
            }
            break;
        case 'POST':
            parseBodyMiddleware(req, res, [createDuty]);
            break;
        case 'PUT':
            parseParamsMiddleware('/api/duty/:id', req, res, [parseBodyMiddleware, updateDuty]);
            // parseBodyMiddleware(req, res, [updateDuty]);
            break;
        case 'DELETE':
            // parseBodyMiddleware(req, res, del);
            parseParamsMiddleware('/api/duty/:id', req, res, [deleteDuty]);
            break;
        // case 'OPTIONS':
        //     response( res, { status: 200, data: {} });
        default:
            response(res, { status: 404, data: { error: "Resource not found" }});
            break;
    }

}