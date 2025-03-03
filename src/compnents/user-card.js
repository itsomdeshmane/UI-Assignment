import ShareIcon from '@mui/icons-material/Share';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Button } from '@mui/material';

function UserCard() {
    return <div className="card-wrapper">
        <div className="card-head">
            <div >
                <img className="img" src={process.env.PUBLIC_URL + '/assets//user-prof.jpg'} alt="prof-img" />
            </div>
            <div className="heading">
                <span className='heading-h1'>Michael Knight</span><br/>
                <span className='sub-heading'>Senior Developer</span>
            </div>
            <div className="right-icons">
                <ShareIcon className='icon'></ShareIcon>
                <FavoriteBorderIcon className='icon'></FavoriteBorderIcon>
            </div>
        </div>
        <div className="card-content">
            <div className="group-imgs">
                <img className='img-sm' src={process.env.PUBLIC_URL + '/assets/subimg1.jpg'} alt="sub-img1" />
                <img className='img-sm' src={process.env.PUBLIC_URL + '/assets/subimg2.jpg'} alt="sub-img2" />
                <img className='img-sm' src={process.env.PUBLIC_URL + '/assets/subimg3.jpg'} alt="sub-img3" />
            </div>
            <h3>Reading Task</h3>
            <span className='heading-h1'>Constructive and destructive waves</span>
            <h3>2 hours 40 minutes</h3>
            <Button variant="contained" className="play-btn"><PlayArrowIcon />Play</Button>
        </div>
    </div>
}

export default UserCard;