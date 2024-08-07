const dotenv = require('dotenv');
dotenv.config();
import http from 'http';
import url from 'url';
import { dutyRoute } from './api'
import { response } from './utils';


/**
 * Listen for incoming request and route to appropriate endpoint.
 *
 * @param {import('http').ServerRequest} req - The server request object.
 * @param {import('http').ServerResponse} res - The server response object.
 */
const requestListener = (req: any, res: any) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const path = parsedUrl.pathname as string;

    req.query = {};
    for (const key in query) {
        req.query[key] = query[key];
    }

    if( path.indexOf('/api/duty')  == 0 ){
        dutyRoute(req, res);
    } else {
        response(res, { status: 404, data: { error: "Resource not found" } });
    }
    
};

const app = http.createServer(requestListener);
export default app;