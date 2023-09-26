import React from "react";

const page = ({ params, searchParams }) => {
  console.log(searchParams);
  return (
    <div>
      <h1>This is nested news page:{params.id} </h1>
    </div>
  );
};

export default page;
