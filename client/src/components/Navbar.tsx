import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { mobile, smallTablet } from '../responsive'

const Container = styled.div`
  height: 60px;
  overflow: hidden;
`

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${smallTablet({padding: "15px 0"})}

`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`
const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  ${smallTablet({display: "none"})}

`

const SearchContainer = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({marginLeft: "15px"})}
`

const Input = styled.input`
  ${smallTablet({width: "120px"})}
  ${mobile({width: "50px"})}
  border: none;
`

const Center = styled.div`
  flex: 1;
  text-align: center;
`

const Logo = styled.h1`
  ${mobile({fontSize: "24px"})}
  font-weight: bold;
`

const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 25px;
  ${smallTablet({flex: 2, justifyContent: "center"})}
  ${mobile({ gap: "6px"})}
  

`

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  ${mobile({fontSize: "12px"})}

`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left> 
          <Language> PT-BR </Language> 
          <SearchContainer>
            <Input placeholder="procurar"/>
            <SearchIcon style={{color: "gray", fontSize: 16}} /> 
          </SearchContainer>
        </Left>
        <Center> <Logo> ASKe. </Logo> </Center>
        <Right> 

          <MenuItem>REGISTRAR</MenuItem>
          <MenuItem>ENTRAR</MenuItem>
          <MenuItem> 
            <Badge badgeContent={4} color="primary">
              <ShoppingCartOutlinedIcon/>
            </Badge>
          </MenuItem>  
          
        </Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar 