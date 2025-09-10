// Styles imports
import './banner.sass';

// Icons imports
import { ImWhatsapp } from 'react-icons/im';
import { GiPresent } from 'react-icons/gi';
import { RiHeartsFill } from 'react-icons/ri';
import { BsFillSuitHeartFill, BsFillPinMapFill } from 'react-icons/bs';
import { FaRegHandPointDown } from 'react-icons/fa';


const Banner = () => {

  // Removido profile.imagem para visual moderno
  const links = {
    localization: 'https://www.google.com.br/maps/place/Av.+Dom+Jos%C3%A9+Andr%C3%A9+Coimbra,+1520+-+Marciano+Brand%C3%A3o,+Patroc%C3%ADnio+-+MG,+38740-000/@-18.9446518,-47.0045441,15z/data=!3m1!4b1!4m5!3m4!1s0x94afba6190720015:0x1c1d6cc851af332d!8m2!3d-18.944652!4d-46.9957893',
    contact: 'https://wa.me/553492540828?text=Olá Meliny e Wesley, agradeço por este convite, será uma honra poder celebrar este momento com vocês.',
    presents: 'https://noivos.casar.com/wesley-e-meliny#/presentes',
    targetPage: 'blank',
  }

  return (
    <div className='banner modern-banner'>
      {/* Bloco visual moderno: gradiente, monograma animado e partículas/florais SVG */}
      <div className="banner-visual">
        {/* Gradiente de fundo e partículas/florais animados */}
        <svg className="banner-particles" width="100%" height="100%" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="8" fill="#fff6" >
            <animate attributeName="cy" values="60;80;60" dur="4s" repeatCount="indefinite" />
          </circle>
          <circle cx="340" cy="120" r="6" fill="#fff4">
            <animate attributeName="cy" values="120;140;120" dur="5s" repeatCount="indefinite" />
          </circle>
          <ellipse cx="200" cy="40" rx="12" ry="6" fill="#fff3">
            <animate attributeName="rx" values="12;18;12" dur="6s" repeatCount="indefinite" />
          </ellipse>
          {/* Florais estilizados */}
          <path d="M100 180 Q110 170 120 180 T140 180" stroke="#fff7" strokeWidth="2" fill="none">
            <animate attributeName="d" values="M100 180 Q110 170 120 180 T140 180;M100 180 Q115 160 130 180 T140 180;M100 180 Q110 170 120 180 T140 180" dur="7s" repeatCount="indefinite" />
          </path>
        </svg>
        {/* Monograma animado */}
        <div className="monogram">
          <span className="monogram-initial">M</span>
          <span className="monogram-and">&amp;</span>
          <span className="monogram-initial">W</span>
        </div>
      </div>
      <main className='main'>
      <section className='simbol'>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <RiHeartsFill className='infinite' size={90} />
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      </section>
      <hr />
      <h2 className='subtitle'>
        "Convite de Casamento"
      </h2>
      <h1 className='title'>
        Meliny Sara  <br/> & <br/> Wesley Silva
      </h1>
      <p className='text'>
        Com a benção de Deus e de seus pais, nós, lhe convidamos a celebrar este momento de tão grande alegria conosco, em um culto de glorificação a Deus.
        <br />
        A realizar-se no dia:
      </p>
        <hr />
      <h2 className='date'>
        28 / Outubro / 2023
      </h2>
      <p className='hours'>
        Às 19:30 horas
      </p>
      <h2 className='title'>
        Igreja Cristã Maranata
      </h2>
      <marquee className='maranata' behavior="" direction='' truespeed='500ms'>
      Maranata O Senhor Jesus Vem!
      </marquee>
      <hr />
      <p className='text'>
        Toque para acessar
      </p>
      <FaRegHandPointDown className='FaRegHandPointDown' size={30}/>
      <div className="links_container">
        <a href={links.localization} title='Localização' target="_blank" rel="noopener noreferrer">
          <BsFillPinMapFill size={28} />
        </a>
        <a href={links.contact} alt='Icon Whatsapp' title='Confirmação de presença' target={links.targetPage}><ImWhatsapp size={26}/></a>
      </div>
      <a href={links.presents} alt='Icons Present' title='Presentear' target={links.targetPage}>
        <GiPresent size={34}/>
      </a>
      <p className='end_text'>
        "Então, a nossa boca se encheu de riso, e a nossa língua, de cânticos; então, se dizia entre as nações: Grandes coisas fez o Senhor a estes. Grandes coisas fez o Senhor por nós, e, por isso, estamos alegres." <br /> Salmos 126:2
      </p>
      <section className='simbol'>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <RiHeartsFill className='infinite' size={90} />
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      <BsFillSuitHeartFill size={32}  className='heart'/>
      </section>
      </main>
    </div>
  )
}

export default Banner