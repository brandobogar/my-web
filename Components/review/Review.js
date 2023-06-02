import axios from "axios";
import React from "react";
import UI from "../ui/UI";

function Review() {
  // const getTime = () => {
  //   const currentDate = new Date();
  //   const formattedTimestamp = currentDate.toLocaleString();
  //   return formattedTimestamp;
  // };
  const [currentTime, setCurrentTime] = React.useState(
    new Date().toLocaleString()
  );

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [data, setData] = React.useState({
    name: "",
    email: "",
    review: "",
    time: currentTime,
  });
  const [showModal, setShowModal] = React.useState(false);

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);

    axios
      .post(
        "https://sheet.best/api/sheets/9e2ed617-692a-4053-b457-9548b071b42a",
        data
      )
      .then((response) => {
        console.log(response);
      });

    console.log(currentTime);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setData({ name: "", email: "", review: "" });
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center w-full h-screen">
        <h1 className="mb-4 text-2xl text-myblack">Leave a Review!</h1>
        <form
          className="flex flex-col items-center justify-center w-3/4 gap-5 p-10 border-2 border-solid rounded-md h-3/4 border-slate-300"
          onSubmit={submitHandler}
        >
          <div className="flex flex-col w-full gap-2 ">
            <label>Time</label>
            <input
              value={currentTime}
              name="time"
              className="w-full px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
              readOnly
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>
              Name<span className="text-red-900">*</span>
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              className="w-full px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>
              Email<span className="text-red-900">*</span>
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              className="w-full px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
              required
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label>
              Review<span className="text-red-900">*</span>
            </label>
            <textarea
              placeholder="Enter your review"
              type="text"
              name="review"
              value={data.review}
              onChange={changeHandler}
              className="w-full h-20 px-2 py-1 text-sm bg-white border-0 rounded shadow outline-none resize-none placeholder-slate-300 text-slate-600 focus:outline-none focus:ring"
              required
            />
          </div>

          <UI.Button
            type={"submit"}
            title={"Submit"}
            onClick={null}
            className="self-start"
          />
        </form>
        {showModal ? (
          <>
            <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
              <div className="relative w-auto max-w-sm mx-auto my-6">
                {/*content*/}
                <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                  {/*header*/}

                  {/*body*/}
                  <div className="relative flex-auto p-4">
                    <p className="my-4 text-lg leading-relaxed text-slate-500">
                      Thank&apos;s {data.name}
                      <br /> for reviewing my portfolio website
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-red-600 hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={closeModal}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Review;
