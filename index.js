// Code your solution here
function findMatching(drivers, name) {
    const lowercaseName = name.toLowerCase();
  
    const matchingDrivers = drivers.filter(function(driver) {
        return driver.toLowerCase() === lowercaseName;
    });
    return matchingDrivers;
  }

  function fuzzyMatch(drivers, letter) {
     const firstLetter = drivers.filter(function(driver) {
        return driver.startsWith(letter)})
      return firstLetter}

  function matchName(drivers, value) {
    return drivers.filter(function(driver) {
      return driver.name === value})
  }
     

    