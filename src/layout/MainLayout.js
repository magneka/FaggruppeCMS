import RootContainer from "./StyledComponents/RootContainer";
import AppRoutes from "../navigation/AppRoutes";
import { BrowserRouter as Router } from "react-router-dom";
import Menu from '../navigation/Menu'
import HeaderArea from './StyledComponents/HeaderArea'
import FooterArea from './StyledComponents/FooterArea'

const MainLayout = (props) => { 

    return (  
        <Router>
            <RootContainer>
                <HeaderArea>
                    <Menu />                    
                </HeaderArea>                               
                               
                <AppRoutes />

                <FooterArea>
                    
                </FooterArea>
            </RootContainer>
        </Router>
    );
};

export default MainLayout;