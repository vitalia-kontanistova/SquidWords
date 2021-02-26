import { Formik } from "formik";
import React from "react";
import CustomInput from "./CustomInput/CustomInput";
import { Form } from "./RegStyled.styled";
import { Button } from "../styledComponents/StyledComponents.styled";
import * as yup from "yup";
import { ErrorText } from "./CustomInput/StyledCustomInput.styled";

const RegForm = (props) => {
  const errors = {
    required: "Поле обязательно для заполнения",
    email: "Почта введена некорректно",
    name: "Выберете имя подлинее",
    pass: "Пароль должен быть длинее 5 симовлов",
    passLetters: "В пароле должна быть хотя бы одна буква",
    passNumber: "В пароле должна быть хотя бы одна цифра",
    passConfirm: "Пароли не совпадают",
  };
  const initialValues = { email: "", name: "", pass: "", passConfirm: "" };
  const validationSchema = yup.object({
    email: yup.string().email(errors.email).required(errors.required),
    name: yup.string().min(3, errors.name).required(errors.required),
    pass: yup
      .string()
      .min(6, errors.pass)
      .matches(/[a-zA-Zа-яА-Я]/, errors.passLetters)
      .matches(/[0-9]/, errors.passNumber)
      .required(errors.required),
    passConfirm: yup
      .string()
      .oneOf([yup.ref("pass")], errors.passConfirm)
      .required(errors.required),
  });
  const submit = (values) => {
    let { email, name, pass } = values;
    props.register({ email, name, pass });
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm, setSubmitting }) => {
        setSubmitting(true);
        submit(values);
        setSubmitting(false);
        resetForm();
      }}
    >
      {({ handleSubmit, isSubmitting }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <CustomInput label="Email:" type="text" name="email" />
            <CustomInput label="Имя или никнейм:" type="text" name="name" />
            <CustomInput label="Пароль:" type="password" name="pass" />
            <CustomInput
              label="Повторите пароль:"
              type="password"
              name="passConfirm"
            />
            {props.regError ? (
              <ErrorText big>{props.regError}</ErrorText>
            ) : null}
            <Button type="submit" disabled={isSubmitting}>
              Зарегистрироваться
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default RegForm;
