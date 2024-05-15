import styled from 'styled-components';

export const SearchBar = styled.div`
        min-width: 36rem;
        padding: 0 2rem;

        @media (max-width: 1199px) {
            position: fixed;
            top: 5rem;
            left: 0;
            right: 0;
            padding: 2rem;
            box-shadow: 0 0 1.5rem 0 rgba(1, 41, 112 , 0.1);
            background: #fff;
            z-index: 9999;
            transition: all .3s;
            visibility: hidden;
            opacity: 0;
        }

        .search-bar-show {
            top: 6rem;
            visibility: visible;
            opacity: 1;
        }

        form{
            width: 100%;

            input{
                border: 0;
                font-size: 1.4rem;
                color: #fff;
                border: 1px solid rgba(14, 64, 152, 0.2);
                padding: .7rem 3.8rem .7rem .8rem ;
                border-radius: .3rem;
                width: 100%;
                transition: all .5s;

                &:hover,:focus {
                    outline: none;
                    box-shadow: 0 0 1rem 0 rgba(1 , 41 , 112, 0.15);
                    border: 1px solid rgba(1 , 41 , 112, 0.3);
                }
            }

            button{
                border: 0;
                padding: 0;
                margin-left: -3rem;
                background: none ;

                i{
                    color: #012970;
                }
            }
        }
`;