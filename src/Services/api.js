import axios from "axios";

const BASE_URL = "https://stg.dhunjam.in/account/admin";

// Admin login
export const adminLogin = async () => {
  const url = `${BASE_URL}/login`;
  const credentials = {
    username: "DJ@4",
    password: "Dhunjam@2023",
  };

  try {
    const response = await axios.post(url, credentials);
    return response.data;
  } catch (error) {
    console.error("Admin login error:", error);
    throw error;
  }
};

// get admin details
export const getAdminDetails = async (adminId) => {
  const url = `${BASE_URL}/${adminId}`;
  console.log("Get Admin Details URL:", url); // check krne ke liye

  try {
    const response = await axios.get(url);
    console.log("Get Admin Details Response:", response.data); // check krne ke liye
    return response.data;
  } catch (error) {
    console.error("Get admin details error:", error);
    throw error;
  }
};

// update price
export const updatePrice = async (adminId, updatedAmount) => {
  const url = `${BASE_URL}/${adminId}`;

  try {
    const response = await axios.put(url, {
      amount: {
        category_6: updatedAmount,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Update price error:", error);
    throw error;
  }
};

const api = { adminLogin, getAdminDetails, updatePrice };
export default api;
