import styled from 'styled-components'


// Merk bruk av grid templates, gir en veldig ryddig måte å sette opp layout 
// Fordi du kan se alt i denne filen
const RootContainer = styled.div`  
  display: grid;
  grid-template-columns: auto 400px 400px 400px auto;
  grid-template-areas: 
    "HeaderArea HeaderArea HeaderArea HeaderArea HeaderArea" 
    "SideBarLeft ContentArea ContentArea ContentArea SideBarRight"
    "FooterArea FooterArea FooterArea FooterArea FooterArea";
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  text-align: left;
  font-size: 14px;
  min-width: 1366px;

  // Responsive styling
  @media (max-width: 700px) {
  .grid {
    grid-template-areas:
      'HeaderArea'
      'ContentArea'
      'FooterArea';
  }
}
`
export default RootContainer