import React from 'react'
import readNews from '../assets/read_news.jpg'
import { ImageRight, Logo, Paragraph } from '../styles/styled'
import logo from '../assets/logo.svg'


document.body.style = "background-color: #121214"

const Home = () => {
    return (
        <div>


            <ImageRight>
                <img src={readNews} />
            </ImageRight>

            <Logo>
                <img src={logo} />
            </Logo>

            <Paragraph>
                <p className="green">atualize ideias e informações em 5 minutos.</p>
                <p className="bold">tudo que você precisa saber para começar seu dia bem e informado</p>
                <p>noticias sobre o universo Rocketseat, e tudo o que precisa para começar o dia melhor. perfeito para se preparar para codar ☕</p>
            </Paragraph>

            <input placeholder="Insira seu e-mail" />


        </div>
    )
}

export default Home