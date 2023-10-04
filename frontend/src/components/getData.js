import { useState, useEffect } from "react";
import Axios from "axios";

export default function getData() {
  let data;
  Axios.get("http://localhost:3002/api/get").then((response) => {
    data = response.data;
  });

  return data;
}
