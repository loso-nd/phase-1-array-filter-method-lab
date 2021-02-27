// Code your solution here

/**
 * NOTES:
 * The key here to know that .filter first checks to see if the search is T or F, if true 
 * then we return the item from the search that we are looking for
 * 
 * We are passing in two arg, the arr an a str or cb function that will be used inside check
 * We filter the arr of drivers and pass in a cb function called element & attach .toLowerCase
 * to the new arr and we compare element to whoa cb() and also .toLowerCase() this.
 * We want to match the drivers - case insensitive 
 * 
 */
const findMatching = (drivers, whoa) => {
  
    const check = drivers.filter(element => element.toLowerCase() === whoa.toLowerCase() )
    return check;
}

/**
 * NOTES:
 * The key here to know that .filter first checks to see if the search is T or F, if true 
 * then we return the item from the search that we are looking for
 * 
 * The goal is to filter thru the arr and search for the str passed as an arg for the letters
 * "Sa". In order to query the arr for the passed in str I used .startsWith() method & pass 
 * in the arg (str) if the test results to T, then we return the names that begin with the
 * provided letters. 
 * 
 */
const fuzzyMatch = (drivers, str) => {
    const test = drivers.filter(el => el.startsWith(str) )
        if (test){
            return test
        }

}
/**
 * NOTES:
 * The key here to know that .filter first checks to see if the search is T or F, if true 
 * then we return the item from the search that we are looking for
 * 
 * We access the obj of arr by targeting the property [el.name] & compare it to the arg we 
 * pass into matchName() to check if it is the same. If true, then return the anotherOne
 */
const matchName = (drivers, str) => {
    const anotherOne = drivers.filter(el => el.name === str)

            return anotherOne;    
}

