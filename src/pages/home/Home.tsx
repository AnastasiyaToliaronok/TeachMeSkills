import './Home.css';
import { Button } from '../../components/Button/button';
import { Caresel } from '../../components/carusel/carusel';



export const Main = () => {

    return (
        <div>
            <Caresel />
                <div className="mainTextDiv">
                    <h1 className="mainText"> ООО "ТендерПро"</h1>
                </div>
                <div className="mainBtnDiv">
                    <Button />
                </div>
        </div>
    )
}