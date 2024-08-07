import { getBody, response } from '../utils'

interface dutyBody{
    name: string;
}

/**
 * Middleware function to get and validate body in a POST request.
 * @param {import('http').IncomingMessage} req - The incoming request object.
 * @param {import('http').ServerResponse} res - The server response object.
 * @param {Function} next - The next middleware function.
 * @returns {void}
 */

export default async (req: any, res: any, next: Function[]) => {
    try{
        const body : dutyBody = await getBody(req) as dutyBody;
        if ( !body.name ) {
            return response(res, {
                status: 400,
                data: { message: "Duty name are required" },
            });
        }
      
        req.body = body;
      
        const new_next = next.filter((item: Function, ii:number) => ii > 0)
        next[0](req, res, new_next);

    } catch( error: any ){
        response(res, { status: 400, data: { message: error.message } });
    }
}