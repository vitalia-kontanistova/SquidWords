import { useField } from "formik";
import React from "react";
import { ErrorText, Input, Label } from "./StyledCustomInput.styled";

const CustomInput = ({ label, border, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <Label>
        <span>{label}</span>
        <Input border={meta.touched && meta.error} {...field} {...props} />
      </Label>
      {meta.touched && meta.error ? <ErrorText>{meta.error}</ErrorText> : null}
    </>
  );
};

export default CustomInput;
