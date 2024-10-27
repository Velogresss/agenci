export const fetchResidenceInfo = async (baseUrl, id) => {
    try {
      const response = await fetch(`${baseUrl}/residence-info/${id}`, {
        method: "GET",
        headers: {},
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Не вдалося отримати інформацію про житло");
    }
  };