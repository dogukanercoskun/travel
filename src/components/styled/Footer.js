import { styled } from "styled-components";

const FooterStyle = styled.section`
  .footer {
    width: 100%;
    position: relative;
    padding: 2rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    .videoDiv {
      position: absolute;
      height: 100%;
      width: 100%;

      .video {
        height: 100%;
        object-fit: cover;
      }

      &::after {
        content: "";
        position:absolute;
        background: rgba(10, 84, 107, 0.307);
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        mix-blend-mode: multiply;
      }
    }
    .secContent {
      width: 100%;
      height: max-content;
      padding: 2rem initial;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: auto;
      row-gap: 2rem;
      z-index: 100;

      .contactDiv {
        justify-content: space-between;
        flex-direction: column;
        gap: 1rem;

        .text {
          small {
            font-size: 13px;
            font-weight: 400;
            color: ${({ theme }) => theme.setwhiteColor};
          }

          h2{
            color: ${({ theme }) => theme.setwhiteColor};
            font-size: 1.8rem;

          }
        }

        .inputDiv{
            width: 100%;
            gap: 1rem;
            flex-direction: column;

            input{
                width: 100%;
                padding: 0.5rem 0.6rem;
                border-radius: 3rem;
                border: 1px solid ${({ theme }) => theme.setwhiteColor};
                outline: none;
                background:transparent;
                color:${({ theme }) => theme.setwhiteColor};

                &::placeholder{
                    color: ${({ theme }) => theme.setwhiteColor};
                    opacity: 0.5;
                }
            }

            .btn{
                width: 100%;
                justify-content: center;
                color: ${({ theme }) => theme.setwhiteColor};
                font-weight: 500;
                gap: 0.5rem;

                .icon{
                    font-size: 18px;

                }

            }
        }
      }

      .footerCard{
        position: relative;
        padding: 1rem 1rem 4rem;
        gap: 2rem;
        border-radius: 1rem;
        background:${({theme})=>theme.setbodyColor};
        width: 100%;
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        overflow: hidden;

        .footerIntro{
            flex-basis: 50%;
            justify-content: center;
            align-items: flex-start;
            flex-direction: column;
            row-gap: 0.5rem;
        }

        .logoDiv{
            .logo{
                color: ${({theme})=>theme.setblackColor};
                font-weight: 600;

                .icon{
                    font-size: 25px;
                    color: ${({theme})=>theme.setPrimaryColor};
                    margin-right: 10px;

                }

            }

        }

        .footerParagraph{
          font-size:13px ;
          color: ${({theme})=>theme.settextColor}
      }
      .footerSocials{
            column-gap: 0.5rem;

            .icon{
                color: ${({theme})=>theme.setblackColor};
                font-size: 20px;

                &:hover{
                    color: ${({theme})=>theme.setPrimaryColor};
                }
            }
        }

        .footerLinks{
        flex-basis: 50%;
        width: 100%;
        gap: 1rem;
        grid-template-columns: repeat(2,1fr);
        justify-content: space-between;

            .linkGroup{

                .groupTitle{
                display:block;
                font-weight: 600;
                color: ${({theme})=>theme.setblack};
                margin-bottom: 0.5rem;
            }
                
            .footerList{
                font-size: 15px;
                color: ${({theme})=>theme.settextColor};
                transition: 0.3s ease-in-out;

                .icon{
                    font-size: 15px;
                    color: ${({theme})=>theme.setgreytext};
                    
                }

                &:hover{
                    color: ${({theme})=>theme.setPrimaryColor};
                    transform:translateX(7px);

                    .icon{
                        color: ${({theme})=>theme.setSecondaryColor};
                    }
                }

            }






            }

        }

        .footerDiv{
            flex-direction: column;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background: ${({theme})=>theme.setPrimaryColor};
            padding: 0.5rem 2rem;

            small{
                font-size: 10px;
                color: ${({theme})=>theme.setwhiteColor};
            }
        }
        
    }
  }
}

@media screen and(min-width:500px ){
  .footer{
    .secContent{
      .footerCard{
        .footerLinks{
          grid-template-columns: repeat(3,1fr);
          padding-bottom: 1rem;
        }

        .footerDiv{
          justify-content: space-between;
          flex-direction: row;

          small{
            font-size: 14px;
            color: ${({theme})=>theme.setwhiteColor};
          }
        }
      }
    }

  }
  
}

@media screen and(min-width:660px ){
  .footer{
    .secContent{
     .contactDiv{
      flex-direction: row;
      justify-content: space-between;

      .inputDiv{
        width: max-content;
        flex-direction: row;
        justify-content: flex-start;

        input{
          width: 60%;

        }
        .btn{
          width: max-content;
        }
      }
     }
    }

  }
  
}
@media screen and(min-width:840px ){
  .footer{
    padding: 5rem 0;
    .secContent{
      .footerCard{
        flex-direction: row;
        .footerLinks{
          grid-template-columns: repeat(3,1fr);
          padding-bottom: 1rem;
          
        
      }
    
    }

  }
  
}
}

@media screen and(min-width:1240px ){
  .footer{
  
    .secContent{

      .footerCard{
        padding: 3rem 1rem;


        .footerIntro{
          .footerParagraph{
             font-size:15px ;
             color: ${({theme})=>theme.settextColor}
          }

          .footerSocials{
            column-gap: 1rem;

                .icon{
                  color: ${({theme})=>theme.settextColor};
                  font-size: 25px;
                  &:hover{
                    color: ${({theme})=>theme.setPrimaryColor}
                 }
            
          }
        }

        .footerLinks{
          .linkGroup{
            .footerList{
              font-size: 16px;
              padding: 5px 0;
            }
          }
        }
      }
    
  }
  
}
}
}
`;

export default FooterStyle;
