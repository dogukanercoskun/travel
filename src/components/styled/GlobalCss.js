import { createGlobalStyle } from "styled-components";



export const GlobalStyle= createGlobalStyle`


body{
margin: 0;
padding:0;
box-sizing: border-box;
font-family: 'Indie Flower', cursive;
background:  ${({theme})=>theme.setbodyColor};



@media screen and (min-width: 1240px) {

    .container{
        width: 80% !important;
        margin: auto !important;

    }

    .section{
        padding: 6rem 0 4rem;
    }

    
}


@media screen and (min-width: 2560px) {

body{
    zoom: 1.7;
}
}


a{
    text-decoration: none;
}

li{
    list-style: none;
}

.section{
    padding: 4rem 0 2rem;
}

.container{
   padding-left :1.5rem;
   padding-right: 1.5rem;
}

.icon{
   font-size :2rem ;
   cursor: pointer;
}

.flex{
    display: flex;
    align-items: center;
}

.grid{
   display :grid ;
   align-items: center;
}

.btn{
    padding: .6rem 1.5rem;
    background: ${({theme})=>theme.setgrandientColor};
    border-radius: 3rem;
    border: none;
    outline: none;
    cursor: pointer;

}

.btn a{
    color:${({theme})=>theme.setwhiteColor};
    font-weight: 500;
}

.btn:hover{
    background: ${({theme})=>theme.setSecondaryColor};

}

image, video{
    width: 100%;
    height: auto;
}
input{
    font-size: 100%;
    
}





}



`
