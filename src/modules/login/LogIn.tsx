import { Col, Container, Row } from 'react-bootstrap';
import styled from 'styled-components';
import imageLogin from '../../layout/assets/loginImage.webp';
import { Form } from 'react-final-form';
import FormField from '../../common/components/FormField/FormField';
import * as yup from 'yup';
import Logo from '../../layout/logo/Logo';
import CustomButton from '../../common/components/CustomButton/CustomButton';
import { colors } from '../../layout/theme/colors';

interface FormValues {
  userName: string;
  password: string;
}

const validationSchema = yup.object({
  userName: yup.string().required('Required'),
  password: yup.string().required('Required'),
});

const LogIn = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validate = (values: FormValues) => {
    return validationSchema
      .validate(values, { abortEarly: false })
      .then(() => ({}))
      .catch((errors: yup.ValidationError) => {
        const errorDetails = errors.inner.reduce<Record<string, string>>((allErrors, currentError) => {
          const key = currentError.path ?? 'unknown';
          allErrors[key] = currentError.message;
          return allErrors;
        }, {});
        return errorDetails;
      });
  };

  return (
    <PageWrapper>
      <Container fluid>
        <Row>
          <ImageCol className="d-none d-lg-block"></ImageCol>
          <CenterCol lg={7} md={12}>
            <Form
              onSubmit={onSubmit}
              validate={validate}
              render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                  <h2>Login</h2>
                  <StyledDivCont>
                    <LogoCont>
                      <Logo />
                    </LogoCont>
                    <InputCont>
                      {' '}
                      <FormField name="userName" label="Username" placeholder="Enter username" />
                      <FormField name="password" label="Password" placeholder="Enter password" />
                    </InputCont>

                    <CustomButton $primary={true} height="48px" type="submit">
                      Log in
                    </CustomButton>
                    <StyledText>Forgot password ?</StyledText>
                  </StyledDivCont>
                </form>
              )}
            />
          </CenterCol>
        </Row>
      </Container>
    </PageWrapper>
  );
};

export default LogIn;

const StyledDivCont = styled.div`
  width: 492px;
  @media (max-width: 768px) {
    width: 327px;
  }
`;

const LogoCont = styled.div`
  position: absolute;
  top: 52px;
  left: 44px;
`;

const CenterCol = styled(Col)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;

const PageWrapper = styled.div`
  display: flex;
  width: 1440px;
  min-height: 100%;
  justify-content: center;
`;

const ImageCol = styled(Col)`
  background-image: url(${imageLogin});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
`;

const InputCont = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 56px;
`;

const StyledText = styled.p`
  color: ${colors.darkGray};
  font-size: 14px;
  font-weight: 600;
  margin-top: 16px;
  line-height: 16px;
  text-decoration-line: underline;
`;
