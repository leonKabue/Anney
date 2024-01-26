import * as React from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Flex, Text } from "@aws-amplify/ui-react";
import dayjs from "dayjs";
import { Start } from "@mui/icons-material";

const today = dayjs();

export default function ResponsiveDateRangePickers(props) {
  const [minStart, setMinStart] = React.useState(today);
  const [minEnd, setMinEnd] = React.useState(dayjs(minStart).add(1, "month"));

  const [errorStart, setErrorStart] = React.useState(null);
  const [errorEnd, setErrorEnd] = React.useState(null);

  const errorStartMessage = React.useMemo(() => {
    switch (errorStart) {
      case "disablePast": {
        return "Please select a date after today";
      }

      case "invalidDate": {
        return "Your date is not valid";
      }

      default: {
        return "";
      }
    }
  }, [errorStart]);

  const errorEndMessage = React.useMemo(() => {
    switch (errorEnd) {
      case "disablePast": {
        return "Please select a date after today";
      }

      case "minDate": {
        return "Please select dates atleast one month apart";
      }

      case "invalidDate": {
        return "Your date in not valid";
      }

      default: {
        return "";
      }
    }
  }, [errorEnd]);

  React.useEffect(() => {
    // Update minEnd whenever minStart changes
    setMinEnd(dayjs(minStart).add(1, "month"));
  }, [minStart]);

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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={props.labelStart ? props.labelStart : "Check-in"}
          slotProps={{
            field: {
              clearable: true,
            },
            textField: {
              helperText: props.errorStart ? errorStartMessage : "",
            },
          }}
          onChange={(value) => {
            setMinStart(value);
            props.setStart(value);
          }}
          onError={(error) => {
            setErrorStart(error);
            if (error == null && props.setError) {
                props.setError(false)
            } else {
                props.setError(true)
            }
          }}
          disablePast
          defaultValue={today}
        ></DatePicker>
        <Text padding="15px 0 20px 0">to</Text>
        <DatePicker
          label={props.labelEnd ? props.labelEnd : "Check-out"}
          slotProps={{
            field: {
              clearable: true,
            },
            textField: {
              helperText: props.errorEnd ? errorEndMessage : "",
            },
          }}
          onChange={(value) => {
            props.setEnd(value);
          }}
          onError={(error) => {
            setErrorEnd(error);
            if (error == null && props.setError) {
                props.setError(false);
            } else {
                props.setError(true);
            }
          }}
          disablePast
          defaultValue={dayjs(today).add(1, "month")}
          minDate={minEnd}
        ></DatePicker>
      </LocalizationProvider>
    </Flex>
  );
}
