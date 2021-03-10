import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// reactstrap components
import {
  NavbarBrand,
  Navbar,
  Container,
  NavbarToggler,
} from "reactstrap";

function StartupNavbar(props) {
  const [collapseOpen] = React.useState(false);
  const [color, setcolor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("resize", updateColor);
    // Specify how to clean up after this effect:
    return function cleanup() {
      window.removeEventListener("resize", updateColor);
    };
  });
  // function that adds color white/transparent to the navbar on resize (this is for the collapse)
  const updateColor = () => {
    if (window.innerWidth < 993 && collapseOpen) {
      setcolor("navbar-transparent");
    } else {
      setcolor("navbar-transparent");
    }
  };
  
  // this function is to open the Search modal

  const setIcon = () => {
    if (props.brandText === 'Home'){
      console.log('Home')
    }
    if (props.brandText === 'About'){
      console.log('About')
    }
    if (props.brandText === 'Project'){
      console.log('Project')
    }
    
  }
 
  
  return (
    <>
      <Navbar className={classNames("navbar-absolute", color)} expand="lg">
        <Container fluid>
          <div className="navbar-wrapper">
            <div
              className={classNames("navbar-toggle d-inline", {
                toggled: props.sidebarOpened,
              })}
            >
              <NavbarToggler onClick={props.toggleSidebar}>
                <span className="navbar-toggler-bar bar1" />
                <span className="navbar-toggler-bar bar2" />
                <span className="navbar-toggler-bar bar3" />
              </NavbarToggler>
            </div>
              <NavbarBrand onClick={setIcon} onChange={setIcon}>
                {props.brandText}
              </NavbarBrand>
          </div>
         
        </Container>
      </Navbar>
     
        
    </>
  );
}

export default StartupNavbar;
