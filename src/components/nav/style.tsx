import styled from 'styled-components';

export const Nav = styled.nav`
        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }

        .nav-icon{
            margin-right: 2.5rem;
            i{
            font-size: 2.2rem;
            color: #012970;
        }
        position: relative;}

        .nav-profile{
            color: #012970;

            img{
                max-height: 3.6rem;
            }

            span{
                font-size: 1.4rem;
                font-weight: 600;     
            }
        }

        .badge-number{
            position: absolute;
            inset:  -2px -5px auto auto;
        }

        .notifications{
            inset: 8px -15px auto auto ;

            .notification-item{
                display: flex;
                align-items: center;
                padding: 1.5rem 1rem;
                transition: all .3s;

                i{
                    margin: 0 2rem 0 1rem;
                    font-size: 2.4rem;
                }

                h4{
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 5px;
                }

                p{
                    font-size: 1.3rem;
                    margin-bottom: 3px;
                    color: #919191;
                }

                &:hover{
                    background-color: #f6f9ff;
                }
            }
        }

        .messages{
            inset: .8rem -1.5rem auto auto ;

            .message-item{
                padding: 1.5rem 1rem ;
                transition: all .3s;

                a{
                    display: flex;
                }

                img{
                    margin: 0 2rem 0 1rem ;
                    max-height: 4rem;
                }

                h4{
                    font-size: 1.6rem;
                    font-weight: 600;
                    margin-bottom: 5px;
                    color: #444444;
                }

                p{
                    font-size: 1.3rem;
                    margin-bottom: 3px;
                    color: #919191;
                }

                &:hover{
                    background-color: #f6f9ff;
                }
            }
        }

        .profile{
            min-width: 24rem;
            padding-bottom: 0;
            top: .8rem;

            .dropdown-header {
                h6{
                    font-size: 1.8rem;
                    margin-bottom: 0;
                    font-weight: 600;
                    color: #444444;
                }

                span{
                    font-size: 1.4rem;
                }
            }

            .dropdown-item{
                font-size: 1.4rem;
                padding: 1rem 1.5rem;
                transition: all .3s;

                i{
                    margin-right: 1rem;
                    font-size: 1.8rem;
                    line-height: 0;
                }

                &:hover{
                    background-color: #f6f9ff;
                }
            }
        }
`;