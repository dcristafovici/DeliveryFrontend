import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { SidebarStyled } from './SidebarStyled';
import { SidebarFormInterface } from './SidebarInterface';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import FieldUpdate from '../Basic/Form/FieldUpdate';
import { ArrowTopIcon } from '../Basic/Icons';
import { useTypeSelector } from '../../redux/reduxHooks';

const Sidebar:React.FC = () => {
  const user = useTypeSelector((state) => state.userReducer);

  const [initialValues, setInitialValues] = useState<SidebarFormInterface>({
    name: '',
    phone: '',
    email: '',
    tower: '',
    floor: '',
    office: '',
    apartment: '',
  });

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

  return (
    <SidebarStyled>
      <div
        className="sidebar-back"
        role="button"
        tabIndex={0}
      >
        <ArrowTopIcon />
        <span>Back</span>
      </div>
      <FormWrapper title="Personal data">
        {/* Todo Name and phone */}
        <FormRow className="one-element">
          <FieldUpdate name="name" placeholder="Name" label="Name" defaultValue={initialValues.name} />
          <FieldUpdate name="phone" placeholder="Phone" label="Phone" defaultValue={initialValues.phone} />
          <FieldUpdate type="email" name="email" placeholder="E-mail" label="E-mail" defaultValue={initialValues.email} />
        </FormRow>
      </FormWrapper>

      <FormWrapper title="Delivery data">
        <FormRow>
          <FieldUpdate name="floor" placeholder="Floor" label="Floor" defaultValue={initialValues.floor} />
          <FieldUpdate name="office" placeholder="Office" label="Office" defaultValue={initialValues.office} />
        </FormRow>
        <FormRow className="one-element">
          <FieldUpdate name="apartment" placeholder="Apartment" label="Apartment" defaultValue={initialValues.apartment} />
        </FormRow>
      </FormWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;
