import axios from "axios";

export const fetchStateData = () => async () => {
  try {
    const { data } = await axios.get(
      "https://data.covid19india.org/v4/min/data.min.json"
    );

    return {
      type: "GET_STATE_DATE",
      payload: data,
    };
  } catch (error) {
    // console.log("error from fetchStateData", error);
  }
};
