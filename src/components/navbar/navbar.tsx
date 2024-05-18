import { Logo } from '../logo';
import { Nav } from '../nav';
import { Search } from '../search';
import * as S from './style';


export const Navbar = () => {
    return (
        <S.Header className=' fixed-top d-flex align-items-center ' >
            <Logo/>
           <Search/>
           <Nav/>
        </S.Header>
    )
}