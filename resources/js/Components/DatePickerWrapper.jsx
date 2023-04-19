import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DatePicker.css";

// function CustomInput({ value, onClick }) {
//     return (
//         <button className="custom-input" onClick={onClick}>
//             {value}
//         </button>
//     );
// }

const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button className="custom-input" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

function DatePickerWrapper() {
    const style = {
    }
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleStartChange = (date) => setStartDate(date);
    const handleEndChange = (date) => setEndDate(date);

    return (
        <div className="datepicker-wrapper">
            <div className="datepicker-start">
                <div className="datepicker-label">Check-in</div>
                <DatePicker
                    selected={startDate}
                    onChange={handleStartChange}
                    customInput={<CustomInput />}
                    dateFormat="dd MMM yyyy"
                    popperPlacement="bottom-start"
                    popperModifiers={{
                        offset: {
                            enabled: true,
                            offset: "0px, 10px",
                        },
                        preventOverflow: {
                            enabled: true,
                            escapeWithReference: false,
                            boundariesElement: "viewport",
                        },
                    }}
                />
            </div>
            <div className="datepicker-end">
                <div className="datepicker-label">Check-out</div>
                <DatePicker
                    selected={endDate}
                    onChange={handleEndChange}
                    customInput={<CustomInput />}
                    dateFormat="dd MMM yyyy"
                    popperPlacement="bottom-start"
                    popperModifiers={{
                        offset: {
                            enabled: true,
                            offset: "0px, 10px",
                        },
                        preventOverflow: {
                            enabled: true,
                            escapeWithReference: false,
                            boundariesElement: "viewport",
                        },
                    }}
                />
            </div>
        </div>
    );
}

export default DatePickerWrapper;
