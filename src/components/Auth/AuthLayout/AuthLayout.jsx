import  authImg  from "assets/authImages/Illustration.png"
import { Container, Images } from "./Authlayout.styled";

const AuthLayout = ({children}) => {
    return ( <Container>
        <Images src={authImg} alt="" />
        {children}
    </Container> );
}
 
export default AuthLayout;