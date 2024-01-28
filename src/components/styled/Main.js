import { styled } from "styled-components";

const MainStyle = styled.section`

.main{
   width:100%;


   .secTitle{
     .title{
        position: relative;
        width: max-content;
        color:${({theme})=>theme.settextColor};
        margin: 1rem 0;
        z-index: 2;
        &::after{
            position: absolute;
            content: '';
            background:${({theme})=>theme.setSecondaryColor}; 
            height: 5px;
            width: 120px;
            right: 0;
            bottom: 5px;
            z-index: -1;

        }
    }
   }


 .secContent{
    justify-content: center;
    gap: 1.5rem;

    .singleDestination{
        height: 100%;
        display: grid;
        row-gap:10px;
        border-radius: 10px;
        align-items: center;
        background: ${({theme})=>theme.setcardBg};
        box-shadow: 0px 2px 4px rgba(140, 140, 141, 0.549);
        overflow: hidden;

        &:hover{
            background:${({theme})=>theme.setcardHover}; 
            box-shadow: 1px 4cqmax 4px rgba(85, 85, 114, 0.549);
            transition: .3s ease
        }

        .imageDiv{
            height: 200px;
            width: 100%;
            overflow: hidden;
            img{
                height: 100%;
                width: 100%;
                object-fit: cover;
                transition: 2s ease;
            }

            &:hover{
                img{
                    transform: scale(1.1);
                }
            }

            
        }
        .cardInfo{
                padding: 1rem;

                .destTitle{
                    color:${({theme})=>theme.setblackColor};
                    font-size: 1.25rem;

                }
                .continent{
                    gap:0.5rem;


                    .icon{
                        color:${({theme})=>theme.settextColor};
                        font-size: 18px;
                        
                    }

                    .name{
                        color:${({theme})=>theme.settextColor};
                        font-size: 14px;
                        font-weight: 400;
                    }
                }

                .fees{
                    width: 100%;
                    justify-content:space-between;
                    padding: 1rem;
                    margin: 1rem 0;
                    border-top: 1.5px solid ${({theme})=>theme.setgreytext};
                    border-bottom : 1.5px solid ${({theme})=>theme.setgreytext};

                    .grade{
                        color:${({theme})=>theme.settextColor};
                        max-width: 100px;
                        line-height: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: center;


                        small{
                            text-align: center;
                            background: ${({theme})=>theme.setgrandientColor};
                            border-radius: 1rem;
                            color:${({theme})=>theme.setwhiteColor};
                            padding: 1px 10px;
                            font-size: 10px;
                        }
                    }

                    .price{
                        color:${({theme})=>theme.setblackColor};
                        font-size: 2rem;
                    
                    }

                }

                .desc{
                    font-size: 13.5px;
                    color:${({theme})=>theme.settextColor};
                    font-weight: 500;


                }

                .btn{
                    margin-top:1rem;
                    color:${({theme})=>theme.setwhiteColor};
                    font-weight: 600;
                    justify-content: space-between;
                    gap:0.5rem;

                    .icon{
                        align-self: center;
                        font-size: 18px;
                    }

                }
            }

    }
 }

}

@media screen and (min-width:500px) {

    .title{
        font-size: 1.5rem;

        &::after{
            width: 155px !important;

        }
    }

    .secContent{
        grid-template-columns: repeat(2,1fr);

        .singleDestination{
            height: auto;
        }
    }
    
}

@media screen and (min-width:840px) {

    .secContent{
        grid-template-columns: repeat(3,1fr);

        .singleDestination{
            height: auto;
        }
    }
    
}


`

export default MainStyle;