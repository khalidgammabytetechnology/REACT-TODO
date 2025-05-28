import seriesdata from "../api/seriesdata"
import { Seriescard } from "./Listcard";


const NetflixList = () => {

  return (
    <ul className="grid grid-three--cols">
        {seriesdata.map((curElem) =>(
            <Seriescard key={curElem.id} data={curElem}/>
        ))};
    
    </ul>
  );
};

export default NetflixList;

