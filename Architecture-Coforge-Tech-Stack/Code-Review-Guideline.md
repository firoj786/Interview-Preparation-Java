Guidelines for reviewing code written in Kotlin:

1. Focus on logic / business feature: Ensure the code functions as intended, meets requirements, and handles edge cases appropriately. Carefully evaluate what impact the code can have.

2. Error handling: Check for null checks and proper error handling mechanisms.

3. Meaningful variable and function names: Clear, concise code that expresses the logic directly without unnecessary complexity.

4. Efficiency and Performance: Look for areas where optimizations can improve efficiency without sacrificing readability. Database calls within for loop is strictly prohibited

5. Utilize language features: Encourage the use of Kotlin-specific features like extension functions, data classes, and lambdas effectively.

6. Avoid anti-patterns: Be aware of common anti-patterns in Kotlin and suggest alternatives. Singletons should be avoided on cloud centric applications as it has impact on scalability.

7. Refactoring opportunities: Identify opportunities for refactoring to improve code structure and maintainability.

8. Unit Testing: Verify that the corresponding unit test cases and that existing unit tests cover the reviewed code and suggest additional tests. There should be no code without corresponding unit tests.

9. Identify all other relevant dependancies: The functionality may have other dependancies like database changes, dependencies on other services. Those dependancies should be taken into consideration while review.

10. Use tools for collaboration: Use Azure devOps for code review comments.

11. Be aware of code merge: Carefully see on which branch the code merge will be after review. The issue number and other details should have been properly marked or not and most importantly the code should HAVE code ONLY releated to the story / issue.

12. Kotlin coding conventions for reference: https://kotlinlang.org/docs/coding-conventions.html .

This is not comprehensive list. Please feel free to add on the list.

 Db-changes-guidelines-and-process.md