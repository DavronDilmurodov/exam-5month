import { useContext } from "react";
import { DataContext } from "../contexts/data";

export const useData = () => {
  const { data, setData } = useContext(DataContext);

  return [data, setData];
};
