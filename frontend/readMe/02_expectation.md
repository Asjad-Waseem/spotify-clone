# AirBnB Clone examples

[live link]: (https://bnb-ground.herokuapp.com/)
[live link]: http://kb-airbnb.herokuapp.com/

## `Landing Page`

The landing page is the AirBnB front page that lists existing spots from the existing seeder file. After a user logs in and creates a spot, the newly created spot will be generated on the landing page at the end.

## `Create a Spots:`

After a user logs in, they will be able to create a new spot with the "Become a Host" button. That will lead them to a page with a form to fill out information about the location they wish to "host".

## `Manage Spots:`

If a user has created a spot(s), they can manage them under their "Manage Your Listings" option. There the user can edit and delete their spots.

## `Spot Detail's Page:`

Clicking on a spot on the main landing page will lead a user to the spot's respective details page. It will list the spot's details and preview image at the top with a section for reviews at the bottom.

## `Reviews Section:`

Within the reviews section of a spot detail's page there will be reviews loaded from the seeder file to function as example reviews. Depending on whether a user is logged in or not, there will be section to submit/delete a review or to log in.

## `Error Handling`

Every form on this site has error handling, which, again, derive from the Express validators in the backend. Any violations to these validators will be sent out and displayed for the user to see.
