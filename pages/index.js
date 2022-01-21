import { useDispatch, useSelector } from "react-redux";
import {
  addNumber,
  clearAll,
  getResult
} from "../redux/action/calculatorActions";

export default function Index() {
  const { number, result } = useSelector((state) => state.calculator);

  const dispatch = useDispatch();
  return (
    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2">
          <div className="text-gray-700">{number}</div>
          <div className="text-black font-bold text-3xl">{result}</div>
        </div>
        <div className="w-auto m-1 h-auto mb-2">
          <div className="m-2 flex justify-between">
            <div onClick={() => dispatch(clearAll())} className="btn-red">
              C
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              (
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              )
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-blue"
            >
              /
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              7
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              8
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              9
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-blue"
            >
              *
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              4
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              5
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              6
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-blue"
            >
              -
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              1
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              2
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey"
            >
              3
            </div>
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-blue"
            >
              +
            </div>
          </div>
          <div className="m-2 flex justify-between">
            <div
              onClick={({ target }) => dispatch(addNumber(target))}
              className="btn-grey-jumbo"
            >
              0
            </div>
            <div className="flex w-full ml-3 justify-between">
              <div
                onClick={({ target }) => dispatch(addNumber(target))}
                className="btn-grey"
              >
                .
              </div>
              <div onClick={() => dispatch(getResult())} className="btn-green">
                =
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-5">
            <div className="w-20 h-1 bg-gray-100 rounded-l-xl rounded-r-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
