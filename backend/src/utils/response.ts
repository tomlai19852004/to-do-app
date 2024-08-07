/**
 * Sends a response to the client with the specified data, status code, and content type.
 *
 * @param {import('http').ServerResponse} res - The server response object.
 * @param {Object} options - The response options object.
 * @param {Object} options.data - The response data object.
 * @param {number} options.status - The response status code.
 * @param {string} options.contentType - The response content type.
 */

export default (
    res: any,
    { data = {}, status = 200, contentType = "application/json" }
) => {
    // CORS headers
    const cors_headers = {
        // 'Access-Control-Allow-Origin': '*',
        // 'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
        // 'Access-Control-Max-Age': 2592000
    }

    res.writeHead(status, { "Content-Type": contentType, ...cors_headers });
    res.write(JSON.stringify(data));
    res.end();
};
  