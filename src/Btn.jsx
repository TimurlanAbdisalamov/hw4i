import { useDispatch } from "react-redux";
import { incrementNum, decrementNum, resetNum, setText, incrementByFive, decrementByFive } from "./redux/reducer";

export default function Btn() {
    const dispatch = useDispatch();
    return (
        <div>
            <button onClick={() => dispatch(incrementNum())}>+</button>
            <button onClick={() => dispatch(decrementNum())}>-</button>
            <button onClick={() => dispatch(resetNum())}>Reset</button>
            <button onClick={() => dispatch(setText('Привет!!! Кубаныч Ака, надеюсь вам понравиться это работа "Удачи" '))}>Change</button>
            <button onClick={() => dispatch(incrementByFive())}>+5</button>
            <button onClick={() => dispatch(decrementByFive())}>-5</button>
        </div>
    );
}
