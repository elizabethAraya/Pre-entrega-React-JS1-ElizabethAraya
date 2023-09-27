
import React, { useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



function Navbar() {

    const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  }

    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Nombre de la tienda</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="javascript:void(0)">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Productos</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="javascript:void(0)"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Categorias
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="javascript:void(0)">Productos tipo 1</a></li>
                  <li><a className="dropdown-item" href="javascript:void(0)">Productos tipo 2</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="javascript:void(0)">Ofertas de Productos</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="javascript:void(0)">Contacto</a>
              </li>
            </ul>
            <div className="d-flex align-items-center">
            <button className="btn btn-link" onClick={addToCart}>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" bounce size="2xs" style={{color: "#995dd5",}} />
              {cartCount > 0 && (
                <span className="badge bg-danger ml-2">{cartCount}</span>
              )}
            </button>
          </div>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Escribe el nombre del producto"
              />
              <button className="btn btn-outline-success" type="submit">Buscar</button>
            </form>
          </div>
        </div>
      </nav>
    )
  }


export default Navbar
