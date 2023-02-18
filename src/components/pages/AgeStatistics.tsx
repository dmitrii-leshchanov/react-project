import React from 'react';
import {Box} from "@mui/material";
import { statAge } from '../../service/EmployeesService';
import { Statistics } from '../Statistics';
export const AgeStatistics: React.FC = () => {
    return <Box>
        <Statistics tableTitle = 'Age Statistics' statCalcFn = {statAge} />
    </Box>
}