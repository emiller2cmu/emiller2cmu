import logo from './logo.svg';
import './App.css';

function InfoBlock(props) {
  return (
      <div className="body">
        <div className="textHeading">
          <h1>{props.heading}</h1>
          <h3>{props.description}</h3>
          <p>{props.paragraph}</p>
        </div>
        <div className="sneakPeak">Content coming :)</div>
      </div>
  );
}

export default InfoBlock;
