
import style from './SingleBt.module.css';
function SingleBt(){
let Bt =['c','1','2','3','4','5','6','7','8','9','0'
    ,'+','/','*','-','='];

return(<>
{Bt.map((BTN)=><button className={style.Sbt}>{BTN}</button>)}



</>)
}
export default SingleBt;