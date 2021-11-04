import React, { useEffect, useState } from 'react';
import { useMutation } from '@apollo/client';
import { useDispatch } from 'react-redux';
import { SidebarStyled } from './SidebarStyled';
import { SidebarFormInterface } from './SidebarInterface';
import { useTypeSelector } from '../../redux/useTypeSelector';
import FormWrapper from '../Basic/Form/FormWrapper';
import FormRow from '../Basic/Form/FormRow';
import { UPDATE_USER } from '../../GraphQL/Mutations';
import FieldUpdate from '../Basic/Form/FieldUpdate';
import { ArrowTopIcon } from '../Basic/Icons';
import { mobileAccountStatus } from '../../redux/actions/authAction';
import { Towers } from '../Banner/Towers';
import FormSelect from '../Basic/Form/FormSelect';

const Sidebar:React.FC = () => {
  const dispatch = useDispatch();
  const [updateUser] = useMutation(UPDATE_USER);

  const { user } = useTypeSelector((state) => state.authReducer);

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
    const { id, ...filteredUser } = user;
    setInitialValues((prev) => ({ ...initialValues, ...filteredUser }));
  }, [user]);

  return (
    <SidebarStyled>
      <div
        className="sidebar-back"
        role="button"
        tabIndex={0}
        onClick={() => dispatch(mobileAccountStatus(false))}
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
        <FormRow className="one-element">
          <FormSelect
            values={Towers}
            label="Choose Tower"
            selectDefault={initialValues.tower || 'Choose Tower'}
            onSelect={(option:string) => updateUser({ variables: { data: { id: user.id, field: 'tower', value: option } } })}
          />
        </FormRow>
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
