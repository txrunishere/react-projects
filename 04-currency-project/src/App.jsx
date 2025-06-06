import { useCurrency } from "./hooks/useCurrency";
import { InputBox } from "./components";
import { useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrency(from);
  const currencyKeys = Object.keys(currencyInfo);

  const swap = () => {
    setTo(from);
    setFrom(to);
    // setAmount(convertedAmount);
    // setConvertedAmount(amount);
  };

  const calculateConvertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to]);
  };

  const BackgroundImage = 'https://images.pexels.com/photos/210607/pexels-photo-210607.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              calculateConvertCurrency()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={currencyKeys}
                onCurrencyChange={c => {
                  setFrom(c)
                }}
                onAmountChange={a => {
                  setAmount(a)
                }}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                SWAP
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={currencyKeys}
                onCurrencyChange={c => {
                  setTo(c)
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toLowerCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
