import React, { Component } from 'react';
// import logo from './img/logo.svg';
import profilePic from './img/component01/IMG_4421.jpg';
import article1Pic from './img/component01/IMG_4420.jpg';
import article2Pic from './img/component01/IMG_4921.jpg';
// import article2Pic from './img/component01/IMG_4792.jpg';
import './css/App.css';
import './css/component01.css';
import './css/font-awesome.css';

class Component01 extends Component {
  render() {
    return (

    // <div>Component01
    //     <br/><img src={logo} width="100px" />



              <div className="w3-light-grey">

              <div className="w3-content" style={{"maxWidth":"1400px"}}>

                <header className="w3-container w3-center w3-padding-32">
                  <h3 className="w3-hide"><b>Simplicity is the new sexy</b></h3>
                  <p>Welcome to <span className="w3-tag">unknown</span></p>
                </header>

                <div className="w3-row">

                  <div className="w3-col l8 s12">
                    <div className="w3-card-4 w3-margin w3-white">
                      <img src={article1Pic} alt="Nature" style={{"width":"100%"}} />
                        <div className="w3-container">
                          <h3><b>SIMPLICITY IS THE NEW SEXY</b></h3>
                          <h5>Title description, <span className="w3-opacity">April 7, 2017</span></h5>
                        </div>

                        <div className="w3-container">
                          <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                            tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                          <div className="w3-row">
                            <div className="w3-col m8 s12 w3-hide">
                              <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                            </div>
                            <div className="w3-col m4 w3-hide-small w3-hide">
                              <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
                            </div>
                          </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="w3-card-4 w3-margin w3-white" style={{"overflow":"hidden"}}>
                      <img src={article2Pic} alt="Nature" style={{"width":"100%", "marginTop" : "-190px"}} />
                      <div className="w3-container">
                        <h3><b>OLD EDINBURGH</b></h3>
                        <h5>Title description, <span className="w3-opacity">April 17, 2017</span></h5>
                      </div>

                      <div className="w3-container">
                        <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                          tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                        <div className="w3-row">
                          <div className="w3-col m8 s12 w3-hide">
                            <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                          </div>
                          <div className="w3-col m4 w3-hide-small w3-hide">
                            <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-tag">0</span></span></p>
                          </div>
                        </div>
                      </div>
                    </div>

                      <div className="w3-card-4 w3-margin w3-white w3-hide" style={{"display" : "none"}}>
                        <img src="/w3images/bridge.jpg" alt="Norway" style={{"width":"100%"}} />
                          <div className="w3-container">
                            <h3><b>BLOG ENTRY</b></h3>
                            <h5>Title description, <span className="w3-opacity">April 2, 2014</span></h5>
                          </div>

                          <div className="w3-container">
                            <p>Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed
                              tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.</p>
                            <div className="w3-row">
                              <div className="w3-col m8 s12">
                                <p><button className="w3-button w3-padding-large w3-white w3-border"><b>READ MORE »</b></button></p>
                              </div>
                              <div className="w3-col m4 w3-hide-small">
                                <p><span className="w3-padding-large w3-right"><b>Comments  </b> <span className="w3-badge">2</span></span></p>
                              </div>
                            </div>
                          </div>
                      </div>
                  </div>

                  <div className="w3-col l4">
                    <div className="w3-card-2 w3-margin w3-margin-top" style={{"overflow":"hidden"}}>
                      <img src={profilePic} style={{"width":"100%", "marginTop" : "-263px" }} alt="Hertford town" />
                        <div className="w3-container w3-white">
                          <h4><b>I am</b></h4>
                          <p>Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest to coding and travel. I want to share my world with you.</p>
                        </div>
                    </div><hr/>

                    <div className="w3-card-2 w3-margin w3-hide">
                      <div className="w3-container w3-padding">
                        <h4>Popular Posts</h4>
                      </div>
                      <ul className="w3-ul w3-hoverable w3-white">
                        <li className="w3-padding-16">
                          <img src="/w3images/workshop.jpg" alt="one" className="w3-left w3-margin-right" style={{width:50}}/>
                            <span className="w3-large">Lorem</span><br/>
                            <span>Sed mattis nunc</span>
                        </li>
                        <li className="w3-padding-16">
                          <img src="/w3images/gondol.jpg" alt="two" className="w3-left w3-margin-right" style={{width:50}}/>
                            <span className="w3-large">Ipsum</span><br/>
                            <span>Praes tinci sed</span>
                        </li>
                        <li className="w3-padding-16">
                          <img src="/w3images/skies.jpg" alt="three" className="w3-left w3-margin-right" style={{width:50}}/>
                            <span className="w3-large">Dorum</span><br/>
                            <span>Ultricies congue</span>
                        </li>
                        <li className="w3-padding-16 w3-hide-medium w3-hide-small">
                          <img src="/w3images/rock.jpg" alt="four" className="w3-left w3-margin-right" style={{width:50}}/>
                            <span className="w3-large">Mingsum</span><br/>
                            <span>Lorem ipsum dipsum</span>
                        </li>
                      </ul>
                    </div>
                    <hr/>

                      <div className="w3-card-2 w3-margin">
                        <div className="w3-container w3-padding">
                          <h4>Tags</h4>
                        </div>
                        <div className="w3-container w3-white">
                          <p><span className="w3-tag w3-black w3-margin-bottom">Travel</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">London</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Edinburgh</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Brugge</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Krakow</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Budapest</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Vienna</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Leuven</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Brussels</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Paris</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Munich</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Kyiv</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Amsterdam</span>
                            <span className="w3-tag w3-light-grey w3-small w3-margin-bottom">Lviv</span>
                          </p>
                        </div>
                      </div>

                  </div>

                </div><br/>

              </div>

              <footer className="w3-container w3-dark-grey w3-padding-32 w3-margin-top">
                 <div className="w3-xlarge w3-section">
                   <i className="fa fa-facebook-official w3-hover-opacity"></i>
                   <a href="https://www.instagram.com/artio.m/"><i className="fa fa-instagram w3-hover-opacity"></i></a>
                   <i className="fa fa-snapchat w3-hover-opacity w3-hide"></i>
                   <i className="fa fa-pinterest-p w3-hover-opacity w3-hide"></i>
                   <i className="fa fa-twitter w3-hover-opacity"></i>
                   <i className="fa fa-linkedin w3-hover-opacity"></i>
                   <a href="mailto:hardc0d3r@outlook.com"><i className="fa fa-envelope w3-hover-opacity"></i></a>
                 </div>
                <button className="w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom w3-hide">Previous</button>
                <button className="w3-button w3-black w3-padding-large w3-margin-bottom w3-hide">Next »</button>
              </footer>


      </div>
    // </div>
        
        
    );
  }
}

export default Component01;
