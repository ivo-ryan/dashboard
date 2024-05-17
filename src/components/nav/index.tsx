import { NavAvatar } from '../navAvatar/navAvatar'
import { NavMenssage } from '../navMenssage/navMenssage'
import { NavNotice } from '../navNotice'
import * as S from './style'

export const Nav = () => {
    return(
        <S.Nav>
            <ul className="d-flex align-items-center">
                <NavNotice/>
                <NavMenssage/>
                <NavAvatar/>
            </ul>
        </S.Nav>
    )
}