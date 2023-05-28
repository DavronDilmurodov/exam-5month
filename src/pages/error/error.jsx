import plus from "../../assets/images/plus.svg";
import arrow from "../../assets/images/arrow.svg";
import { useNavigate } from "react-router-dom";

export const Error = () => {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex mb-[141px] justify-between">
        <div>
          <h1 className="font-bold title tracking-[-1px] text-[32px] leading-9 text-[#0C0E16] mb-2">
            Invoices
          </h1>
          <p className="text-[#888EB0] font-medium text-xs tracking-[-0.25px]">
            No invoices
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
            onClick={() => navigate("/add")}
            className="bg-[#7C5DFA] ml-10 rounded-3xl flex pl-2 pr-4 py-3 justify-center text-white items-center hover:bg-[#9277FF]"
          >
            <img className="mr-4" src={plus} alt="plus" />
            New Invoice
          </button>
        </div>
      </header>
      <div className="text-center">
        <h2 className="mb-6 tracking-[-0.63px] text-[#0C0E16] font-bold leading-[22px] text-[20px]">
          There is nothing here
        </h2>
        <p className="text-[#888EB0] font-medium text-xs tracking-[-0.25]">
          Create an invoice by clicking the <br />
          <span className="font-bold"> New Invoice</span> button and get started
        </p>
      </div>
    </>
  );
};
