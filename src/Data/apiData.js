let equipmentCache = null;
let isLoading = false;
let hasLoaded = false;

export const fetchEquipmentData = async () => {
  // Return cached data if already loaded
  if (hasLoaded && equipmentCache) {
    return equipmentCache;
  }

  // Prevent multiple simultaneous calls
  if (isLoading) {
    // Wait for current request to complete
    while (isLoading) {
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    return equipmentCache;
  }

  try {
    isLoading = true;
    
    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    const response = await fetch("https://www.dnd5eapi.co/api/2014/equipment", requestOptions);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    equipmentCache = result.results || result;
    hasLoaded = true;
    
    return equipmentCache;
  } catch (error) {
    console.error("Error fetching equipment data:", error);
    throw error;
  } finally {
    isLoading = false;
  }
};

// Optional: Export cache status for debugging
export const getCacheStatus = () => ({
  hasData: !!equipmentCache,
  isLoading,
  hasLoaded,
  itemCount: equipmentCache?.length || 0
});