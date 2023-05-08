import axios from "axios";

const API_URL = "/api/events/";

const userStr = localStorage.getItem("user");
const userObj = JSON.parse(userStr);

let eventServices;

if (userObj !== null) {
  const { token } = userObj;

  // GET ALL EVENTS.
  const getEvents = async () => {
    const response = await axios.get(API_URL);
    return response.data;
  };

  // GET USER EVENTS.
  const getUserEvents = async () => {
    const response = await axios.get(API_URL + "user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  // UPDATE USER EVENTS
  const updateUserEvents = async (eventID, updatedEvent) => {
    const response = await axios.put(API_URL + eventID, updatedEvent, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  // DELETE USER EVENTS
  const deleteUserEvents = async (eventID) => {
    const response = await axios.delete(API_URL + eventID, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  eventServices = {
    getEvents,
    getUserEvents,
    updateUserEvents,
    deleteUserEvents,
  };
} else {
  console.log('neveikia');
  eventServices = null; // or any other default value you want
}

export default eventServices;



