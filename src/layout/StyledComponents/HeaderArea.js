import styled from 'styled-components'

const HeaderArea = styled.div`
  display: grid;  
  grid-area: HeaderArea;
  //background-color: yellow;
  height: 200px;
  text-align: center;
  vertical-align: middle;
  font-size: 70px;
  font-weight: 700;
  line-height: 200px;       /* The same as your div height */

  a:link {
    color: black;
    text-decoration: none;
    }

    /* visited link */
    a:visited {
    color: black;
    text-decoration: none;
    }

    /* mouse over link */
    a:hover {
    color: black;
    text-decoration: underline;
    }

    /* selected link */
    a:active {
    color: blac;
    text-decoration: underline;
    }


`

export default HeaderArea 