import styled from 'styled-components'

export const ImageRight = styled.div`
display: flex;
align-items: flex-end;
justify-content: flex-end;
img{
    width: 50%;
    height: 100vh;
}

@media screen and (max-width: 600px){
    img{
        display: none;
    }
}
`

export const Logo = styled.div`

img{
    width: 27%;
    top: -45vw;
    position: relative;
    margin: 30px;
}

@media screen and (max-width: 600px){
    img{
        width: 80%;
        position: relative;
        top: 5vw;
    }
}
`

export const Paragraph = styled.div`
margin: 20px;
p{
    color: white;
    font-family: 'Work Sans', sans-serif;
    font-size: 0.9rem;
    font-weight: 300;
    /* margin: 20px; */
&.green{
    color: #08C05E;
    font-size: 1.2rem;
    font-weight: 700;
}

&.bold{
    font-weight: 600;
}
}

`

// 08C05E