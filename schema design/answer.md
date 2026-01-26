

## 1. What is Schema Design and What Does a Database Schema Represent?

Schema design is the process of planning and defining the structure of a relational database before storing any data.  
A database schema represents the blueprint of the database. It defines:

- Tables
- Columns and their data types
- Relationships between tables
- Constraints and rules applied to the data

In simple terms, a schema explains **how data is organized and how different pieces of data relate to each other**.  
For example, a schema may define a `users` table and an `orders` table, where each order is linked to a user using a foreign key.

---

## 2. Why Schema Design Is Required Before Writing Backend Code

Schema design must be done before backend development because the backend relies on the database structure to store and retrieve data correctly.

Reasons:
- Backend APIs depend on table structure and relationships
- Queries cannot be written correctly without knowing columns and constraints
- Changes in schema after backend development cause bugs and rework
- Well-designed schema reduces backend logic complexity

For example, if relationships are clearly defined using foreign keys, the backend does not need to manually validate related data.

---

## 3. Impact of Poor Schema Design

Poor schema design leads to multiple problems:

### Data Consistency
- Duplicate data may exist in multiple places
- Updates in one table may not reflect in others
- Data becomes unreliable

### Maintenance Issues
- Queries become complex and hard to understand
- Fixing bugs requires modifying many tables
- Developers struggle to understand the database structure

### Scalability Problems
- Performance degrades as data grows
- Adding new features becomes difficult
- Schema changes affect existing data and applications

Example: Storing user details repeatedly in the orders table causes duplication and inconsistency when user data changes.

---

## 4. Validations in Schema Design and Why Databases Enforce Them

Validations are rules applied to columns to ensure data correctness and integrity.

Common validations include:

- **NOT NULL**: Prevents empty values  
- **UNIQUE**: Ensures no duplicate values (e.g., email)  
- **DEFAULT**: Assigns a default value when none is provided  
- **PRIMARY KEY**: Uniquely identifies each row  
- **FOREIGN KEY**: Maintains relationships between tables  

Databases enforce validations to:
- Protect data integrity
- Reduce invalid or incomplete data
- Ensure consistent data across applications

Example: A `UNIQUE` constraint on email prevents duplicate user accounts.

---

## 5. Difference Between Database Schema and Database Table

| Database Schema | Database Table |
|-----------------|----------------|
| Logical blueprint of the database | Actual structure that stores data |
| Contains tables, relationships, constraints | Contains rows and columns |
| Represents design | Represents data storage |

A schema is the **plan**, while tables are the **implementation** of that plan.

---

## 6. Why a Table Should Represent Only One Entity

Each table should represent a single entity to follow normalization rules.

Benefits:
- Avoids data duplication
- Improves clarity and readability
- Makes updates and deletes safe
- Ensures accurate relationships

Example:
- `users` table → user information only
- `orders` table → order information only

Mixing multiple entities in one table leads to confusion and redundancy.

---

## 7. Why Redundant or Derived Data Should Be Avoided

Redundant data means storing the same information in multiple places.  
Derived data is data that can be calculated from existing data.

Problems caused by redundancy:
- Inconsistent updates
- Increased storage usage
- Higher chance of errors

Example:
- Storing `total_price` when it can be calculated from item prices
- Storing user name in every order record

Instead, data should be derived using queries when needed.

---

## 8. Importance of Choosing Correct Data Types

Choosing correct data types ensures:

- Data accuracy
- Better performance
- Efficient storage
- Easier validation

Examples:
- Use `INTEGER` for numeric values like age
- Use `TEXT` for names
- Use `TIMESTAMP` for date and time
- Use `BOOLEAN` for true/false values

Incorrect data types may cause incorrect data storage, slow queries, and unexpected errors.

---

## Conclusion

Schema design is the foundation of a reliable relational database system.  
A well-designed schema ensures data consistency, scalability, maintainability, and smooth backend development.  
Poor schema design, on the other hand, leads to technical debt and long-term problems.

Designing the schema carefully before writing backend code is a best practice in software development.
