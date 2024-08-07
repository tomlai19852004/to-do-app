export const paramsConfig: { [key: string]: RegExp; }  = {
    ':id': new RegExp('([A-Za-z0-9]{8}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{12})')
}