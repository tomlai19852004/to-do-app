import request from 'supertest';
import app from '../../../app';
import * as dutyServices from '../services/dutyService';
import { Duty, NewDuty } from '../../../types/api';

jest.mock('../services/dutyService');

describe('Duty Controller', () => {
    describe('GET /api/duty', () => {
        it('should return a list of duties', async () => {
            const mockDuties: Duty[] = [
                { 
                    id: '0efc49ea-52c3-11ef-a944-af353ee52494', 
                    name: 'Duty 1', 
                    deleted: false, 
                    created_at: 0, 
                    modified_at: 0
                }];

            (dutyServices.getDutiesService as jest.Mock).mockResolvedValue(mockDuties);

            const response = await request(app).get('/api/duty');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockDuties);
        }) 
    });

    describe('GET /api/duty', () => {
        it('should return a single duty', async () => {
            const mockDuties: Duty = { 
                id: '0efc49ea-52c3-11ef-a944-af353ee52494', 
                name: 'Duty 1', 
                deleted: false, 
                created_at: 0, 
                modified_at: 0
            };

            (dutyServices.getDutyService as jest.Mock).mockResolvedValue(mockDuties);

            const response = await request(app).get('/api/duty/0efc49ea-52c3-11ef-a944-af353ee52494');

            expect(response.status).toBe(200);
            expect(response.body).toEqual(mockDuties);
        }) 
    });

    describe('POST /api/duty', () => {
        it('should create duty', async () => {
            const newDutyMock: NewDuty = { 
                // id: '0efc49ea-52c3-11ef-a944-af353ee52499', 
                name: 'New Duty'
            };

            (dutyServices.addDutyService as jest.Mock).mockResolvedValue(1)

            const response = await request(app).post('/api/duty').send(newDutyMock);

            expect(response.status).toBe(200);
            expect(response.body).toEqual({"message": "Duty created."});
        });
    });

    describe('PUT /api/duty', () => {
        it('should update duty', async () => {
            const updateDutyMock: NewDuty = {
                name: 'Duty content to be updated.'
            };

            (dutyServices.modifyDutyService as jest.Mock).mockResolvedValue(1)

            const response = await request(app).put('/api/duty/0efc49ea-52c3-11ef-a944-af353ee52494').send(updateDutyMock);

            expect(response.status).toBe(200);
            expect(response.body).toEqual({"message": 'Duty updated.'});
        });
    });

    describe('DELETE /api/duty', () => {
        it('should delete duty', async () => {
            (dutyServices.removeDutyService as jest.Mock).mockResolvedValue(1);
            const response = await request(app).delete('/api/duty/0efc49ea-52c3-11ef-a944-af353ee52494');
            expect(response.status).toBe(200);
            expect(response.body).toEqual({"message": 'Duty deleted.'});
        });
    });

    describe('PUT /api/duty', () => {
        it('should fail to update duty', async () => {
            // Test SQL is returning rowCount = 0
            const updateDutyMock: NewDuty = {
                name: 'Duty content to be updated.'
            };

            (dutyServices.modifyDutyService as jest.Mock).mockResolvedValue(0)

            const response = await request(app).put('/api/duty/0efc49ea-52c3-11ef-a944-af353ee52494').send(updateDutyMock);

            expect(response.status).toBe(404);
            expect(response.body).toEqual({"error": 'Resources not found.'});
        });
    });

    describe('DELETE /api/duty', () => {
        it('should fail to delete duty', async () => {
            // Test SQL is returning rowCount = 0
            (dutyServices.removeDutyService as jest.Mock).mockResolvedValue(0);
            const response = await request(app).delete('/api/duty/0efc49ea-52c3-11ef-a944-af353ee52494');
            expect(response.status).toBe(404);
            expect(response.body).toEqual({"error": 'Resources not found.'});
        });
    });


    describe('GET /api/duty', () => {
        it('should fail to return duty', async () => {
            // Test invalid UUID in URL
            const response = await request(app).get('/api/duty/0efc49ea-52c3-11ef-a944-af353ee5249');

            expect(response.status).toBe(400);
            expect(response.body).toEqual({'error': 'Bad request.'});
        }) 
    });
});