import { useState } from 'react'

import './App.css'
import './Responsive.css'
import './page-2.css'


export function Btn() {
  return <button className='btn-header'>Quero ser Nubank</button>
}


export function App() {

  

  return (
    <>
      <header>
        <img className="logo-nubank" src="./src/assets/nubank-logo-0-1.png" alt="Logo do NuBank" />

        <nav className="menu-links">
          <a className="links-header" href="#">Nubank</a>
          <a className="links-header" href="#">Nubank Ultravioleta</a>
          <a className="links-header" href="#">Nu Empresas </a>
          <a className="links-header" href="#">Segurança</a>
          <a className="links-header" href="#">Saiba Mais</a>
        </nav>

        <Btn className='btn-header'>Quero ser Nubank</Btn>
      </header>

      <main>
        <img className="background-image" src="./src/assets/fundo-nubank.avif" />
        <div className='wrapper-main'>
          <section className='section-main-1'>
            <h1 className='text-main'>Vote no novo nome da arena e veja o seu próprio nome aparecer lá</h1>
            <button className='btn-main'>Votar agora</button>
          </section>

          <section className='section-main-2'>
            <h2 className='text-main-2'>Peça seu Cartão de Crédito e sua Conta do Nubank</h2>
            <input className='input-main' type="text" placeholder="   Digite seu CPF" />
            <button className='btn-main-2' aria-label='continuar cadastros'>
              <div className='btn-main-2-wrapper'>
                <p className='btn-main-2-text'>Continuar</p>
                <img className='btn-main-2-arrow' src="./src/assets/arrow_.svg" />
              </div>
            </button>
          </section>
        </div>
      </main>




      <section className='menu-options'>
        <a href="#">💜Conta do Nubank</a>
        <a href="#">💳Cartão de Crédito</a>
        <a href="#">🔒Seguro Nubank</a>
        <a href="#">📲Nu Celular</a>
        <a href="#">🛍️Shopping</a>
        <a href="#">📈Investimentos</a>
        <a href="#">💰Emprestimos</a>
      </section>

      <section className='page-2'>
        <div className='hero-card'>
          <div className='card'>

            <div className='relocator'>

              <div className='wrapper-card-descrition'>
                <div className='card-yellow'></div>
                <p className='number-card'>•••• •••• •••• 5434</p>
                <p className='card-description'>ROBSON ARRUDA</p>
              </div>
              <div className='wrapper-card-title'>
                <img className='card-title' src="public/nubank-icon.webp" alt="Logo Nu" />
              </div>
            </div>
          </div>
          <div className='hero-card-text'>
            <button className='btn-hero-card-1'>Cartão de Credito</button>
            <h1>O cartão que você controla</h1>
            <p>Sem anuidade. Sem complicação. Com limite que acompanha você e notificações instantaneas a cada compra.</p>

            <ul>

              <li>✔ Zero anuidade, para sempre</li>
              <li>✔ Programa de pontos e cashback</li>
              <li>✔ Aceito em milhões de estabelecimentos</li>
              <li>✔ Bloqueio e desbloqueio pelo app</li>

            </ul>

            <button>Pedir meu Cartão</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
