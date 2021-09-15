import axios from "axios";

export let AddChannel = (data) => {
  axios.post("/api/v1/youtube/studio/channel/add_channel", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      type: "formData",
    },
  });
};
