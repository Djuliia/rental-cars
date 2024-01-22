Car Rental Application
This project is a React application for a car rental company located in Ukraine. The application comprises three pages:

Home Page: Provides a general overview of the services.

Catalog Page: Displays a catalog of cars with various characteristics. Users can filter cars by brand, hourly rental cost, and mileage.

Favorites Page: Presents advertisements that users have added to their favorites list.

Technical Specifications
Advertisement Card
Displays 12 advertisements on the catalog page initially, with additional ones loaded upon button click.
Advertisements are added to the favorites list when the heart-shaped button is clicked.
The favorites list remains unchanged after refreshing the page.
Advertisements are removed from the favorites list upon a second click on the heart-shaped button.
Opens a modal window with additional information about the car and its rental conditions when the "Learn More" button is clicked.
The modal window closes when clicking the close button, clicking on the backdrop, or pressing the Esc key.
"Rental Car" Button
Allows users to contact the company at the phone number +380730000000.
Implementation Details
Utilizes Redux for state management.
Utilizes the Axios library for making requests.
Backend implementation for pagination.