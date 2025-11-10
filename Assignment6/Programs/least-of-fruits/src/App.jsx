import React from "react";

function FruitList() {
  const fruits = ["Apple", "Banana", "Mango", "Orange", "Pineapple"];

  return (
    <>
      <div className="mx-auto p-2 bg-gray-200 w-1/5 my-45 rounded-md">
          <div className="Head">
              <h1 className="text-center text-2xl font-semibold ">Fruits List</h1>
              <hr className="w-1/3 mx-auto"/>
          </div>
          <div className="FruitList h-50 overflow-auto">
            {fruits.map((items,index)=>{
              return(
                <>
                  <div key={index} className="mx-5">
                      <ul>
                        <li className="text-center bg-white my-5 p-2 rounded-md text-xl font-semibold">
                          {items}
                        </li>
                      </ul>
                  </div>
                </>
              )
            })}
          </div>
      </div>
    </>
  );
}

export default FruitList;