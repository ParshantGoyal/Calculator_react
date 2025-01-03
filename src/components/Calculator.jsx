import Appname from "./subcomponents/Appname";
import CalculatorBt from "./subcomponents/CalculatorBt";
import Style from './Calculator.module.css';

function Calculator(){
return(
    <>
    <div className={Style.main}>
        <Appname/>

        <CalculatorBt/>


    </div>
    </>
);
}
export default Calculator;