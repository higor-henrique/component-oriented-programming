import { api } from "../config/axios";

export const getTicker = async (coin, method = "ticker") => {
  try {
    const information = await api.get(`${coin}/${method}`);

    return information.data;
  } catch (error) {
    throw {
      error: error,
      message: "Erro desconhecido, tente novamente mais tarde",
    };
  }
};

export const getSummary = async (coin) => {
  try {
    const { year, month, day } = formatDate();
    const information = await api.get(
      `${coin}/day-summary/${year}/${month}/${day}/`
    );
    return information.data;
  } catch (error) {
    throw {
      error: error,
      message: "Erro desconhecido, tente novamente mais tarde",
    };
  }
};

const formatDate = () => {
  const data = new Date();
  const day = previousDay(data);
  const month = currentMonth(data);
  const year = data.getFullYear();

  return { day, month, year };
};

const previousDay = (data) => {
  return data.getDate() - 1;
};

const currentMonth = (data) => {
  return data.getMonth() + 1;
};
