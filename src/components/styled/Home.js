import { styled } from "styled-components";

const HomeStyle = styled.section`

 
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: auto;

    .overlay {
      position: absolute;
      height: 100%;
      width: 100%;
      background: rgb(47, 106, 127);
      top: 0;
      bottom: 0;
      z-index: 1;
      mix-blend-mode: hard-light;
    }

    .video {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      bottom: 0;
      object-fit: cover;
    }

    .homeContent {
      width: 100%;
      height: max-content;
      padding: 8rem 1.5rem 3rem;
      display: flex;
      row-gap: 3rem;
      flex-direction: column;
      align-items: stretch;
      justify-content: center;
      margin: auto;
      z-index: 100;
      color: ${({theme})=>theme.setwhiteColor};


      .textDiv{
        padding:2rem 0;

        .smallText{
            font-size: 13px;
            text-transform: uppercase;
        }

        .homeTitle{
            position: relative;
            font-size: 1.8rem;
            
        }
      }

      .cardDiv{
        position: relative;
        padding: 2rem 1rem;
        background: ${({theme})=>theme.setwhiteColor};
        border-radius: 10px;
        gap:1rem;

        label{
          display:block;
          color:${({theme})=>theme.settextColor}; 
          padding-bottom: 10px;
          font-size: 13px;
          font-weight: 400;
        }

        .label_total{
          justify-content: space-between ;
          align-items: center;

          .total{
            color:${({theme})=>theme.settextColor}; 
            font-size: 18px;
            padding-bottom:10px;
          }
        }

        .input{
          height: 40px;
          padding: 0 1rem;
          background-color:${({theme})=>theme.setinputColor}; 
          border-radius :3rem ;

          input{
            background: none;
            border: none;
            outline: none;
            width: 100%;
            font-size: 13px;
            font-weight: 400;
            &::placeholder{
              font-size: 13px;

            }
          }
          .icon{
            font-size: 18px;
            color:${({theme})=>theme.setPrimaryColor}
            !important;
            margin-left: 10px;

          }
          
          .input[type=range]{
            background: blue;

          }
        }
        .searchOptions{
          position: absolute;
          background:${({theme})=>theme.setgrandientColor};
          width: max-content;
          bottom: -0.7rem;
          column-gap: 0.8rem;
          padding: 5px 1rem;
          border-radius: 3rem;
          left: 50%;
          transform: translate(-50%);
          justify-content: center;
          cursor: pointer;
          &:hover{
            background:${({theme})=>theme.setPrimaryColor};
          }

          .icon{
            font-size: 18px;
          }
          span{
            font-size: 13px;
          }
        }
      }

      .homeFooterIcons{
        width: 100%;
        justify-content: center;

        .icon{
          font-size: 20px;
          margin:0 5px;
          color:${({theme})=>theme.setwhiteColor};
          font-weight: 600;
          &:hover{
            color: ${({theme})=>theme.setPrimaryColor};
          }

      
        }
      }
    }
  
`;

export default HomeStyle;
