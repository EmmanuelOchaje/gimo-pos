import React, { useRef, useState } from "react";
import GetStarted from "./GetStarted";
import Stock from "./Stock";
import Default from "./Default";
import Sell from "./Sell";
import ContainerFinance from "./ContainerFinance";
import ContainerStart from "./ContainerStart";
import ContainerStock from "./ContainerStock";
import ContainerSell from "./ContainerSell";
import Finance from "./Finance";
import ContainerSuppliers from "./ContainerSuppliers";
import Suppliers from "./Suppliers";
import ContainerCustomers from "./ContainerCustomers";
import Customers from "./Customers";

const SideMenu = () => {
  const [deft, setDeft] = useState(true);
  const [st1, setSt1] = useState(false);
  const [st2, setSt2] = useState(false);
  const [st3, setSt3] = useState(false);
  const [st4, setSt4] = useState(false);
  const [st5, setSt5] = useState(false);
  const [st6, setSt6] = useState(false);
  const [st7, setSt7] = useState(false);

  const custRef = useRef();
  const targetRef = useRef();
  const targetRef0 = useRef();
  const targetRef1 = useRef();
  const targetRef2 = useRef();
  const targetRef3 = useRef();
  const targetRef4 = useRef();
  const targetRef5 = useRef();
  const targetRef6 = useRef();
  const targetRef7 = useRef();
  const targetRef8 = useRef();
  const targetRef9 = useRef();
  const targetRef10 = useRef();
  const targetRef11 = useRef();
  const targetRef12 = useRef();
  const targetRef13 = useRef();
  const targetRef14 = useRef();
  const targetRef15 = useRef();
  const targetRef16 = useRef();
  const targetRef17 = useRef();
  const targetRef18 = useRef();

  function show() {
    setSt1(true);
    setDeft(false);
    setSt2(false);
    setSt3(false);
    setSt4(false);
    setSt5(false);
    setSt6(false);
  }
  function show1() {
    setSt1(false);
    setSt2(true);
    setDeft(false);
    setSt3(false);
    setSt4(false);
    setSt5(false);
    setSt6(false);
  }
  function show2() {
    setSt2(false);
    setSt1(false);
    setDeft(false);
    setSt3(true);
    setSt4(false);
    setSt5(false);
    setSt6(false);
  }
  function show3() {
    setSt2(false);
    setSt1(false);
    setDeft(false);
    setSt3(false);
    setSt4(true);
    setSt5(false);
    setSt6(false);
  }
  function show4() {
    setSt2(false);
    setSt1(false);
    setDeft(false);
    setSt3(false);
    setSt4(false);
    setSt5(true);
    setSt6(false);
  }
  function show5() {
    setSt2(false);
    setSt1(false);
    setDeft(false);
    setSt3(false);
    setSt4(false);
    setSt5(false);
    setSt6(true);
  }
  function show6() {
    setSt2(false);
    setSt1(false);
    setDeft(false);
    setSt3(false);
    setSt4(false);
    setSt5(false);
    setSt6(true);
  }

  return (
    <div className="flex justify-betwee">
      <div>
        <div className="w-fit">
          {/* get started */}
          <ContainerStart st1={st1} show={show} custRef={custRef} />

          {/* stock */}
          <ContainerStock
            st2={st2}
            show1={show1}
            targetRef={targetRef}
            targetRef0={targetRef0}
            targetRef1={targetRef1}
            targetRef2={targetRef2}
            targetRef3={targetRef3}
            targetRef4={targetRef4}
          />
          {/* sell */}
          <ContainerSell st3={st3} targetRef5={targetRef5} show2={show2} />
          {/* Finance */}
          <ContainerFinance
            st4={st4}
            show3={show3}
            targetRef6={targetRef6}
            targetRef7={targetRef7}
            targetRef8={targetRef8}
            targetRef9={targetRef9}
            targetRef10={targetRef10}
          />
          {/* Suppliers */}
          <ContainerSuppliers
            st5={st5}
            show4={show4}
            targetRef11={targetRef11}
            targetRef12={targetRef12}
            targetRef13={targetRef13}
          />
          {/* customers */}
          <ContainerCustomers
            st6={st6}
            show5={show5}
            targetRef14={targetRef14}
            targetRef15={targetRef15}
            targetRef16={targetRef16}
          />
        </div>
      </div>

      {/* vertical line */}
      <div className="w-[1px] h-auto mx-3 bg-gray-300"></div>
      {/* conntent */}
      <div>
        <div className={st1 ? "block" : "hidden"}>
          <GetStarted targetRef={custRef} />
        </div>
        <div className={deft ? "block" : "hidden"}>
          <Default />
        </div>
        <div className={st2 ? "block" : "hidden"}>
          <Stock
            targetRef={targetRef}
            targetRef0={targetRef0}
            targetRef1={targetRef1}
            targetRef2={targetRef2}
            targetRef3={targetRef3}
            targetRef4={targetRef4}
          />
        </div>
        <div className={st3 ? "block" : "hidden"}>
          <Sell targetRef={targetRef5} />
        </div>

        <div className={st4 ? "block" : "hidden"}>
          <Finance
            targetRef={targetRef6}
            targetRef6={targetRef6}
            targetRef7={targetRef7}
            targetRef8={targetRef8}
            targetRef9={targetRef9}
            targetRef10={targetRef10}
          />
        </div>
        <div className={st5 ? "block" : "hidden"}>
          <Suppliers
            targetRef11={targetRef11}
            targetRef12={targetRef12}
            targetRef13={targetRef13}
          />
        </div>
        <div className={st6 ? "block" : "hidden"}>
          <Customers
            targetRef14={targetRef14}
            targetRef15={targetRef15}
            targetRef16={targetRef16}
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
