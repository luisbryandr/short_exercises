/* 
You are writing a chat room app. Users have fed back that seeing everyone's full names on the screen creates too much noise, and have asked for it to be reduced. However, we still want to be able to uniquely identify everyone. The team have come up with a few rules that will hopefully help in solving this problem!

If only one person in the chat room has a specific first name, only their first name will be written out.

John Smith -> John

If two or more people have a specific first name, but don't share a second name initial, their first name and second name initial will be written out.

John Smith -> John S
John Adams -> John A

Finally, if two or more people have a specific first name and last name initial, their full name will be written out.

John Smith -> John Smith
John Simms -> John Simms

To help tidy up the output, management have also asked that the chat room list should be alphebetised, by the users screen names and should all be in Title Case.
*/

//solve the above problem using the function below

function addNamesProperties(users) {
  return users.map(fullName => {
      const [firstName, ...lastNameParts] = fullName.split(" ");
      const lastName = lastNameParts.join(" ");
      return {
        firstName,
        lastName
      };
    });
  }

  function sortUsersByName(usersArray) {
    return usersArray.sort((a, b) => {
      const firstNameComparison = a.firstName.localeCompare(b.firstName);
      
      if (firstNameComparison !== 0) {
        return firstNameComparison;
      } else {
        return a.lastName.localeCompare(b.lastName);
      }
    });
  }

function generateChatRoomNames(users) { 
    // your code here
    const usersWithNames = addNamesProperties(users);
    const usersWithNamesSorted = sortUsersByName(usersWithNames);
    let result = [];
    let count = 0;
    for (let i = 0; i < usersWithNamesSorted.length; i++) {
      if (i === 0 || usersWithNamesSorted[i].firstName !== usersWithNamesSorted[i - 1].firstName) {
        // Reset count when encountering a new first name
        count = 0;
      }
      
      count++;
      
      if (count === 1) {
        result.push(`${usersWithNamesSorted[i].firstName} ${usersWithNamesSorted[i].lastName[0]}`);
      } else if(count >= 2) {
        result.push(`${usersWithNamesSorted[i].firstName} ${usersWithNamesSorted[i].lastName}`);
      } 
    }
    
    console.log(result);
    return result;
  }
  
  generateChatRoomNames(["John Smith", "John Adams", "John Simms", "David Smith", "David Adams", "David Simms", "Alex Black"]);
  
  
  
  
 
//nothing to update just trying but brain is not working
// Path: CodeWars_Exercises/generateChatRoomNames.js
