import { useFormik } from 'formik';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../../Redux/Auth/authThunks';
import { signUpSchema } from "../validationSchemas/validationSchema"


import { Step1, Step2, Step3, Step4, Step5 } from './StepsForm/index';
import AuthLayout from '../AuthLayout/AuthLayout';
import {
  illustration,
  goals,
  genderAndAge,
  bodyParameters,
  illustrationActivity,
} from 'assets/authImages/index';


const SignUpForm = () => {
  const dispatch = useDispatch();
  const [currentStep, setCurrentStep] = useState(1);
  const [imagesStep, setImagesStep] = useState(illustration);




  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      goal: 'Lose Fat',
      gender: 'male',
      age: '',
      height: '',
      weight: '',
      activity: '1.2',
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      dispatch(signUp(values));
      // resetForm();
      // { resetForm }
      setCurrentStep(1)
    },
    validationSchema: signUpSchema,
  });

  const handleincrement = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleDecrement = () => {
    setCurrentStep(currentStep - 1);
  };

  useEffect(() => {
    switch (currentStep) {
      case 1:
        setImagesStep(illustration);
        break;

      case 2:
        setImagesStep(goals);
        break;
      case 3:
        setImagesStep(genderAndAge);
        break;
      case 4:
        setImagesStep(bodyParameters);
        break;
      case 5:
        setImagesStep(illustrationActivity);
        break;
    }
  }, [currentStep]);

  return (
    <AuthLayout image={imagesStep}>
    
    
        <form onSubmit={formik.handleSubmit}>
          {currentStep === 1 && (
            <Step1
              increment={handleincrement}
              validationSchema={formik.validationSchema}
              formik={formik}
            />
          )}
          {currentStep === 2 && (
            <Step2
              increment={handleincrement}
              decrement={handleDecrement}
              formik={formik}
            />
          )}
          {currentStep === 3 && (
            <Step3
              increment={handleincrement}
              decrement={handleDecrement}
              formik={formik}
            />
          )}
          {currentStep === 4 && (
            <Step4
              increment={handleincrement}
              decrement={handleDecrement}
              formik={formik}
            />
          )}
          {currentStep === 5 && (
            <Step5 decrement={handleDecrement} formik={formik} />
          )}
        </form>
    </AuthLayout>
  );
};

export default SignUpForm;
