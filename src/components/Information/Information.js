
import './information.css'

const Information = (props) => {
    // console.log(props);
    const {name} = props.information;
    // console.log(props);
     
//    const bd = borders.join(',');
//    console.log(bd);


    
    return (
        <div className='info'>
            <img src={props.information.flags.png} alt="National Flag" />
            <h4>This is a {name.common} </h4>

            <button className='btn'  onClick={()=>props.handleInfo(props.information)}>Show more info</button>

            
        </div>
    );
};

export default Information;