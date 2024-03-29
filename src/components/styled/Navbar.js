import { styled } from "styled-components";


const NavbarHeader = styled.header`
  .header {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${({ theme }) => theme.setwhiteColorDeam};
    width: 100%;
    padding: 1rem;
    z-index: 1000;
    box-shadow: 0 2px 4px rgba(2, 15, 29, 0.242);

    .logo {
      color: ${({ theme }) => theme.setblackColor};
      font-weight: 600;
      cursor: pointer;
      align-items: center;
      justify-content: center;

      .icon {
        font-size: 25px;
        color: ${({ theme }) => theme.setPrimaryColor};
        transform: translateY(5px);
      }
    }

  
    .toggleNavbar {
      .icon {
        font-size: 25px;
        color: ${({ theme }) => theme.setPrimaryColor};
      }
      &:hover.icon {
        color: ${({ theme }) => theme.setSecondaryColor};
      }
    }
  }

  @media screen and (max-width: 768px) {
      .navBar {
        position: absolute;
        background: ${({ theme }) => theme.setwhiteColorDeam};
        height: max-content;
        width: 80%;
        border-radius: 1rem;
        top: -500rem;
        left: 50%;
        padding: 1rem;
        transform: translate(-50%);
        z-index: 2000;
        box-shadow: 0 2px 4px rgba(2, 15, 29, 0.904);
        transition: 0.5s ease-in-out;

        .navLists {
          flex-direction: column;
          justify-content: center;
          width: 100%;
          margin: auto;
          padding: 0.5rem 0;

          .navItem {
            padding: 0.5rem 0;

            .navLink {
              color: ${({ theme }) => theme.settextColor};
              font-size: 0.9rem;
              font-weight: 600;
              &:hover {
                color: ${({ theme }) => theme.setPrimaryColor};
              }
            }
          }
          .btn {
            margin-top: 1rem;

            a {
              font-weight: 500;
              color: ${({ theme }) => theme.setwhiteColor};
              
            }
          }
        }

        .closeNavbar {
          position: absolute;
          top: 1rem;
          right: 1.5rem;
          color: ${({ theme }) => theme.setPrimaryColor};
          &:hover {
            color: ${({ theme }) => theme.setSecondaryColor};
          }
        }
      }

      .activeNavbar {
        top: 7rem;
      }
    }

  @media screen and (min-width: 769px) {
    .toggleNavbar,.closeNavbar{
      display: none;

    }

    .header {
      padding: 1.5rem 2rem ;

      .navBar{

        .navLists{
          display: flex;
          align-items: center;
          justify-content:center;
          flex-direction: row;

            .navItem{
              .navLink{
                color: ${({ theme }) => theme.settextColor};
                padding:0 0.45rem;
                font-size: 0.9rem;
                font-weight: 500;

                &:hover{
                  color: ${({ theme }) => theme.setPrimaryColor};
                }

              }
            }
            .btn{
              margin-left: 1rem;
              a{
                color: ${({ theme }) => theme.setwhiteColor};
               font-weight: 500;

              }
            }
        }


      }
    }
    
  }
  @media screen and (min-width: 960px) {
    .header {
      .navBar{
        .navLists{
            .navItem{
              padding: 0 0.7rem;
              
            }
        }


      }
    }

  }
  @media screen and (min-width: 1240px) {
    .header {
      padding:1rem 8.5rem;
    }

  }

`;

export default NavbarHeader;
