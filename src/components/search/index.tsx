import * as S from './style';

export const Search = () => {
    return (
        <S.SearchBar>
            <form action="#"
            method="POST" className=" d-flex align-items-center">

                <input 
                type="text"
                name="query"
                placeholder="Search"
                title="Enter search keyword"
                />

                <button type="submit" title="Search">
                    <i className="bi bi-search"></i>
                </button>

            </form>
        </S.SearchBar>
    )
}