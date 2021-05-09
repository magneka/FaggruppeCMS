import { Link }  from 'react-router-dom';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = (props) => {

    return (
        <div>
            <Link to="/">
                UC - meetup React driven CMS
            </Link>
        </div>
    )
}

export default Menu