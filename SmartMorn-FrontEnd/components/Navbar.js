// Nav.js
import Link from '../utils/helper/Link'; 

const Navbar = () => {
    return (
        <div>
        	<nav className="navbar is-fixed-top is-link">
        		<div className="navbar-brand">
								<Link href="/" activeClassName="is-active">
									<a className="navbar-item"> Home</a>
								</Link>
	          
				</div>
				<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
				  	<span aria-hidden="true"></span>
				  	<span aria-hidden="true"></span>
				  	<span aria-hidden="true"></span>
				</a>
				<div className="navbar-menu">
					<div className="navbar-menu">
					  	<div className="navbar-start">
								<Link href="/about" activeClassName="is-active">
									<a className="navbar-item">asd</a>
								</Link>
					   		<div className="navbar-item">
							  <div className="field is-grouped">
							    <p className="control">
							      <a className="button">
							        <span className="icon">
							          <i className="fas fa-twitter" aria-hidden="true"></i>
							        </span>
							        <span>Tweet</span>
							      </a>
							    </p>
							    <p className="control">
							      <a className="button is-primary">
							        <span className="icon">
							          <i className="fas fa-download" aria-hidden="true"></i>
							        </span>
							        <span>Download</span>
							      </a>
							    </p>
							  </div>
							</div>
					  	</div>
					  	<div className="navbar-end">
					  		
					  	</div>
					</div>
				</div>
				<div className="navbar-menu is-active">
				  
				</div>
        	</nav>
            
        </div>
    )
}
export default Navbar