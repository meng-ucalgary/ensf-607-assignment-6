# ENSF-607 Assignment 6

An assignment on extending the [vet management system](https://github.com/meng-ucalgary/ensf-607-608-project) with **animal request management**.

## Extension Details

The workflow is such that the _instructor_ submits a request for an animal, then the _admin_ and _technician_ may approve or reject the request respectively. After approval from both the _admin_ and the _technician_, the animal is ready to be delivered.

You can assume that there are only 3 types of animals: dogs, cats, and horses, and there are only 8 animals available for each type.

The application has three users as follows:

1. Instructor

   - Can request an animal
   - Can cancel a request
   - Can view available animals

2. Admin

   - Can view new requests
   - Can Approve a request
   - Can reject a request

3. Technician
   - Can view new requests
   - Can Approve a request
   - Can reject a request

- Instructors can only cancel requests when their request is in "new" or "accepted_by_admin" states.

- The application must have a backend and frontend, and the API must connect the two.

- The application must be consistent when two users concurrently change a request state.

- Every team must commit partially every few hours.

- Each team must be based on final-project teams.

- Different roles login with these credentials:
  - **Instructor_1** with password: `pt@123`
  - **Admin_1** with password: `pa`
  - **Technician** with password: `pe`

#### Workflow diagram

![alt_text](Hackaton.drawio.png 'State Diagram')

## How to build and run

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

   ```bash
   $ npm install
   $ npm start
   ```

7. Once the testing and verification is done, you may remove all the data from your MySQL server using [10_purge.sql](sql/10_purge.sql).

## Contributors

- [Bhavyai Gupta](https://github.com/zbhavyai)
- [Michael Lee](https://github.com/mlee2021)
- [Sarang Kumar](https://github.com/sarangk3)
