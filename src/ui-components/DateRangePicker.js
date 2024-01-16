import * as React from 'react';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Flex, Text } from "@aws-amplify/ui-react";


export default function ResponsiveDateRangePickers() {

    

    return (
        <Flex 
        position="relative"
        direction="row"
        width="auto"
        height="auto"
        marginTop="auto"
        marginLeft="auto"
        marginRight="auto"
        marginBottom="auto"
        justifyContent="center"
        alignContent="center"
        padding="10px 10px 10px 10px"
        > 
            <LocalizationProvider dateAdapter={AdapterDayjs} >
                <DatePicker label="Check-in"
                            slotProps={{
                                field: {
                                    clearable: true
                                }
                            }}
                            ></DatePicker>
                <Text padding="15px 0 20px 0">to</Text>
                <DatePicker label="Check-out"
                            slotProps={{
                                field: {
                                    clearable: true
                                }
                            }}
                            ></DatePicker>
            </LocalizationProvider>
        </Flex>
    );
}