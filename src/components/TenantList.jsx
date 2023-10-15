// TenantList.js
import React, { useState, useEffect } from 'react';
import { getTenants } from '../lib/supabase'; // Import the function to get tenants
// import  getTenants from '..\lib\supabase.js'; // Import the function to get tenants

const TenantList = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Fetch tenants from the Supabase table when the component mounts
    const fetchTenants = async () => {
      const { data, error } = await getTenants();
      if (error) {
        console.error('Error fetching tenants:', error.message);
      } else {
        setTenants(data);
      }
    };

    fetchTenants();
  }, []);

  return (
    <div>
      <h2>Tenant List</h2>
      <ul>
        {tenants.map((tenant) => (
          <li key={tenant.tenant_id}>
            <strong>{tenant.business_name}</strong> - {tenant.contact_person}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TenantList;
