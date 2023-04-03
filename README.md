# Team-5-Group-Project
Project Title: CS4870 Team Project Ecommerce Application: Isra Organics

This project has been created using HTML, CSS, JavaScript and Java using Spring Boot to develop an ecommerce web application. The product creates a web application in which products are loaded from a database and users can access the web app and place orders having created an account which is stored in the database.

Running the project:
Due to the limitations of the available server in combination with our use of Spring Boot, unfortunately the web app is not able to be deployed online. Therefore the application must be run using the local host and requires launching the java application on the local machine.
In order to run the project, first the project folder "Group Project Final" must be downloaded and extracted.
Then the following steps must be completed:
1. Create a local MySql database called "cs4group5_db" using the port 3306, or you may edit the port/database name in the "application.properties" file under src/main/resources. This will enable the application to connect to the database.
2. Set the values for spring.datasource.username and password in the "application.properties" file to the values 	of your database.
3. Next, run "ECommerceApplication.java" as a Java application, this will launch the application and create the tables in the linked database, including populating the product and users tables with the initial data. The data for the products is pulled from the productList.txt file, so if this is removed or adjusted, the changes will be reflected in the database.
4.Now that the application is running, open a web browser and enter "http://localhost:8080/", this will open the main home page of the web app.
5. From here, you are able to access all the functions available to a customer, you can access each page and use the various functionalities, such as browsing and adding products to your basket, creating an account and signing in in order to create an order for your selected products or filling in the contact form.
6. You can also access the admin only features by typing "http://localhost:8080/Adminpage" into your address bar
7. However these pages will direct you to the loging page if you are not logged in to an admin account, which cannot be created within the web app. The only admin account is added to the database within the "run" method in "EcommerceApplication.java" which can be signed into with the detais:
		Username/email : harryconod@gmail.com
		Password 	   : Password12345!
8. Once signed in you can access the remaining administrator pages from "http://localhost:8080/Adminpage". On this page you can see an overview of the statistics of the company such as number of users. You can access the orders page which provides information of all of the orders that have been registered in the database. You can also access the catalog page, where a list of the products in the database is shown, any of which can be deleted from this page.
9. From the catalog page you may select the option to create a product, which will add a product to the database. You must however add your image to the src/main/resources/static/img folder and select it from that folder to ensure the path is correct. You can then fill in the remaining details, click submit and you will see your product added to the bottom of the page.
10. Having launched the program for the first time and created and populated the database, in order to stop the database being reset and recreated, you must change "spring.jpa.hibernate.ddl-auto=create" to "spring.jpa.hibernate.ddl-auto=none" in the application.properties file. Having done this you must also either delete or comment out the "run" method in "EcommerceApplication.java", otherwise you will create duplicates of the objects in the database.
11. In order to close the program you must simply stop the java application running and it will close.

Credits:
Harry Conod
Userhumu Ireye
Suraj Malayudacherevil Ravi
Divya Rajeswari Pamula
Isra Shire
Abhiram Gupta Voleti