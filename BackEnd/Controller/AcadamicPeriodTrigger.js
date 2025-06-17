import connection from "../Config/DB.js";

export const CreateAcademicPeriodTrigger = async () => {
    const AcademicPeriodTrigger = `
        CREATE TRIGGER IF NOT EXISTS AfterAcademicPeriodInsert
        AFTER INSERT ON AcademicPeriodTable
        FOR EACH ROW
        BEGIN
            UPDATE StudentTable
            SET ClassYear = NEW.ClassYear, Semister = NEW.Semister
            WHERE 1=1; -- Update all students; modify condition if needed
        END;
    `;

    try {
        await connection.query(AcademicPeriodTrigger);
        return { success: true, message: 'AcademicPeriodTrigger created successfully' };
    } catch (err) {
        console.error('Error creating AcademicPeriodTrigger:', err);
        throw err;
    }
};