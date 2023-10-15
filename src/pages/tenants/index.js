import React, { useState, useEffect } from 'react';
import TenantCard from '../../components/TenantCard';
import { getTenants } from '../../lib/supabase';

const TenantList = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    const fetchTenants = async () => {
      const { data, error } = await getTenants(); // Make sure this function fetches data from Supabase
      if (error) {
        console.error('Error fetching tenants:', error.message);
      } else {
        setTenants(data);
      }
    };

    fetchTenants();
  }, []);

  return (
    <div className="container mx-auto mt-4">
      <h2 className="text-2xl font-semibold mb-4 text-red-400">Tenant List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {tenants.map((tenant) => (
          <TenantCard key={tenant.tenant_id} tenant={tenant} />
        ))}
      </div>
    </div>
  );
};

export default TenantList;
