"use client";

import { ChevronDownSVG } from "../../assets/icons";
import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";

/**
 * Simple Datepicker
 */
export const DatePicker = ({ date = new Date(), getSelected = (date: Date) => {} }) => {
  const [calendarOpen, setCalendarOpen] = useState(false);
  return (
    <div>
      <ReactDatePicker
        selected={date}
        onCalendarOpen={() => setCalendarOpen(true)}
        onCalendarClose={() => setCalendarOpen(false)}
        showMonthYearPicker
        onChange={(date) => {
          date && getSelected(date);
        }}
        customInput={
          <button className="w-[110px] font-semibold md text-background flex items-center cursor-pointer">
            <span className="w-full">{format(date, "MMM yyy")}</span>
            <div className={calendarOpen ? "rotate-180" : ""}>
              <ChevronDownSVG className="scale-[2]" />
            </div>
          </button>
        }
      />
    </div>
  );
};
