import React from 'react'
import { Link } from 'gatsby'
// The scss needs to be imported here for running 'gatsby build'
import '../../sass/example-page/example-page.scss'
import '../../sass/experimental/mobilemenu.scss'
import '../../sass/experimental/placeholder.scss'

export default () => (

<React.Fragment>
	
	<div className="header-container">
		<header className="header">
			<Link to={"/templates/mobile"} className="button--mobile-sidebar" id="close-button"><i className="dashing-icon dashing-icon--menu"></i></Link>
			<div className="logo"><p className="text-color--purple">LOGO</p></div>

			<nav className="header-nav">
				<ul>
					<li><Link to={"/"} className="active">Page 1</Link></li>
					<li><Link to={"/"}>Page 2</Link></li>
					<li><Link to={"/"}>Page 3</Link></li>
				</ul>
			</nav>

			<div className="alert"><i className="dashing-icon dashing-icon--notification"></i><div className="count">100</div></div>
			<div className="profile">
				<div className="profile-image"><span className="initials">RF</span></div>
				<span className="profile-name">Ryan Fitzgerald</span>
				<i className="dashing-icon dashing-icon--arrow-down"></i>
			</div>

		</header>
	</div>

	<div className="sub-nav--container">
		<nav className="sub-nav">
			<ul>
				<li><Link to={"/"} className="active">Option 1</Link></li>
				<li><Link to={"/"}>Option 2</Link></li>
				<li><Link to={"/"}>Option 3</Link></li>
			</ul>
		</nav>
	</div>

	<main className="content">
		<div className="grid grid-padding">
			<div className="grid--full grid--half_desktop">

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Header description</p>
						<Link to="/templates/overpanel">Full Page</Link>
					</div>
				</div>

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Header description</p>
						<Link to="/templates/overpanel">Full Page</Link>
					</div>
				</div>

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Header description</p>
						<Link to="/templates/overpanel">Full Page</Link>
					</div>
				</div>

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Header description</p>
						<Link to="/templates/overpanel">Full Page</Link>
					</div>
				</div>

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Header description</p>
						<Link to="/templates/overpanel">Full Page</Link>
					</div>
				</div>

				<div className="card">
					<div className="card-content">
						<h1>Primary Header</h1>
						<p>Header description</p>
						<Link to="/templates/overpanel">Full Page</Link>
					</div>
				</div>

			</div>
		</div>
	</main>
</React.Fragment>

)
