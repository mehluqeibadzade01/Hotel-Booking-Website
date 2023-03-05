import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker"
import type{Value} from "react-multi-date-picker"

const transition:any=require ("react-element-popper/animations/transition")

export default function Example() {
  const [value, setValue] = useState<Value>(new Date());

  return <DatePicker  value={value} onChange={setValue} placeholder='Check-in' inputClass="custom-input"/>;
}