import { useNavigate } from "react-router-dom";
import left from "../../assets/images/left.svg";
import { useRef } from "react";
import { useData } from "../../hooks/useData";

export const Add = () => {
  const navigate = useNavigate();

  const [, setData] = useData();

  const nameRef = useRef();
  const emailRef = useRef();
  const dateRef = useRef();
  const termRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const onSend = (evt) => {
    evt.preventDefault();
    const email = emailRef.current.value.trim();
    const name = nameRef.current.value.trim();
    const date = dateRef.current.value.trim();
    const term = Number(termRef.current.value);
    const description = descriptionRef.current.value.trim();
    const price = priceRef.current.value.trim();

    fetch("https://invoices-8ehs.onrender.com/invoices", {
      method: "POST",
      body: JSON.stringify({
        userId: "1",
        email,
        to: name,
        dueDate: date,
        term,
        description,
        price,
      }),
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cnVsbG9oMjNAZ21haWwuY29tIiwiaWF0IjoxNjg1MjkzODY1LCJleHAiOjE2ODUyOTc0NjUsInN1YiI6IjEifQ.uo6zC0NhiQI0TfS-VSWs_9CW-4J6jvsMSnc8FTXjq2E",
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        if (res.ok === true) {
          navigate("/");
        } else if (res.status === false) {
          alert("Something gone wrong");
        }
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="text-[#0C0E16] tracking-[-0.25px] mb-8 text-xs flex items-center font-bold"
      >
        <img src={left} alt="left" className="mr-6" />
        Go back
      </button>
      <div className="w-[631px] h-4/5 flex items-center justify-center mx-auto">
        <div className="edit-modal bg-white rounded-lg pt-[51px] pb-[37px] px-14">
          <h2 className="text-[#0C0E16] tracking-[-0.5px] font-bold text-2xl mb-9">
            New Invoice
          </h2>
          <form onSubmit={onSend}>
            <p className="font-medium text-xs tracking-[-0.25px] text-[#7E88C3] mb-[10px]">
              Client`s Name
            </p>
            <input
              className="border border-[#DFE3FA] rounded-[4px] w-[444px] mb-6 p-1"
              type="text"
              placeholder="Name"
              required
              name="name"
              ref={nameRef}
            />
            <p className="font-medium text-xs tracking-[-0.25px] text-[#7E88C3] mb-[10px]">
              Client`s Email
            </p>
            <input
              className="border border-[#DFE3FA] rounded-[4px] w-[444px] mb-6 p-1"
              type="text"
              placeholder="Email"
              required
              name="email"
              ref={emailRef}
            />
            <div className="flex gap-6">
              <div>
                <p className="font-medium text-xs tracking-[-0.25px]  text-[#7E88C3] mb-[10px]">
                  Due Date
                </p>
                <input
                  type="date"
                  required
                  className="border border-[#DFE3FA] rounded-[4px] w-[210px] mb-6 p-1"
                  ref={dateRef}
                />
              </div>
              <div>
                <label
                  className="text-xs tracking-[-0.25px] text-[#7E88C3] font-medium mb-[8px] inline-block"
                  htmlFor="pet-select"
                >
                  Payment Terms
                </label>

                <select
                  className="border border-[#DFE3FA] rounded-[4px] w-[210px] mb-6 p-1 inline-block"
                  id="pet-select"
                  ref={termRef}
                >
                  <option disabled value=""></option>
                  <option value="1">1</option>
                  <option value="7">7</option>
                  <option value="14">14</option>
                  <option value="30">30</option>
                </select>
              </div>
            </div>
            <p className="font-medium text-xs tracking-[-0.25px] text-[#7E88C3] mb-[10px]">
              Project Description
            </p>
            <input
              className="border border-[#DFE3FA] rounded-[4px] w-[444px] mb-6 p-1"
              type="text"
              placeholder="Description"
              name="text"
              ref={descriptionRef}
            />
            <p className="font-medium text-xs tracking-[-0.25px] text-[#7E88C3] mb-[10px]">
              Price
            </p>
            <input
              className="border border-[#DFE3FA] rounded-[4px] w-[444px] mb-6 p-1"
              type="number"
              placeholder="Price"
              required
              name="number"
              ref={priceRef}
            />
            <div className="flex justify-between items-center">
              <button
                onClick={() => navigate("/")}
                type="button"
                className="bg-[#F9FAFE] rounded-3xl px-6 py-4 text-[#7E88C3] hover:bg-[#DFE3FA]"
              >
                Discard
              </button>
              <button
                type="submit"
                className="bg-[#7C5DFA] rounded-3xl px-6 py-4 text-white hover:bg-[#9277FF]"
              >
                Save & Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
