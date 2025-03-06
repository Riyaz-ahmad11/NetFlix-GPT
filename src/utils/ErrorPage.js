import { useDispatch, useSelector } from "react-redux";
import { removeError } from "./errorSlice";

const ErrorPage = () => {
  const dispatch = useDispatch();
  const errMessage = useSelector((store) => store.errorSlice.errMessage);
  return (
    <div className="flex flex-col items-center justify-center max-h-screen">
      {/* Error Modal */}
      {errMessage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold text-red-500">Error Occurred</h2>
            <p className="text-gray-700">
              {errMessage?.message ||
                errMessage?.msg ||
                errMessage?.error ||
                "Something Went Wrong!"}
            </p>

            <button
              onClick={() => dispatch(removeError())}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorPage;
