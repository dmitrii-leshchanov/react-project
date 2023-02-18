import React from 'react';
import {Box} from "@mui/material";
import { Statistics } from '../Statistics';
import { statSalary } from '../../service/EmployeesService';
export const SalaryStatistics: React.FC = () => {
    return <Box>
    <Statistics tableTitle = 'Age Statistics' statCalcFn = {statSalary} />
</Box>
}