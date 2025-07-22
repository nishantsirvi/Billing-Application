import './Menubar.css';
const Menubar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-2">
            <a class="navbar-brand" href="#">
                <img src={assets.logo} alt="Logo" height="40"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse p-2" id="navbarNav">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <link class="nav-link" to="/dashboard">Dashboard</link>
                    </li>
                    <li class="nav-item">
                        <link class="nav-link" to="/explore">Explore</link>
                    </li>
                    <li class="nav-item">
                        <link class="nav-link" to="/items">Manage Items</link>
                    </li>
                    <li class="nav-item">
                        <link class="nav-link" to="/category">Manage Categories</link>
                    </li>
                    <li class="nav-item">
                        <link class="nav-link" to="/users">Manage Users</link>
                    </li>
                </ul>
                {/* Add the dropdown for user profile */}
            </div>
        </nav>
    )   
}

export default Menubar;