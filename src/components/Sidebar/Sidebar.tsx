import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { SidebarStyled } from './SidebarStyled';
import { SidebarFormInterface } from './SidebarInterface';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import FormikField from '../Basic/Form/FormikField';

const initialValues:SidebarFormInterface = {
  name: '',
  phone: '',
  email: '',
  address: '',
  floor: '',
  office: '',
  apartament: '',
};

const SidebarFormSchema = Yup.object().shape({
  name: Yup.string()
    .required('Required'),
  phone: Yup.string()
    .required('Required'),
  email: Yup.string()
    .required('Required'),
  address: Yup.string()
    .required('Required'),
  floor: Yup.string()
    .required('Required'),
  office: Yup.string()
    .required('Required'),
  apartament: Yup.string()
    .required('Required'),
});

const Sidebar:React.FC = () => {
  const handleSubmit = (values:SidebarFormInterface, { resetForm }:any) => {
    console.log(values);
  };
  return (
    <SidebarStyled>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validateOnChange
        validateOnBlur
        validationSchema={SidebarFormSchema}
      >
        {({ dirty, isValid, errors, getFieldProps, setFieldValue, touched }) => (
          <Form>
            <FormWrapper title="Personal data">
              <FormRow className="one-element">
                <FormikField
                  {...getFieldProps('name')}
                  name="name"
                  label="Your name"
                  error={errors.name}
                  touched={touched.name}
                />
                <FormikField
                  {...getFieldProps('phone')}
                  name="phone"
                  label="Your phone"
                  error={errors.phone}
                  touched={touched.phone}
                />
                <FormikField
                  {...getFieldProps('email')}
                  name="email"
                  label="Your email"
                  type="Email"
                  error={errors.email}
                  touched={touched.email}
                />
              </FormRow>
            </FormWrapper>

            <FormWrapper title="Delivery data">
              <FormRow className="one-element">
                <FormikField
                  {...getFieldProps('address')}
                  name="address"
                  label="Delivery address"
                  error={errors.address}
                  touched={touched.address}
                />
              </FormRow>
              <FormRow>
                <FormikField
                  {...getFieldProps('floor')}
                  name="floor"
                  label="Your floor"
                  error={errors.floor}
                  touched={touched.floor}
                />
                <FormikField
                  {...getFieldProps('office')}
                  name="office"
                  label="Your office"
                  error={errors.office}
                  touched={touched.office}
                />
              </FormRow>
              <FormRow className="one-element">
                <FormikField
                  {...getFieldProps('apartament')}
                  name="apartament"
                  label="Your apartament"
                  error={errors.apartament}
                  touched={touched.apartament}
                />
              </FormRow>
            </FormWrapper>
          </Form>
        )}
      </Formik>
    </SidebarStyled>
  );
};

export default Sidebar;
