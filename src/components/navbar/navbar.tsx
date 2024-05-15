import { Logo } from '../logo';
import { Search } from '../search';
import * as S from './style';


export const Navbar = () => {
    return (
        <S.Header className=' fixed-top d-flex align-items-center' >
            <Logo/>
           <Search/>
            {/* {nav} */}
        </S.Header>
    )
}