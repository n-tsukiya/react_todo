import logo from "./logo.svg";
import "./App.css";

export const App = () => {
  return (
    <>
      <div className="">
        <input placeholder="TODOを入力" />
        <button>追加</button>
      </div>
      <div className="">
        <p className="">未完了のTODO</p>
        <ul className="">
          <div className="">
            <li className="">ああああ</li>
            <button>完了</button>
            <button>削除</button>
          </div>
          <div className="">
            <li className="">いいいい</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div className="">
        <p className="">完了のTODO</p>
        <ul className="">
          <div className="">
            <li className="">うううう</li>
            <button>戻す</button>
          </div>
        </ul>
      </div>
    </>
  );
};
