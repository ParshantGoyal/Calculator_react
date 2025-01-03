import SingleBt from "./SingleBt";
import Style from './CalculatorBt.module.css';
function CalculatorBt(){
return(<>
<center>
<div className={Style.main}>
<input type="text" className={Style.input} readOnly/>
<center><div className={Style.btgroup}>
<SingleBt/>

</div>
</center>
</div>
</center>

</>)
}
export default CalculatorBt;