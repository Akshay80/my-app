import React from 'react';
import logo from '../images/logo.png';
// import ReactDOM from 'react-dom';
import contact from './Contact';
import '../css/Header.css';
import banner from '../images/banner.jpg';

function Header() {
    return (
      <>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">
      <img src={logo} id="logo" alt=""/>
       Microsoft
      </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/contact">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/service">Service</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav> 
<div id="banner">
  <form class="containers">
    <h5 className="title">* Sign Up for your Free Trial *</h5>

    <label className="labelling">First Name:</label>
    <input type="text" placeholder="FirstName" name="first" required/>

    <label className="labelling">Last Name:</label>
    <input type="text" placeholder="LastName" name="last" required/>

    <label className="labelling">Email:</label>
    <input type="text" placeholder="Email" name="email" required/>

    <label className="labelling">Password:</label>
    <input type="password" placeholder="Password" name="psw" required/>

    {/* <button type="submit" class="butn">Login</button> */}
    <button type="submit" id="buton" class="btn btn-outline-danger btn-sm">Submit</button>
  </form>
</div>

<div class="container">
    <div class="row text-center">
        <div class="col-12">
          <h2 class="mt-40" style={{marginTop:"40px"}}>Meet the team</h2>
            <hr class="mt-4 w-80"/>
        </div>
    </div>
</div>

<div className="container">
<div class="row">
  <div class="col-sm-6">
    <div class="card" style={{marginTop:"20px", marginBottom:"50px"}}>
      <div class="card-body">
        <h5 class="card-title">Team 1</h5>
        <p class="card-text">With supporting text below as a natural lead-in to additional contents are like this only.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card" style={{marginTop:"20px", marginBottom:"50px"}}>
      <div class="card-body">
        <h5 class="card-title">Team 2</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  </div>
</div>
</div>

<div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">Web Hosting</h1>
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
      </div>
      <div class="container">
          <div class="row text-center">
              <div class="col-12">
                <h3>Build with ease</h3>
              </div>
      </div>
      </div>
      <hr class="my-4 w-80"/>
      <div class="row text-center">
        <div class="col-12">
          <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </div>
    </div>
      <div class="container">
        <div class="row align-item-center">
            <div class="col-xs-12 col-md-4 col-sm-6">
                <i class="fa fa-html5" id="htmlicon"></i>
                <h3 class="mt-4">HTML</h3>
                <p>Built with the latest version of HTML, HTML5</p>
            </div>
            <div class="col-xs-12 col-md-4 col-sm-6">
                <i class="fa fa-bold" id="bootstrapicon"></i>
                <h3 class="mt-4">Bootstrap</h3>
                <p>Built with the latest version of Bootstrap, Bootstrap4</p>
            </div>
            <div class="col-xs-12 col-md-4 col-sm-6">
                <i class="fa fa-css3" id="cssicon"></i>
                <h3 class="mt-4">CSS3</h3>
                <p>Built with the latest version of CSS, CSS3</p>
            </div>
    </div>
      </div>
      <hr class="mt-4"></hr>



<div class="footer-dark">
        <footer>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-md-3 item">
                        <h3>Services</h3>
                        <ul>
                            <li><a href="#">Web design</a></li>
                            <li><a href="#">Development</a></li>
                            <li><a href="#">Hosting</a></li>
                        </ul>
                    </div>
                    <div class="col-sm-6 col-md-3 item">
                        <h3>About</h3>
                        <ul>
                            <li><a href="#">Company</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div class="col-md-6 item text">
                        <h3>Company Name</h3>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    </div>
                    <div class="col item social"><a href="#" style={{backgroundColor:"#3b5998"}}><i class="fa fa-facebook" id="fb"></i></a><a href="#" style={{backgroundColor:"#00aced"}}><i class="fa fa-twitter" id="twitter"></i></a><a href="#" style={{backgroundColor:"#FFFC00"}}><i class="fa fa-snapchat" id="snap"></i></a><a href="#" style={{backgroundColor:"#517fa4"}}><i class="fa fa-instagram" id="insta"></i></a></div>
                </div>
                <p class="copyright">Company Name © 2018</p>
            </div>
        </footer>
    </div>
</>
    );
  }
  
export default Header;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import logo from '../images/logo.jpg';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   logo: {
//     // flexGrow: 1,
//     width:'50px',
//     height:'50px',
//     borderRadius: "50%"
//   },
//   title:{
//       flexGrow: 1,
//   }
// }));

// export default function ButtonAppBar() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
//             {/* <MenuIcon /> */}
//             <img src = {logo} className = {classes.logo}  />
//           </IconButton>
//           <Typography variant="h6" className={classes.title}>
//           </Typography>
          
//           <Button color="inherit">Home</Button>
//           <Button color="inherit">Contact</Button>
//           <Button color="inherit">Services</Button>
//           <Button color="inherit">About</Button>
//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }
