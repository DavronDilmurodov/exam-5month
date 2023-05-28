import axios from "axios";
import left from "../../assets/images/left.svg";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useData } from "../../hooks/useData";

export const Invoice = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { state } = useLocation();
  const [, setData] = useData();

  const foundUser = state?.find((user) => user.id === Number(id) || String(id));

  const onBack = () => {
    navigate(-1);
  };

  const toEdit = (id) => {
    navigate(`/edit/${id}`, {
      state: foundUser,
    });
  };

  const onDelete = () => {
    axios
      .delete(`https://invoices-8ehs.onrender.com/invoices/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im51cnVsbG9oMjNAZ21haWwuY29tIiwiaWF0IjoxNjg1MjkzODY1LCJleHAiOjE2ODUyOTc0NjUsInN1YiI6IjEifQ.uo6zC0NhiQI0TfS-VSWs_9CW-4J6jvsMSnc8FTXjq2E",
        },
      })
      .then((res) => {
        setData(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const onMark = () => {
    fetch(`https://invoices-8ehs.onrender.com/invoices/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        userId: "1",
        paid: true,
        email: foundUser.email,
        to: foundUser.to,
        dueDate: foundUser.dueDate,
        term: foundUser.term,
        description: foundUser.description,
        price: foundUser.price,
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
        } else {
          alert("Something gone wrong");
        }
      })
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <button
        onClick={onBack}
        className="text-[#0C0E16] tracking-[-0.25px] mb-8 text-xs flex items-center font-bold"
      >
        <img src={left} alt="left" className="mr-6" />
        Go back
      </button>
      <div className="bg-white user-status rounded-lg flex justify-between items-center px-8 py-5 mb-7">
        {foundUser?.paid === true ? (
          <div className="bg-[#33D69F] text-center bg-opacity-[0.06] w-[104px] py-3 rounded-md">
            <span className="bg-[#33D69F] w-2 h-2 rounded-[50%] inline-block mr-2"></span>
            <span className="text-[#33D69F] text-xs tracking-[-0.25px] font-bold">
              Paid
            </span>
          </div>
        ) : (
          <div className="bg-[#FF8F00] text-center bg-opacity-[0.06] w-[104px] py-3 rounded-md">
            <span className="bg-[#FF8F00] w-2 h-2 rounded-[50%] inline-block mr-2"></span>
            <span className="text-[#FF8F00] text-xs tracking-[-0.25px] font-bold">
              Pending
            </span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <button
            onClick={toEdit.bind(null, foundUser?.id)}
            className="bg-[#F9FAFE] px-6 py-4 rounded-3xl text-[#7E88C3] hover:bg-[#DFE3FA]"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="bg-[#EC5757] px-6 py-4 rounded-3xl text-white hover:bg-[#FF9797]"
          >
            Delete
          </button>
          <button
            onClick={onMark}
            className="bg-[#7C5DFA] px-6 py-4 rounded-3xl text-white hover:bg-[#9277FF]"
          >
            Mark as Paid
          </button>
        </div>
      </div>
      <div className="user-info bg-white rounded-lg px-12 pt-[51px] pb-12">
        <div className="mb-[49px]">
          <p className="text-[#888EB0] tracking-[-0.8px] text-base font-bold">
            #<span className="text-[#0C0E16]">{foundUser?.userId}</span>
          </p>
          <p className="text-[#7E88C3] text-xs tracking-[-0.25px] font-medium">
            {foundUser?.description || "Graphic Design"}
          </p>
        </div>
        <div className="flex justify-between pr-20 mb-8">
          <div>
            <p className="text-[#7E88C3] tracking-[-0.25px] text-xs font-medium mb-3">
              Invoice Date
            </p>
            <p className="text-[#0C0E16] tracking-[-0.31px] leading-5 font-bold text-[15px]">
              {foundUser?.createdDate.slice(0, 10)}
            </p>
          </div>
          <div>
            <p className="text-[#7E88C3] tracking-[-0.25px] text-xs font-medium mb-3">
              Bill To
            </p>
            <p className="text-[#0C0E16] tracking-[-0.31px] leading-5 font-bold text-[15px]">
              {foundUser?.to}
            </p>
          </div>
          <div>
            <p className="text-[#7E88C3] tracking-[-0.25px] text-xs font-medium mb-3">
              Sent to
            </p>
            <p className="text-[#0C0E16] tracking-[-0.31px] leading-5 font-bold text-[15px]">
              {foundUser?.email}
            </p>
          </div>
        </div>
        <div>
          <p className="text-[#7E88C3] tracking-[-0.25px] text-xs font-medium mb-3">
            Payment Due
          </p>
          <p className="text-[#0C0E16] tracking-[-0.31px] leading-5 font-bold text-[15px]">
            {foundUser?.dueDate?.slice(0, 15) ||
              foundUser?.deuDate?.slice(0, 15)}
          </p>
        </div>
        <div className="bg-[#373B53] rounded-lg mt-[50px] px-8 py-6 flex justify-between items-center">
          <p className="text-white text-[11px] font-medium leading-[18px] tracking-[0.23px]">
            Amount Due
          </p>
          <p className="text-white tracking-[0.5px] font-bold text-2xl">
            £ {foundUser?.price}
          </p>
        </div>
      </div>
    </div>
  );
};
