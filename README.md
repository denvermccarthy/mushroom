# Mushroom Festival
Use [this template](https://github.com/alchemycodelab/half-baked-web-01-mushroom-festival) to get started.
## Learning Objectives

-   In response to a user event, mutate a single object in a state array and display the new state to the user (i.e., complete a todo).
-   Describe the difference between a pure and impure function.

### Live Example:

https://alchemycodelab.github.io/web-01-mushroom-festival/

# Acceptance Criteria

-   User should see some mushrooms and default friends on load
-   Click on the 'invite' button to create a new (unsatisfied) friend (with a random default name if none is provided) and add them to the page
-   The number of mushrooms should be visible on the table and should update when mushroom state changes.
-   Clicking the forage button should launch an alert telling the user if they found a mushroom. 50% of the time, the user should succeed.
-   On clicking a friend, a mushroom should vanish from the table, and the friend should become more satisfied. Satisfaction level should be visible to the user as different emojis
-   On clicking a friend, if that friend is completely satisfied, they can eat no more mushrooms. Also, if you try to feed a friend and there are no mushrooms, user should get an alert telling them to go forage for another mushroom.

# Mushroom Festival

| Deploy Requirements                                   |     |
| ----------------------------------------------------- | --- |
| Main branch deployed to Netlify                       | 1   |
| Open PR from `dev` branch with Netlify deploy preview | 1   |

| Requirements                                                        |     |
| :------------------------------------------------------------------ | --: |
| addFriendButton event listener adds new unsatisfied friend          |   2 |
| displayFriends function displays all friends and adds click handler |   2 |
| displayMushrooms displays the mushrooms                             |   2 |
| when page loads users see default friends and mushrooms             |   2 |
