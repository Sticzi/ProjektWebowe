import { MainNav } from "@/components/MainNav";
import { navigationLinks } from "../config/navigationLinks";
import { UserNav } from "./CustomersPage/components/UserNav";
import { useState } from "react";

export const AddCustomerPage = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const getSurname = (event) => {
    setSurname(event.target.value);
  };
  const getEmail = (event) => {
    setEmail(event.target.value);
  };
  const getPhoneNumber = (event) => {
    setPhoneNumber(event.target.value);
  };

  const submitFormHandler = async (e) => {
    e.preventDefault();
    if (name === "") return;
    if (email === "") return;
    if (phoneNumber === "") return;

    const customerData = {
      name: name,
      surname: surname,
      email: email,
      phone_number: phoneNumber,
    };

    
    const response = await fetch("http://127.0.0.1:8000/customers", {
      method: "POST",
      body: JSON.stringify(customerData),
      headers: {
        "Content-Type": "application/json",
      },
    });    

    console.log(response);

    setName("");
    setSurname("");
    setEmail("");
    setPhoneNumber("");
  };
  return (
    <div className="hidden flex-col md:flex">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <MainNav className="mx-6" links={navigationLinks} />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      <div className="">
        <div className="">
          <h2 className="">Add customer</h2>
        </div>
        <div className=""></div>
      </div>
      <form onSubmit={submitFormHandler} className="addCustomerForm">
        <label>name</label>
        <input
          onChange={getName}
          value={name}
          placeholder="Jaś"
          type="text"
        ></input>
        <label>surname</label>
        <input
          onChange={getSurname}
          value={surname}
          placeholder="Fasola"
          type="text"
        ></input>
        <label>Email</label>
        <input
          onChange={getEmail}
          value={email}
          placeholder="jasiu@email.com"
          type="text"
        ></input>
        <label>PhoneNumber</label>
        <input
          onChange={getPhoneNumber}
          value={phoneNumber}
          placeholder="666 666 666"
          type="text"
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
