𝟰 𝗦𝗤𝗟 𝗷𝗼𝗶𝗻𝘀 𝗲𝘃𝗲𝗿𝘆 𝘀𝗼𝗳𝘁𝘄𝗮𝗿𝗲 𝗲𝗻𝗴𝗶𝗻𝗲𝗲𝗿 𝘀𝗵𝗼𝘂𝗹𝗱 𝗸𝗻𝗼𝘄.

🔹 INNER JOIN

Returns only the records that have matching values in both the left and right tables.

🔹 LEFT (OUTER) JOIN

Returns all records from the left table and the matched records from the right table. If no match is found, NULL values are returned for columns from the right table.

🔹 RIGHT (OUTER) JOIN

Returns all records from the right table and the matched records from the left table. If no match is found, NULL values are returned for columns from the left table.

🔹 FULL (OUTER) JOIN

Retrieves all records from the left and right tables, showing matched records where possible. For unmatched records, it includes NULLs in the columns from the table without a match.

In practice, INNER JOIN and LEFT JOIN tend to be the most frequently used.

INNER JOIN is ideal for retrieving matching data from both tables, while LEFT JOIN ensures that all records from the left table are included, even if there are no matches in the right table.


𝐇𝐨𝐰 𝐭𝐨 𝐢𝐦𝐩𝐫𝐨𝐯𝐞 𝐝𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐩𝐞𝐫𝐟𝐨𝐫𝐦𝐚𝐧𝐜𝐞?

Here are the top ways to improve database performance:

1. Indexing
Create the right indexes based on query patterns to speed up data retrieval.

2. Materialized Views
Store pre-computed query results for quick access, reducing the need to process complex queries repeatedly.

3. Vertical Scaling
Increase the capacity of the database server by adding more CPU, RAM, or storage.

4. Denormalization
Reduce complex joins by restructuring data, which can improve query performance.

5. Database Caching
Store frequently accessed data in a faster storage layer to reduce load on the database.

6. Replication
Create copies of the primary database on different servers to distribute read load and enhance availability.

7. Sharding
Divide the database into smaller, manageable pieces, or shards, to distribute load and improve performance.

8. Partitioning
Split large tables into smaller, more manageable pieces to improve query performance and maintenance.

9. Query Optimization
Rewrite and fine-tune queries to execute more efficiently.

10. Use of Appropriate Data Types
Select the most efficient data types for each column to save space and speed up processing.

11. Limiting Indexes
Avoid excessive indexing, which can slow down write operations; use indexes judiciously.

12. Archiving Old Data
Move infrequently accessed data to an archive to keep the active database smaller and faster.



𝗠𝗼𝘀𝘁 𝗶𝗺𝗽𝗼𝗿𝘁𝗮𝗻𝘁 𝗦𝗤𝗟 𝗖𝗼𝗺𝗺𝗮𝗻𝗱𝘀

𝗦𝗘𝗟𝗘𝗖𝗧 # Retrieves data from a database.

𝗙𝗥𝗢𝗠 # Specifies the table to retrieve data from.

𝗪𝗛𝗘𝗥𝗘 # Filters rows based on a condition.

𝗔𝗦 # Renames a column or table with an alias.

𝗜𝗡 # Checks if a value matches any value in a list.

𝗖𝗢𝗠𝗠𝗜𝗧 # Saves all changes made during the current transaction.

𝗥𝗢𝗟𝗟𝗕𝗔𝗖𝗞 # Undoes all changes made during the current transaction.

𝗨𝗣𝗗𝗔𝗧𝗘 # Modifies existing data in a table.

𝗜𝗡𝗦𝗘𝗥𝗧 𝗜𝗡𝗧𝗢 # Adds new rows to a table.

𝗚𝗥𝗢𝗨𝗣 𝗕𝗬 # Groups rows sharing a property for aggregate functions.

𝗛𝗔𝗩𝗜𝗡𝗚 # Filters groups based on aggregate properties.

𝗦𝗨𝗠 # Calculates the total of a numeric column.

𝗠𝗜𝗡 # Finds the minimum value in a column.

𝗠𝗔𝗫 # Finds the maximum value in a column.

𝗝𝗢𝗜𝗡 # Combines rows from two or more tables based on related columns.

𝗔𝗡𝗗 # Combines two or more conditions in a query.

𝗢𝗥 # Combines two or more conditions in a query where any condition can be true.

𝗜𝗦 𝗡𝗨𝗟𝗟 # Checks for null values.

𝗟𝗜𝗞𝗘 # Searches for a specified pattern in a column.

𝗔𝗟𝗧𝗘𝗥 𝗧𝗔𝗕𝗟𝗘 # Modifies an existing table structure.

𝗖𝗥𝗘𝗔𝗧𝗘 # Defines a new table, database, or other database object.

𝗗𝗘𝗟𝗘𝗧𝗘 # Removes data from a table.

𝗗𝗥𝗢𝗣 # Deletes a database object like a table or index.

𝗢𝗥𝗗𝗘𝗥 𝗕𝗬 # Sorts the result set of a query.

𝗖𝗢𝗨𝗡𝗧 # Counts the number of rows in a table.

𝗔𝗩𝗚 # Calculates the average value of a numeric column.

𝗟𝗜𝗠𝗜𝗧 # Restricts the number of rows returned by a query.