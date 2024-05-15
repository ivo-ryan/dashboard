import styled from 'styled-components';

export const Logo = styled.a`
        line-height: 1;

        @media (max-width: 1200px) {
            width: 28rem;
        }

        img{
            max-height: 2.6rem;
            margin-right: .6rem;

        }

        span{
            font-size: 2.6rem;
            font-weight: 700;
            color: #012970;
            font-family: 'Nunito', 'sans-serif';
        }
`;

export const Container = styled.div`
        i{
            font-size: 3.2rem;
            padding-left: 1rem;
            cursor: pointer;
            color: #012970;
        }
`;