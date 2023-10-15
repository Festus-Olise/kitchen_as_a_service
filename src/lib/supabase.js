// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_API_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const usersTable = "users";
export const tenantsTable = "tenants";
export const workstationsTable = "workstations";
export const complaintsTable = "complaints";
export const noticesTable = "notices";
export const paymentsTable = "payments";

// Define functions to interact with each table
export const getUserById = async (userId) => {
  const { data, error } = await supabase
    .from(usersTable)
    .select()
    .eq("user_id", userId);
  return { data, error };
};

export const getUsers = async () => {
  const { data, error } = await supabase.from(usersTable).select();
  return { data, error };
};

export const getTenantById = async (tenantId) => {
  const { data, error } = await supabase
    .from(tenantsTable)
    .select()
    .eq("tenant_id", tenantId);
  return { data, error };
};

export const getTenants = async () => {
  const { data, error } = await supabase.from(tenantsTable).select();
  return { data, error };
};

export default supabase;
