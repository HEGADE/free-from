import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getCatagories } from "./store/action";
import "./App.css";
import Button from "./components/ui/Button";
import { Error as ShowValidationErr } from "./components/ui/Error";
import InputBox from "./components/ui/InputBox";

interface CustomerFormInput {
  name: string;
  phone: string;
  DOB: string;
}

function App() {
  const catagories = useSelector<{ catagories: any[] }>(
    (state) => state.catagories
  ) as {
    data: string[];
    isLoading: boolean;
    isSuccess: boolean;
    errorMessage: string;
  };
  const dispatch = useDispatch();

  const [customer, setCustomer] = useState<CustomerFormInput>({
    name: "",
    phone: "",
    DOB: "",
  });

  const [disabled, setDisabled] = useState<boolean>(true);
  const [error, setError] = useState<{
    message: string;
  }>({
    message: "",
  });

  const validateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    try {
      if (name === "name") {
        if (value.replace(' ','').length < 4) {
          throw new Error("Name should be in the length of 0 to 10 char");
        } else return setError({ message: "" });
      }
      if (name === "phone") {
        if (value.replace(' ','').length != 10) {
          throw new Error("Phone number should be 10 digits");
        } else return setError({ message: "" });
      }
      if (name === "DOB") {
        const date = new Date(value);
        const today = new Date();
        if (date < today) {
          throw new Error("Date of birth should be less than today");
        } else setError({ message: "" });
      }
      setDisabled(false);
    } catch (e: unknown) {
      if (e instanceof Error) setError({ message: e?.message });
    } finally {
      setCustomer((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());

    alert(JSON.stringify(data));
  };

  useEffect(() => {
    dispatch(getCatagories());
  }, []);

  return (
    <>
      <form className="main" onSubmit={handleSubmit}>
        <InputBox
          name="name"
          type="text"
          placeholder="Customer Name"
          value={customer.name}
          onChange={validateInput}
        />

        <InputBox
          placeholder="Customer Phone Number
          "
          type="tel"
          name="phone"
          value={customer.phone}
          onChange={validateInput}
        />

        <InputBox
          placeholder="Customer DOB"
          type="date"
          name="DOB"
          value={customer.DOB}
          onChange={validateInput}
        />
        <ShowValidationErr message={error.message} />
        <div className="checkbox_container">
          <CheckBox data={catagories?.data} />
        </div>
        <Button disabled={disabled} text="Submit" />
      </form>
    </>
  );
}

const CheckBox = ({ data }: any) => {
  return (
    <>
      {data?.map((ele: string, index: number) => {
        return (
          <React.Fragment key={index}>
            <label
              onClick={(e) => {
                e.currentTarget.classList.toggle("active");
              }}
              htmlFor={ele}
            >
              {ele}
            </label>
            <input type="checkbox" id={ele} name={ele} value={ele} />
          </React.Fragment>
        );
      })}
    </>
  );
};

export default App;
