import { useEffect, useRef, useMemo, useLayoutEffect } from 'react';
import { useState } from 'react'
import './App.css'
import './page-2.css'
import './page-3.css'
import './page-4.css'
import './Responsive.css'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function App() {

  useLayoutEffect(() => {
    gsap.to('.text-main, .btn-main, .section-main-2', {
      opacity: 1,
      y: 0,
      duration: 1,
    });

    return () => {
      gsap.killTweensOf('.text-main', '.btn-main', '.section-main-2');
    };
  }, [])

  return (
    <>
      <header>
        <img className="logo-nubank" src="./src/assets/nubank-logo-0-1.png" alt="Logo do NuBank" />

        <nav className="menu-links">
          <a className="links-header" >Nubank</a>
          <a className="links-header" >Nubank Ultravioleta</a>
          <a className="links-header" >Nu Empresas </a>
          <a className="links-header" >Segurança</a>
          <a className="links-header" >Saiba Mais</a>
        </nav>

        <button className='btn-header'>Quero ser Nubank</button>
      </header>

      <main>
        <div className='background-image'></div>
        <div className='wrapper-main'>
          <section className='section-main-1'>
            <h1 className='text-main'>Vote no novo nome da arena e veja o seu próprio nome aparecer lá</h1>
            <button className='btn-main'>Votar agora</button>
          </section>

          <section className='section-main-2'>
            <h2 className='text-main-2'>Peça seu Cartão de Crédito e sua Conta do Nubank</h2>

            <input className='input-main'
              type="text"
              id="cpf"
              placeholder="Digite seu CPF"
              maxlength="14"
              pattern="\d{3}\.\d{3}\.\d{3}-\d{2}"
              required />




            <button className='btn-main-2' aria-label='continuar cadastros'>
              <div className='btn-main-2-wrapper'>
                <p className='btn-main-2-text'>Continuar </p>
              </div>
            </button>
          </section>
        </div>
      </main>




      <section className='menu-options'>
        <a >💜Conta do Nubank</a>
        <a >💳Cartão de Crédito</a>
        <a >🔒Seguro Nubank</a>
        <a >📲Nu Celular</a>
        <a >🛍️Shopping</a>
        <a >📈Investimentos</a>
        <a >💰Emprestimos</a>
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
            <div className='wrapper-hero-card-text'>
              <button className='btn-hero-card-1'>Cartão de Credito</button>
              
                <h1 className='hero-card-title'>O cartão que você controla</h1>
                <p className='hero-card-description'>Sem anuidade. Sem complicação. Com limite que acompanha você e notificações instantaneas a cada compra.</p>

                <ul className='hero-list'>

                  <li><span className='icon-list'>✔</span> Zero anuidade, para sempre</li>
                  <li><span className='icon-list'>✔</span> Programa de pontos e cashback</li>
                  <li><span className='icon-list'>✔</span> Aceito em milhões de estabelecimentos</li>
                  <li><span className='icon-list'>✔</span> Bloqueio e desbloqueio pelo app</li>

                </ul>
              
              <button className='btn-hero-card-2'>Pedir meu Cartão</button>
            </div>
          </div>
        </div>
      </section>

      <section className='page-3'>
        <div className='page-3-wrapper'>
          <h1 className='page-3-title'>Pronto para simplificar sua vida financeira?</h1>
          <p className='page-3-description'>Abra sua conta em minutos. Sem filas, sem papelada, sem burocracia.</p>
          <button className='btn-page-3'>Abrir minha conta grátis</button>
        </div>
      </section>

      <footer>
        <div className='footer-wrapper'>
          <div className='footer-section-1'>
            <img className='footer-logo' src="./src/assets/nubank-logo-0-1.png" alt="Logo do NuBank" />
            <p>Nubank - Nu Pagamentos S.A.</p>
            <p>Reinventando a sua vida financeira desde 2013.</p>
          </div>

          <div className='footer-section-2'>
            <h2 className='title-section-2'>PRODUTOS</h2>
            <p>Conta digital</p>
            <p>Cartão de crédito</p>
            <p>Investimentos</p>
            <p>Empréstimo</p>
          </div>

          <div className='footer-section-3'>
            <h2 className='title-section-3'>NUBANK</h2>
            <p>Sobre nos</p>
            <p>Carreiras</p>
            <p>Imprensa</p>
            <p>Comunidade</p>
          </div>

          <div className='footer-section-4'>
            <h2 className='title-section-4'>AJUDA</h2>
            <p>Central de ajuda</p>
            <p>Blog</p>
            <p>Segurança</p>
            <p>Contato</p>
          </div>

        </div>

        <div className='footer-section-end'>
          <hr className='hr-footer' />
          <p>© 2026 Nubank. Todos os direitos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App
