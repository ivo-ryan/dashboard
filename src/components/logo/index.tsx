import * as S from './style';

export const Logo = () => {

    const handleTogglerSideBar = () => {

    }

    return (
        <S.Container className="d-flex align-items-center justify-content-between">
            <S.Logo href="/" className="d-flex align-items-center">
            <span className="d-none d-lg-block">AdminDashboard</span>

            </S.Logo>

            <i className="bi bi-list toggle-sidebar-btn"
            onClick={handleTogglerSideBar}>

            </i>
        </S.Container>
    )
}