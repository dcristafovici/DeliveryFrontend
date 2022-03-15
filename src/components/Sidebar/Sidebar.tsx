import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { useMutation } from '@apollo/client';
import { SidebarStyled } from './SidebarStyled';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import { SidebarFormInitialValues } from './SidebarConstants';
import { SidebarFormInterface } from './SidebarInterface';
import FormikField from '../Basic/Form/FormikField';
import Button from '../Basic/Button';
import { useTypeSelector } from '../../redux/reduxHooks';
import { differenceBetweenObjects } from '../../utils/differenceBetweenObjects';
import Suggest from '../Basic/Suggest';
import { SuggestThemes } from '../Basic/Suggest/SuggestInterface';
import { UPDATE_USER } from '../../GraphQL/User/UserMutations';

const Sidebar:React.FC = () => {
  const [initialValues, setInitialValues] = useState<
    SidebarFormInterface>(SidebarFormInitialValues);

  const user = useTypeSelector((state) => state.userReducer);
  const [updateUser] = useMutation(UPDATE_USER);

  useEffect(() => {
    if (user.id) {
      Object.keys(initialValues).forEach((element:string) => {
        if (user[element]) {
          setInitialValues((prev: SidebarFormInterface) => ({
            ...prev,
            [element]: user[element],
          }));
        }
      });
    }
  }, [user]);

  const onSubmitHandler = (values: unknown) => {
    const updatedValues = differenceBetweenObjects(initialValues, values);
    const { id } = user;
    updateUser({ variables: { id, data: { ...updatedValues } } });
  };
  const formik = useFormik({
    initialValues,
    validateOnChange: true,
    enableReinitialize: true,
    onSubmit: (values) => onSubmitHandler(values),
  });
  return (
    <SidebarStyled>
      <form onSubmit={formik.handleSubmit}>
        <FormWrapper title="Address">
          <FormRow className="one-element">
            <Suggest mode={SuggestThemes.DARK} />
          </FormRow>
        </FormWrapper>
        <FormWrapper title="Personal data">
          <FormRow className="one-element">
            <FormikField
              type="text"
              name="name"
              label="Your name"
              value={formik.values.name}
              error={formik.errors.name}
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="phone"
              label="Your Phone"
              value={formik.values.phone}
              error={formik.errors.phone}
              disabled
              onChange={formik.handleChange}
            />
            <FormikField
              type="text"
              name="email"
              label="Your email"
              value={formik.values.email}
              error={formik.errors.email}
              onChange={formik.handleChange}
            />
          </FormRow>
          <FormRow className="one-element">
            <Button name="Update" className="full" />
          </FormRow>
        </FormWrapper>
      </form>
    </SidebarStyled>
  );
};

export default Sidebar;
