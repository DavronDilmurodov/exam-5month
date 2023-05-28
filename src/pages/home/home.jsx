import plus from "../../assets/images/plus.svg";
import arrow from "../../assets/images/arrow.svg";
import right from "../../assets/images/right.svg";
import { useData } from "../../hooks/useData";
import { Error } from "../error/error";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Login } from "../login";

export const Home = () => {
  const [data] = useData();
  const navigate = useNavigate();
  const [token] = useAuth();

  const onNavigate = (id) => {
    navigate(`/invoice/${id}`, {
      state: data,
    });
  };

  if (data?.length > 0) {
    return (
      <>
        <header className="flex mb-16 justify-between">
          <div>
            <h1 className="font-bold title tracking-[-1px] text-[32px] leading-9 text-[#0C0E16] mb-2">
              Invoices
            </h1>
            <p className="text-[#888EB0] font-medium text-xs tracking-[-0.25px]">
              There are {data.length} total invoices
            </p>
          </div>
          <div className="flex justify-center items-center">
            <ul className="menu">
              <li>
                <a
                  href="#"
                  className="flex font-bold text-xs text-[#0C0E16] tracking-[-0.25px]"
                >
                  Filter by status
                  <img className="ml-2" src={arrow} alt="arrow" />
                </a>
                <ul className="dropdown bg-white w-48">
                  <li>
                    <label htmlFor="first">
                      <input
                        id="first"
                        type="checkbox"
                        className="mr-2 accent-[#7C5DFA]"
                      />
                      All
                    </label>
                  </li>
                  <li>
                    <label htmlFor="second">
                      <input
                        id="second"
                        type="checkbox"
                        className="mr-2 accent-[#7C5DFA]"
                      />
                      Pending
                    </label>
                  </li>
                  <li>
                    <label htmlFor="third">
                      <input
                        id="third"
                        type="checkbox"
                        className="mr-2 accent-[#7C5DFA]"
                      />
                      Paid
                    </label>
                  </li>
                </ul>
              </li>
            </ul>

            <button
              className="bg-[#7C5DFA] ml-10 rounded-3xl flex pl-2 pr-4 py-3 justify-center text-white items-center hover:bg-[#9277FF]"
              onClick={() => {
                navigate("/add");
              }}
            >
              <img className="mr-4" src={plus} alt="plus" /> New Invoice
            </button>
          </div>
        </header>
        <div>
          <ul className="invoices">
            {data.map((user) => (
              <li
                onClick={onNavigate.bind(null, user.id)}
                key={user.id}
                className="flex justify-between mb-4 bg-white items-center py-4 pr-6 pl-8 rounded-lg invoices-item hover:border-[#7C5DFA] hover:border hover:cursor-pointer"
              >
                <h5 className="text-[#0C0E16] font-bold text-xs tracking-[-0.25px]">
                  <span className="text-[#7E88C3]">#</span>
                  {user.userId}
                </h5>
                <p className="text-[#7E88C3] text-xs font-medium">
                  <span className="text-[#888EB0]">Due </span>
                  {user?.deuDate?.slice(0, 15) || user?.dueDate?.slice(0, 15)}
                </p>
                <p className="text-[#858BB2] text-xs font-medium">{user.to}</p>
                <p className="font-bold tracking-[-0.8px] text-base text-[#0C0E16]">
                  £ {user.price}
                </p>
                {user.paid === true ? (
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

                <img src={right} alt="right" />
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  } else {
    return <Error />;
  }
};
