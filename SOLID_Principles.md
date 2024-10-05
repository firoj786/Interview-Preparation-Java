SOLID principles explained.

SOLID represents five principles of object-oriented programming.

Whether or not you use OOP, 𝗸𝗻𝗼𝘄𝗶𝗻𝗴 𝘁𝗵𝗲𝘀𝗲 𝗽𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲𝘀 𝗴𝗶𝘃𝗲𝘀 𝘆𝗼𝘂 𝗮 𝗹𝗲𝗻𝘀 𝗶𝗻𝘁𝗼 𝘁𝗵𝗲 𝗳𝗼𝘂𝗻𝗱𝗮𝘁𝗶𝗼𝗻𝘀 𝗼𝗳 𝗰𝗹𝗲𝗮𝗻 𝗰𝗼𝗱𝗲 which can be applied to many areas of programming.

𝗦 — Single Responsibility Principle

𝗢 — Open/Closed Principle

𝗟 — Liskov Substitution Principle

𝗜 — Interface Segregation Principle

𝗗 — Dependency Inversion Principle

Let’s break down each principle ↓

𝟭. 𝗦𝗶𝗻𝗴𝗹𝗲 𝗥𝗲𝘀𝗽𝗼𝗻𝘀𝗶𝗯𝗶𝗹𝗶𝘁𝘆 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗦𝗥𝗣)

Each unit of code should only have one job or responsibility. A unit can be a class, module, function, or component. This keeps code modular and removes the risk of tight coupling.

𝟮. 𝗢𝗽𝗲𝗻-𝗖𝗹𝗼𝘀𝗲𝗱 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗢𝗖𝗣)

Units of code should be open for extension but closed for modification. You should be able to extend functionality with additional code rather than modifying existing ones. This principle can be applied to component-based systems such as a React frontend.

𝟯. 𝗟𝗶𝘀𝗸𝗼𝘃 𝗦𝘂𝗯𝘀𝘁𝗶𝘁𝘂𝘁𝗶𝗼𝗻 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗟𝗦𝗣)

You should be able to substitute objects a of base class with objects of its subclass without altering the ‘correctness’ of the program.

An example of this is with a Bird base class. You might assume that it should have a ‘fly’ method. But what about the birds that can’t fly? Like a Penguin. In this example, having a ‘fly’ method in the Bird class would violate LSP.

𝟰. 𝗜𝗻𝘁𝗲𝗿𝗳𝗮𝗰𝗲 𝗦𝗲𝗴𝗿𝗲𝗴𝗮𝘁𝗶𝗼𝗻 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗜𝗦𝗣)

Provide multiple interfaces with specific responsibilities rather than a small set of general-purpose interfaces. Clients shouldn’t need to know about the methods & properties that don't relate to their use case.

Complexity ↓

Code flexibility ↑

𝟱. 𝗗𝗲𝗽𝗲𝗻𝗱𝗲𝗻𝗰𝘆 𝗜𝗻𝘃𝗲𝗿𝘀𝗶𝗼𝗻 𝗣𝗿𝗶𝗻𝗰𝗶𝗽𝗹𝗲 (𝗗𝗜𝗣)

You should depend on abstractions, not on concrete classes. Use abstractions to decouple dependencies between different parts of the systems. Direct calls between units of code shouldn’t be done, instead interfaces or abstractions should be used.