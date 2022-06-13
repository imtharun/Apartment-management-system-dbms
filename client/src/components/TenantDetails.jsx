import axios from "axios";
import React, { useEffect, useState } from "react";

function TenantDetails(props) {
  const header = ["Tenant no", "Room_no", "Name", "Age", "DOB", "Stat"];
  const tenantData = [
    {
      tenant_id: 1,
      name: "Tharun",
      age: 20,
      room_no: 123456,
      dob: "21-May-2002",
      stat: "paid",
    },
    {
      tenant_id: 2,
      name: "D K suryah",
      age: 20,
      room_no: 123456,
      dob: "21-May-2002",
      stat: "unpaid",
    },
    {
      tenant_id: 3,
      name: "Yuvarraj",
      age: 20,
      room_no: 123456,
      dob: "21-May-2002",
      stat: "paid",
    },
    {
      tenant_id: 4,
      name: "Shivanesh",
      age: 20,
      room_no: 123456,
      dob: "21-May-2002",
      stat: "paid",
    },
  ];
  const [tenantRows, setTenantRows] = useState(tenantData);

  useEffect(() => {
    axios
      .get("http://localhost:5000/tenantDetails")
      .then((res) => {
        // console.log(res.data);
        setTenantRows(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <section className="bg-white py-20 lg:py-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="max-w-full overflow-x-auto">
              <table className="table-auto w-full">
                <thead>
                  <tr className="bg-blue-500 text-center">
                    {header.map((ele, index) => {
                      return (
                        <th
                          key={index + 1}
                          className="
                              w-1/6
                              min-w-[160px]
                              text-lg
                              font-semibold
                              text-white
                              py-4
                              lg:py-7       
                              px-3
                              lg:px-4
                              border-l border-transparent
                              "
                        >
                          {ele}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {/* <tr> */}
                  {tenantRows.map((ele, index) => {
                    return (
                      <tr key={index + 1}>
                        <td
                          className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              bg-[#F3F6FF]
                              border-b border-l border-[#E8E8E8]
                              "
                        >
                          {ele.tenant_id}
                        </td>
                        <td
                          className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              bg-[#F3F6FF]
                              border-b border-l border-[#E8E8E8]
                              "
                        >
                          {ele.room_no}
                        </td>
                        <td
                          className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              bg-[#F3F6FF]
                              border-b border-l border-[#E8E8E8]
                              "
                        >
                          {ele.name}
                        </td>
                        <td
                          className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              bg-[#F3F6FF]
                              border-b border-l border-[#E8E8E8]
                              "
                        >
                          {ele.age}
                        </td>
                        <td
                          className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              bg-[#F3F6FF]
                              border-b border-l border-[#E8E8E8]
                              "
                        >
                          {ele.dob}
                        </td>
                        <td
                          className="
                              text-center text-dark
                              font-medium
                              text-base
                              py-5
                              px-2
                              bg-[#F3F6FF]
                              border-b border-l border-[#E8E8E8]
                              "
                        >
                          {ele.stat}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TenantDetails;
