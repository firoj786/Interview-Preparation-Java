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