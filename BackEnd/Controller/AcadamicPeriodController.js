import expressAsyncHandler from 'express-async-handler';
import { InsertToAcademicPeriod } from '../model/AcadamicPeiod.js';

export const AcademicPeriodInsertController = expressAsyncHandler(async (req, res) => {
    try {
        const { ClassYear, Semister } = req.body;
        if (!ClassYear || !Semister) {
            return res.status(400).json({ message: 'ClassYear and Semister are required' });
        }
        const result = await InsertToAcademicPeriod(ClassYear, Semister);
        console.log('Academic period inserted successfully.');
        res.status(201).json({ message: 'Academic period inserted successfully.' });
    } catch (err) {
        console.error('Error in AcademicPeriodInsertController:', err);
        res.status(500).json({ message: 'Unable to insert academic period.'});
    }
});