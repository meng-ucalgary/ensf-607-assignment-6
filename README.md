# Lab Assignment 6

ENSF 607 - Fall 2021


## Due Dates

Submission before 11:59 PM on Friday, December 3

Demonstration on Tuesday, December 7


## Objectives

In this assignment, you will develop the animal request management epic for the vet management system. The workflow is such that the instructor submits a request for an animal, then the admin and technician may approve or reject the request respectively. After approval from both the admin and the technician, the animal is ready to be delivered. 

You can assume that there are only 3 types of animals: dogs, cats, and horses, and there are only 8 animals available for each type. 

The application has three users as follows:

1. Instructor
    1. Can request an animal 
    2. Can cancel a request
    3. Can view available animals

2. Admin
    4. Can view new requests
    5. Can Approve a request
    6. Can reject a request

3. Technician
    7. Can view new requests
    8. Can Approve a request
    9. Can reject a request

* Instructors can only cancel requests when their request is in "new" or "accepted_by_admin" states.

* The application must have a backend and frontend, and the API must connect the two.

* The application must be consistent when two users concurrently change a request state.

* Every team must commit partially every few hours.

* Each team must be based on final-project teams.

* Different roles login with these credentials:
    * **Instructor_1** with password: `pt@123`
    * **Admin_1** with password: `pa`
    * **Technician** with password: `pe`


## Workflow diagram

![alt_text](Hackaton.drawio.png "State Diagram")


## How to run

1. Clone the repository to your local machine.

2. Start the MySQL server on your local machine. If you are accessing the MySQL server over a network, edit the property `spring.datasource.url` in the file [application.properties](backend/src/main/resources/application.properties) and replace `localhost` with the server IP address.

3. Connect to your MySQL server using an admin user like `root`.

4. Run the below scripts on the MySQL server in the given order using `root`. These scripts will create a schema `vetdb`, a user `vetapp` with password `vetpassword`, create all necessary tables and load them with some dummy data.
   1. [01_init.sql](sql/01_init.sql)
   2. [02_tables.sql](sql/02_tables.sql)
   3. [03_views.sql](sql/03_views.sql)
   4. [04_dummy_data.sql](sql/04_dummy_data.sql)

5. On your machine, navigate to the directory [backend](backend). Running the below command will get the backend server running.
   ```bash
   $ mvn clean spring-boot:run
   ```

6. Navigate to the directory [frontend](frontend). Running the below commands will get the frontend server running and will launch the browser where you can see the **Vet Application** home page.
    ```
    $ npm install
    $ npm start
    ```
7. Once the testing and verification is done, you may remove all the data from your MySQL server using [10_purge.sql](sql/10_purge.sql).
