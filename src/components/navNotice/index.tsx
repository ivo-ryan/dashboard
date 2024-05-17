
export const  NavNotice = () => {
  return (
    <li className="nav-item dropdown">
        <a href="#" className="nav-link nav-icon" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
        </a>
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                You have 4 new notifications

                <a href="#">
                    <span className="bagde rounded-pill bg-primary p-2 ms-2">
                        View all
                    </span>
                </a>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Lorem Ipsum</h4>
                    <p>Mensagem não lida </p>
                    <p>30 min. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-x-circle text-danger"></i>
                <div>
                    <h4>Satoru Gojo retorna </h4>
                    <p>No capítulo 260 de Jujutsu Kaisen o Honrado retorna para solar o roteiro malevolente</p>
                    <p>1 hr. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-check-circle text-success"></i>
                <div>
                    <h4>konosuba temporada 3 </h4>
                    <p>Finalmente o protagonista Kazuma Satou consegue ter um pouco de brilho na obra</p>
                    <p>2 hrs. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-info-circle text-primary"></i>
                <div>
                    <h4>Solo leveling </h4>
                    <p>Irá voltar em outubro!</p>
                    <p>4 hrs. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
            </li>

        </ul>
    </li>
  )
}
