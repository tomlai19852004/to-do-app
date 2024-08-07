import * as db from '../../../db';
import { Duty } from '../../../types/api';

const getDutyService = async ( id: string ): Promise<Duty> => {
    const db_result = await db.query('SELECT * FROM duty WHERE id=$1 and deleted=false', [id]);
    const result: Duty = db_result.rows.length ? db_result.rows[0] : {};
    // console.log( result );
    // console.log( result['created_at'] )
    // console.log( typeof result['created_at'] )
    return result
}

const getDutiesService = async ( offset: number, limit: number ): Promise<Duty[]> => {
    const result = await db.query('SELECT * FROM duty where deleted=false ORDER BY created_at OFFSET $1 LIMIT $2', [offset, limit])
    return result.rows;
}

const addDutyService = async ( name: string ) => {
    const result = await db.query('INSERT INTO duty (name) values ($1)', [name]);
    return result.rowCount;
}

const modifyDutyService = async ( id: string, name: string ) => {
    const result = await db.query('UPDATE duty SET name=$1, modified_at=now() WHERE id=$2', [name, id]);
    return result.rowCount;
}

const removeDutyService = async ( id: string ) => {
    const result = await db.query('UPDATE duty SET deleted=$1, modified_at=now() WHERE id=$2', [true, id]);
    return result.rowCount;
}

export {
    getDutyService,
    getDutiesService,
    addDutyService,
    modifyDutyService,
    removeDutyService
}