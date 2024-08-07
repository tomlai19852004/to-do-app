/**
Returns a promise that resolves with the parsed JSON data of the request body.
@param {Object} req - The HTTP request object
@return {Promise} - A promise resolves with the parsed request body or rejects with an error
*/
export default (req:any) => {
    return new Promise((resolve, reject) => {
        let body = "";
    
        req.on("data", (chunk:any) => {
            body += chunk;
        });
    
        req.on("end", () => {
            try {
                body = body ? JSON.parse(body) : {};
                resolve(body);
            } catch (error) {
                reject(error);
            }
        });
    });
};
  