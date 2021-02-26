import { Formik } from "formik";
import React from "react";
import CustomInput from "../registration/CustomInput/CustomInput";
import { Form } from "../registration/RegStyled.styled";
import { Button } from "../styledComponents/StyledComponents.styled";
import * as yup from "yup";
import { ErrorText } from "../registration/CustomInput/StyledCustomInput.styled";

const LoginForm = (props) => {
  const errors = {
    required: "Поле обязательно для заполнения",
    email: "Почта введена некорректно",
    pass: "Пароль должен быть длинее 5 симовлов",
  };
  const initialValues = { email: "", pass: "" };
  const validationSchema = yup.object({
    email: yup.string().email(errors.email).required(errors.required),
    pass: yup.string().min(6, errors.pass).required(errors.required),
  });
  const submit = (values) => {
    props.login(values);
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
            <CustomInput label="Пароль:" type="password" name="pass" />
            {props.loginError ? (
              <ErrorText big>{props.loginError}</ErrorText>
            ) : null}
            <Button type="submit" disabled={isSubmitting}>
              Войти
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};
export default LoginForm;
