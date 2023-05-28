import axios from "axios";
import React from "react";
import UI from "../ui/UI";

function Review() {
  const getTime = () => {
    const currentDate = new Date();
    const formattedTimestamp = currentDate.toLocaleString();
    return formattedTimestamp;
  };

  const [data, setData] = React.useState({
    name: "",
    email: "",
    review: "",
    time: getTime(),
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

    console.log(getTime);
    setShowModal(!showModal);
  };

  const closeModal = () => {
    setData({ name: "", email: "", review: "" });
    setShowModal(!showModal);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen w-full">
        <h1 className="text-2xl text-myblack mb-4">Leave a Review!</h1>
        <form
          className="flex flex-col justify-center items-center gap-5 h-3/4 w-3/4 border-solid border-2 border-slate-300 rounded-md p-10"
          onSubmit={submitHandler}
        >
          <div className="gap-2 flex-col w-full flex  ">
            <label>Time</label>
            <input
              value={data.time}
              name="time"
              className="px-2 py-1 placeholder-slate-300 text-slate-600  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              readOnly
            />
          </div>
          <div className="flex gap-2 flex-col w-full">
            <label>
              Name<span className="text-red-900">*</span>
            </label>
            <input
              placeholder="Enter your name"
              type="text"
              name="name"
              value={data.name}
              onChange={changeHandler}
              className="px-2 py-1 placeholder-slate-300 text-slate-600  bg-white rounded text-sm border-0 shadow outline-none  focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="flex gap-2 flex-col w-full">
            <label>
              Email<span className="text-red-900">*</span>
            </label>
            <input
              placeholder="Enter your email"
              type="email"
              name="email"
              value={data.email}
              onChange={changeHandler}
              className="px-2 py-1 placeholder-slate-300 text-slate-600  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
              required
            />
          </div>
          <div className="flex gap-2 flex-col w-full">
            <label>
              Review<span className="text-red-900">*</span>
            </label>
            <textarea
              placeholder="Enter your review"
              type="text"
              name="review"
              value={data.review}
              onChange={changeHandler}
              className="px-2 py-1 placeholder-slate-300 text-slate-600  bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full h-20 resize-none"
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
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-sm">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}

                  {/*body*/}
                  <div className="relative p-4 flex-auto">
                    <p className="my-4 text-slate-500 text-lg leading-relaxed">
                      Thank&apos;s {data.name}
                      <br /> for reviewing my portfolio website
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-emerald-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={closeModal}
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default Review;
