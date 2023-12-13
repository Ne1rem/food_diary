import { Formik, Form, Field } from 'formik';

const SingUpForm = () => {
  const onSubmitForm = (values, { resetForm }) => {
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
        goal: '',
        gender: '',
        age: '',
        height: '',
        weight: '',
        activity: '',
      }}
      onSubmit={onSubmitForm}
    >
      <Form>
        <Field />
      </Form>
    </Formik>
  );
};

export default SingUpForm;