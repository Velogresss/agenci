export const fetchCategories = async (baseUrl) => {
    try {
      const response = await fetch(`${baseUrl}/categories`, {
        method: "GET",
        headers: {},
      });
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error("Не вдалося отримати дані");
    }
  };