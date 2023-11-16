import React from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import { colors } from '../../../layout/theme/colors';

interface FormFieldProps {
  name: string;
  label: string;
  type?: string; // Optional property
  placeholder?: string; // Optional placeholder property
}

const FormField: React.FC<FormFieldProps> = ({ name, label, type = 'text', placeholder }) => {
  return (
    <Field name={name}>
      {({ input, meta }) => (
        <StyledCont>
          <StyledContInput>
            <StyledLabel>{label}</StyledLabel>
            <StyledInput {...input} type={type} placeholder={placeholder} />
          </StyledContInput>
          {meta.error && meta.touched && <span className="from-error">{meta.error}</span>}
        </StyledCont>
      )}
    </Field>
  );
};

export default FormField;

const StyledCont = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledContInput = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StyledLabel = styled.label`
  color: ${colors.black};
  font-family: Nunito;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 16px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 48px;
  padding-left: 16px;
  border-radius: 8px;
  border: 1px solid ${colors.lightGray};
`;
