Below are few guidelines for managing the DB Changes process. Please follow the instructions for all NEW US / issues assigned to you.

Follow below steps as process for Database changes:

1. Checkout DbManagerservice microservice.

2. Add script in a file. The file name should be US{ADO_Number} or BUG{ADO_Number}. Add file in resources folder.

3. Add row in db_Migration_Master.csv file with all details (SerialNumber, Module, Feature, IssueId, FileName, Commands, Comments, Author)

4. Check in the added files and changes.

5. Remember to promote the changes in dbManagerService onto higher environment as you would promote code for the user stories / bugs assigned to you.

6. The microservice is capable of determining the last file executed on an environment based on db_Migration_Master.csv file. All the files mentioned will be executed based on last file sucessfully executed.

7. The outcome of the script execution can be looked at in table dbVersion.


The Scripts SHOULD take care of below guidelines:

1. The create table sql should have "CREATE TABLE if not exists" .

2. Insert should have below syntax. Based on below syntax; the microservice code automatically generates query to determine if values already exists and avoids duplicates.

-- ##{Column names which have be cheked if already exists}##
      INSERT INTO ....
      
      example:
            -- ##checkColumnsForDuplicates=domainRoleId,moduleactionid,domainroleidentifier,moduleActionIdentifier##
INSERT INTO domainrolemoduleaction ( domainRoleId, moduleActionId, identifier, domainRoleIdentifier, moduleActionIdentifier, isStandardRecord, createdDate, createdBy) VALUES ( '3', '248', '2588316f-a2fe-11ed-9402-6045bd0faet9', '2588316f-a2fe-11ed-9402-6045bd0faed9', 'b610ab2b-afcb-11ee-9824-6045dj4faed0', '1', '2024-02-22 07:23:34', '2');

3. Update statement should NEVER BE on primary key. There should always be where clause that should be based on    column(s) other than primary key.

4. The microservice automatically executes queries in transactions and has capabilities to rollback or commit to DB.

General Guidelines:

• Clear and concise naming: Use descriptive names for tables, columns, and variables. This improves readability and makes the script easier to understand for others.

• Proper formatting: Use consistent indentation and spacing to visually distinguish different parts of the query. This makes the script easier to follow and maintain

• Specify columns in INSERT: Only list the columns you are inserting data into. This improves performance and avoids accidentally inserting unexpected values.

• Use appropriate data types: Ensure the data types of the values you are inserting match the corresponding columns in the table. This improves data integrity and efficiency.

• Indexed columns: When updating data on frequently used columns, consider if they are indexed. Updating indexed columns can significantly improve performance.

• Test the scripts: Thoroughly test scripts in a non-production environment before running them on your main database.