import { Container, Images } from './Authlayout.styled';

const AuthLayout = ({ children, image }) => {
  return (
    <Container>
      <Images src={image} alt={image} />
      {children}
    </Container>
  );
};

export default AuthLayout;
