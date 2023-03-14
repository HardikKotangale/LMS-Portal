import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Figure from 'react-bootstrap/Figure';
import ReactWhatsapp from 'react-whatsapp';
import Maps from './Maps';
import './style.css'
function Footer(props) {
  return (<>
  <div className="Footer card-mw-20 ">
  
  <CardGroup >
   {/* <Card style={{border:"none"}}>
        <Card.Body className='d-flex align-items-center flex-column mapFooter'>
        <Card.Title className='text-white'>Location</Card.Title>
          <Maps/>
        </Card.Body>
  </Card> 
    <Card style={{border:"none"}} >
        <Card.Body className='d-flex align-items-center flex-column contactFooter'>
        <Card.Title className='text-white'>Contact Info</Card.Title>
        <a target="_blank" href='tel:917030200057'><Figure className="zoom text-white me-1"><Figure.Image width={30} height={10} alt="50x50" src={props.contactUs1}/>+ <div className='hover-underline-animation'>91-7030-20-0057</div></Figure></a>
        <a target="_blank" href='mailto:enquiry@oytie.com'><Figure className="zoom text-white me-1"><Figure.Image width={30} height={10} alt="50x50" src={props.contactUs2}/> <div className='hover-underline-animation'> enquiry@oytie.com</div></Figure></a>
        </Card.Body>
  
    </Card> */}
      <Card style={{border:"none"}}>
        <Card.Body className='handlesFooter'>
        <div className="d-flex justify-content-center  ">
        <ReactWhatsapp number="+91 7030 20 0057" message="I am interested in joining a course!" style={{border:"none",borderRadius:"100px",background:"none"}}><Figure className="zoom me-1"><Figure.Image width={40} height={40} alt="50x50" src={props.handles1}/></Figure></ReactWhatsapp>
        <a target="_blank" href="https://www.instagram.com/oytie_learning/"><Figure className="zoom me-1"><Figure.Image width={40} height={40} alt="50x50" src={props.handles2}/></Figure></a>
        <a target="_blank" href="https://www.facebook.com/Oytie"> <Figure className="zoom me-1"><Figure.Image width={40} height={40} alt="50x50" src={props.handles3}/></Figure></a>
        <a target="_blank" href="https://www.youtube.com/channel/UC-u9TPF4IXvJ7uCKxf23pXQ/featured"><Figure className="zoom me-1"><Figure.Image width={40} height={40} alt="50x50" src={props.handles4}/></Figure></a>
        <a target="_blank" href="https://www.linkedin.com/in/oytie-private-limited-931b5b1b8/"><Figure className="zoom me-1"><Figure.Image width={40} height={40} alt="50x50" src={props.handles5}/></Figure></a>
        </div>
        </Card.Body>
      </Card>
      </CardGroup>
  </div>

  </>
  );
}

export default Footer;
