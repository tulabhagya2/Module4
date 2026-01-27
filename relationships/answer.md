# Database Relationships

## Definition of Database Relationship

A **database relationship** defines how two or more tables in a relational database are connected using **primary keys** and **foreign keys**.  
Relationships help maintain **data integrity**, **reduce redundancy**, and allow efficient retrieval of related data.

In an **e-commerce application**, database relationships connect customers, products, orders, and other entities to work together.

---

## Types of Database Relationships

There are **three main types** of relationships:

1. One-to-One (1:1)  
2. One-to-Many (1:N)  
3. Many-to-Many (M:N)

---

## One-to-One (1:1) Relationship

### 🔹 Explanation  
In a **one-to-one relationship**, one record in Table A is associated with only **one record** in Table B, and vice-versa.

### 🔹 E-commerce Example  
- Each **User** has one **User Profile**  
- Each **Order** has one **Invoice**

### 🔹 Example Tables  
- `users`  
- `user_profiles`

Each user has exactly one profile.


## One-to-Many (1:N) Relationship

### 🔹 Explanation  
In a **one-to-many relationship**, one record in Table A can have **many records** in Table B, but each record in Table B belongs to only one record in Table A.

### 🔹 E-commerce Example  
- One **Customer** can have many **Orders**  
- One **Category** can have many **Products**

### 🔹 Example Tables  
- `customers`  
- `orders`

Each order belongs to one customer, but a customer can have many orders.


## Many-to-Many (M:N) Relationship

### 🔹 Explanation  
In a **many-to-many relationship**, records in Table A can be associated with many records in Table B, and vice-versa.  
This is implemented using a **junction (bridge) table**.

### 🔹 E-commerce Example  
- An **Order** can contain many **Products**  
- A **Product** can appear in many **Orders**

### 🔹 Example Tables  
- `orders`  
- `products`  
- `order_items` (junction table)

---

## Summary Table

| Relationship Type | Description | E-commerce Example |
|------------------|-------------|--------------------|
| One-to-One | One record linked to one record | User → User Profile |
| One-to-Many | One record linked to many records | Customer → Orders |
| Many-to-Many | Many records linked to many records | Orders ↔ Products |

---

## Conclusion

Database relationships are essential for building structured and efficient systems.  
In e-commerce, they help organize users, products, orders, and ensure data consistency, faster queries, and easier maintenance.



