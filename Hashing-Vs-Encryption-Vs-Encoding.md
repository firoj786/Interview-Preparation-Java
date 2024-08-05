𝗛𝗮𝘀𝗵𝗶𝗻𝗴 

This is a one-way process used for data integrity verification. 

When you hash data, you get a unique string representing the original data. 

It's a one-way street; once you hash something, you can't get the original data back from the hash. 

While multiple values can theoretically yield the same hash, well-crafted cryptographic hash functions make such collisions incredibly rare and nearly impossible to compute.

This property makes it perfect for verifying if someone altered the data. 

If even one-bit changes in the original data, the hash changes dramatically. 


𝗘𝗻𝗰𝗿𝘆𝗽𝘁𝗶𝗼𝗻 

This is the real deal when it comes to data security. 

It uses algorithms and keys to transform readable data (plaintext) into an unreadable format (ciphertext). 

Only those with the correct key can unlock (decrypt) the data and read it. 

This process is reversible, unlike hashing. 

Encryption is critical for protecting sensitive data from unauthorized access. 


𝗘𝗻𝗰𝗼𝗱𝗶𝗻𝗴 

This is all about data representation. 

It converts data from one format to another, making it easier to interpret and display. 

Common formats: 

• Base64 
• UTF-8 
• ASCII 

Encoding does NOT provide security! It's for data transmission and storage convenience. 


One common use of hashing is for secure password storage. 

When you create an account or set a password, the system hashes and stores the password in the database. 

During login, the system hashes the provided password and compares it to the stored hash without revealing the password. 
