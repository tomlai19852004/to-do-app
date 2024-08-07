import { response } from '../utils';
import url from 'url';
import { paramsConfig } from '../utils/validateConfig';
import { execPath } from 'process';

/**
 * Middleware function to extract parameters from url.
 * @param {import('http').IncomingMessage} req - The incoming request object.
 * @param {import('http').ServerResponse} res - The server response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */

export default async (expectedUrl: string, req: any, res: any, next: Function[]) => {
    try{
        const parsedUrl = url.parse( req.url, true );
        const path = parsedUrl.pathname as string;
        
        const expectedPaths = expectedUrl.split('/');
        
        const paths = path.split('/');
        req.params = {}

        expectedPaths.forEach((exPath:string, ii: number) => {
            if( exPath.indexOf(':') == 0 && ii < paths.length ){
                const targetParam = paths[ii];
                if( exPath in paramsConfig ){
                    if( paramsConfig[exPath].test( targetParam ) ){
                        const paramKey = exPath.substring(1);
                        req.params[paramKey] = targetParam;
                    } else {
                        // Failed validation. 
                        throw Error('Bad request.');
                    }
                } else {
                    // raise internal server error
                    throw Error('Internal Server Error.');
                }
            }
        })

        const new_next = next.filter((item: Function, ii:number) => ii > 0)
        next[0](req, res, new_next);
    } catch( error: any ){
        response(res, { status: error.message == "Internal Server Error." ? 500 : 400, data: { error: error.message } });
    }
}