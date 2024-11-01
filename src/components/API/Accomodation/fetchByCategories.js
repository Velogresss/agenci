export async function fetchByPriceOrder(url, id) {
    const formData = new FormData();
    formData.set("id_category", id);    
    formData.set("count", "10"); 
  
    const params = [];
    formData.forEach((value, key) => {
      if (value !== null && value !== "") {
        params.push(`${encodeURIComponent(key)}=${encodeURIComponent(value.toString())}`);
      }
    });
    
    try {
      const response = await fetch(`${url}?${params.join("&")}`, {
        method: "GET",
        headers: {}
      });
      if (!response.ok) throw new Error("Помилка при отриманні даних");
      return await response.json();
    } catch (error) {
      console.error("Помилка запиту:", error);
      throw error;
    }
}  