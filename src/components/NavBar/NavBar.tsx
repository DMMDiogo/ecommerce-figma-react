//importar assets

import LogoSVG from '../../assets/svg/logo.svg' 
import style from './/NavBar.module.css'

// 1 - Criar função sempre
function NavBar() {
    // 2 - Tem que ter sempre um return
    return (
        <div className={style['main-header']}>
            <div className="logo-wrapper"><img src={LogoSVG} alt="logo" /></div>
            <nav className="links-wrapper">
                
                <div className="main-menu">
                <ul>
                    <li>Home</li>
                    <li>Shop</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Pages</li>
                </ul>
                    
                </div>
                <div className="utility-menu">
                <ul>
                    <li><a href="#login">Login</a></li>
                    <li><a href="#register">Register</a></li>
                    <li><a href="#search">Search</a></li>
                    <li><a href="cart">Cart</a></li>
                    <li><a href="fav">Fav</a></li>
                    
                </ul>
                </div>
            </nav>
        </div>)
  }
// 3 - Tem que ter um export do componente
  export default NavBar;

  // r + f + c + e - Cria automaticamente mais facil