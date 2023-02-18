import React  from "react";
import {Box, Typography} from "@mui/material";
import {useSelector} from 'react-redux';
import { Employee } from "../model/Employee";
import { DataGrid, GridColumns} from "@mui/x-data-grid";


type Props = {
    tableTitle: string;
    statCalcFn: (emps: Employee[]) => {min:number, max:number, avg:number}
}

export const Statistics: React.FC<Props> = (props) => {
    const columns=React.useRef<GridColumns>([
        {field: 'min', headerClassName:'header', headerName: 'Minimal Value', 
        flex: 1, headerAlign: 'center', align: 'center'},
        {field: 'max', headerClassName:'header', headerName: 'Maximal Value', 
        flex: 1, headerAlign: 'center', align: 'center'},
        {field: 'avg', headerClassName:'header', headerName: 'Average Value', 
        flex: 1, headerAlign: 'center', align: 'center'},
    ])

    const employees: Employee[] = useSelector<any, Employee[]>(state => state.company.employees)
    function getRow(): {id: number, min:number, max:number, avg:number}[] {
        return [{id:0, ...props.statCalcFn(employees)}];
    }

    return <Box sx={{height:'40vh', width:'80vw'}}>
            <Typography sx={{fontSize: 20, textAlign: 'center', fontWeight:'bold'}}>{props.tableTitle}</Typography>
            <DataGrid sx={{fontSize: 16, fontWeight: 'italic'}}
            columns={columns.current} rows={[{id:0, ...props.statCalcFn(employees)}]}/>
    </Box>
}