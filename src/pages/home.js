import React from 'react';
import './home.css';
import {Button } from 'react-bootstrap';
import bimg from '../images/e1.jpeg';
//testing 

const home = () => {
  return (
    <>

    
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,96L288,192L576,256L864,160L1152,192L1440,0L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>                    
        
    <div className="containerHome">



    <div class="containerce">

      <div class="boxce">
      <h1>Hi,<br/><br/>
                        I am Abhay Verma<br/><br/>
                        </h1>
                        <h6>
                          I am a Full-stack web developer. My experties to<br/>
                          is to create web site. Frontend develop on React Js<br/>
                          and backend develope on Django and many more...
                        </h6>
                        <br/>
                        <Button variant="primary"> Hire me </Button>{' '}
                        <br/>
        <p>

        </p>
      </div>
    


    
      <div class="boxce">
      <div className="imgHome">
            <img src={bimg} alt="" />
        </div>
      </div>
    </div>
     </div>
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,96L288,192L576,256L864,160L1152,192L1440,0L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>  
   










     
     {/* <Container  >
      <Row>
        <Col>
                <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Row>
                  <Col style={{height:"100%",width:"100%"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,96L288,192L576,256L864,160L1152,192L1440,0L1440,0L1152,0L864,0L576,0L288,0L0,0Z"></path></svg>                    
                    <br/>
                    <h1>Hi,<br/><br/>
                    I am Abhay Verma<br/><br/>
                    </h1>
                    <h6>
                      I am a Full-stack web developer. My experties to <br/>
                      is to create web site. Frontend develop on React Js<br/>
                      and backend develope on Django and many more...
                    </h6>
                    <br/>
                    <Button variant="primary"> Hire me </Button>{' '}
                    <br/>
                    <br/>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fill-opacity="1" d="M0,96L288,192L576,256L864,160L1152,192L1440,0L1440,320L1152,320L864,320L576,320L288,320L0,320Z"></path></svg>
                    </Col>
                  <Col style={{backgroundColor:""}}>
                  <Typography variant="h5" component="div">
                  <img src={bimg}  style={{height:"100%",width:"100%"}} alt=""/>
                </Typography>
                  </Col>
                </Row>
              </CardContent> 
            </Card>
        </Col>
      </Row>
    </Container> */}

    </>
  )
}

export default home;