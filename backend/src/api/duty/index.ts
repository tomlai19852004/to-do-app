import url from 'url';
import { default as getDuty } from './getDuty';
import { default as createDuty } from './createDuty';
import { default as updateDuty } from './updateDuty';
import { default as deleteDuty } from './deleteDuty';
import { parseBodyMiddleware, parseParamsMiddleware } from '../../middlewares';
import { response } from '../../utils';

/**
 * Determine the incoming request method and route to corresponding functions.
 *
 * @param {import('http').ServerRequest} req - The server request object.
 * @param {import('http').ServerResponse} res - The server response object.
 */
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
            break;
        case 'DELETE':
            parseParamsMiddleware('/api/duty/:id', req, res, [deleteDuty]);
            break;
        default:
            response(res, { status: 404, data: { error: "Resource not found" }});
            break;
    }

}