import MintHeading from "../assets/images/Mint.png";
import thirtyThreeOutOfFifty from "../assets/images/500_3,333 minted.png";
import { useNavigate } from "react-router-dom";


//  ---------------- Mint section ------------------
const BetwHeadingAndGarbage = () => {
  const navigate = useNavigate()
  return (
    <div>
      <button className="mintBtn"
        onClick={() => navigate('/mint')}
      >
        <h1 >Enter</h1>
      </button>
    </div>
  );
};

export default BetwHeadingAndGarbage;
