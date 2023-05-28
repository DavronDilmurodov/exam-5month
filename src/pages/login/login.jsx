import { useRef } from "react";
import { useAuth } from "../../hooks/useAuth";

export const Login = () => {
  const [, setToken] = useAuth();
  const emailRef = useRef();
  const passwordRef = useRef();

  const onLogin = (evt) => {
    evt.preventDefault();
    let email = emailRef.current.value.trim();
    let password = passwordRef.current.value.trim();

    fetch("https://invoices-8ehs.onrender.com/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          alert("Wrong password or email");
        }
      })
      .then((data) => setToken(data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="w-[631px] h-full flex items-center justify-center mx-auto">
      <div className="pt-11 pb-9 px-[58px] bg-white">
        <h2 className="text-[#0C0E16] font-bold text-2xl tracking-[-0.5px]">
          Login
        </h2>
        <form onSubmit={onLogin} className="pt-9">
          <p className="font-medium text-xs tracking-[-0.25px] text-[#7E88C3] mb-[10px]">
            Email
          </p>
          <input
            className="border border-[#DFE3FA] rounded-[4px] w-[420px] mb-6 p-1"
            type="email"
            placeholder="Email"
            required
            name="email"
            ref={emailRef}
          />
          <p className="font-medium text-xs tracking-[-0.25px] text-[#7E88C3] mb-[10px]">
            Password
          </p>
          <input
            className="border border-[#DFE3FA] rounded-[4px] mb-6 w-[420px] p-1"
            type="text"
            placeholder="Password"
            required
            ref={passwordRef}
            name="password"
          />
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-[#7C5DFA] rounded-3xl py-3 px-6 text-white hover:bg-[#9277FF] block"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
