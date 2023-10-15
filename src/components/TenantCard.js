import React from "react";

const TenantCard = ({ tenant }) => {
  return (
    <div className="bg-red-200 p-4 rounded-lg shadow-md">
      <h3 className="text-red-600 text-lg font-semibold mb-2">
        {tenant.business_name}
      </h3>
      <p className="text-gray-600 font-semibold">{tenant.contact_person}</p>
      <p className="text-gray-600 font-semibold">{tenant.email}</p>
      <p className="text-gray-600 font-semibold">{tenant.phone_number}</p>
    </div>
  );
};

export default TenantCard;
