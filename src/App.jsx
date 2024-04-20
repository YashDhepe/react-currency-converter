import React, { useState } from "react";
import Layout from "./components/Layout";
import Card from "./components/Card";
import Input from "./components/Input";
import Select from "./components/Select";
import Button from "./components/Button";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

const App = () => {
  // STATE VARIABLE
  const [fromAmount, setFromAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("usd");
  const [toAmount, setToAmount] = useState(0);
  const [toCurrency, setToCurrency] = useState("inr");

  // /FETCH CURRENCY INFORMATION VIA CUSTOM HOOK
  const currencyInfo = useCurrencyInfo(fromCurrency);
  const options = Object.keys(currencyInfo);

  // FUNCTIONS
  const swap = () => {
    // setFromAmount(toAmount);
    setFromAmount(0);
    setFromCurrency(toCurrency);

    // setToAmount(fromAmount);
    setToAmount(0);
    setToCurrency(fromCurrency);
  };

  const convert = () => {
    setToAmount(fromAmount * currencyInfo[toCurrency]);
  };

  return (
    <>
      <Layout>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}
        >
          <Card>
            <div className="flex bg-white rounded-lg">
              <div className="w-1/2 p-4">
                <Input
                  label="From"
                  type="number"
                  value={fromAmount}
                  onInputChange={(fromAmount) => setFromAmount(fromAmount)}
                />
              </div>
              <div className="w-1/2 p-4">
                <Select
                  label="Currency Type"
                  name="from_currency"
                  value={fromCurrency}
                  id="from_currency"
                  options={options}
                  onSelectChange={(fromCurrency) =>
                    setFromCurrency(fromCurrency)
                  }
                />
              </div>
            </div>

            <div className="relative w-full h-0.5 mb-1 mt-1">
              <Button
                label="swap"
                customClass="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClickFunction={swap}
              />
            </div>

            <div className="flex bg-white rounded-lg">
              <div className="w-1/2 p-4">
                <Input
                  label="To"
                  type="number"
                  value={toAmount}
                  isDisabled={true}
                  onInputChange={(ToAmount) => setToAmount(ToAmount)}
                />
              </div>
              <div className="w-1/2 p-4">
                <Select
                  label="Currency Type"
                  name="from_currency"
                  value={toCurrency}
                  id="from_currency"
                  options={options}
                  onSelectChange={(toCurrency) => setToCurrency(toCurrency)}
                />
              </div>
            </div>

            <div className="flex">
              <Button
                label={
                  "Convert " +
                  fromCurrency.toUpperCase() +
                  " to " +
                  toCurrency.toUpperCase()
                }
                customClass="border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5 mt-4 w-full"
              />
            </div>
          </Card>
        </form>
      </Layout>
    </>
  );
};

export default App;
