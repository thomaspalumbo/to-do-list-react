import React from 'react';

function useLocalStorage(itemName, initialValue) { 
  const [item, setItem] = React.useState(initialValue); 
  
  React.useEffect(() => {
    try {
      const localStorageItem = localStorage.getItem(itemName); 
      let parsedItem;
      
      if (!localStorageItem) { 
        localStorage.setItem(itemName, JSON.stringify(initialValue)); 
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem); 
      }

      setItem(parsedItem);
    } catch(error) {
      console.error(error)
    }
  }, []);
  
  const saveItem = (newItem) => { 
    try {
      const stringifiedItem = JSON.stringify(newItem); 
      localStorage.setItem(itemName, stringifiedItem); 
      setItem(newItem); 
    } catch(error) {
      console.error(error);
  
    }
  };
 
  
  return {  
    item, 
    saveItem
  };
}

export { useLocalStorage };