import "react-phone-number-input/style.css";
import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
const PhoneNumberPicker = () => {
  const [value, setValue] = useState();
  return (
    <PhoneInput
      international
      countryCallingCodeEditable={false}
      defaultCountry="RU"
      value={value}
      onChange={setValue}
    />
  );
};

export default PhoneNumberPicker;
