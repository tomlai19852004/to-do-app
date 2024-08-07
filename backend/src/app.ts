const dotenv = require('dotenv');
dotenv.config();
import http from 'http';
import url from 'url';
import { dutyRoute } from './api'
import { response } from './utils';

const PORT = process.env.PORT || 4000;

const requestListener = (req: any, res: any) => {
    const parsedUrl = url.parse(req.url, true);
    const query = parsedUrl.query;
    const path = parsedUrl.pathname as string;

    // // console.log( path );
    // const paths = path.split('/');
    // const last_path = paths[paths.length - 1];
    // const re = new RegExp('([A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12})')

    // req.params = {}
    // if( re.test( last_path ) ){
    //     req.params['id'] = last_path;
    // }

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
// server.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });