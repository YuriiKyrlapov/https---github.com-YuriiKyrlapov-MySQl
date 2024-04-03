// вывести по клиентам

SELECT Customers.CustomerName, COUNT(Orders.OrderID) AS OrdersCount
FROM Customers
JOIN Orders ON Customers.CustomerID = Orders.CustomerID
GROUP BY Customers.CustomerName;


//Вывести кол/распределение заказов по менеджерам (проекция: фамилияменеджера, ко-возаказов)

SELECT Employees.LastName, COUNT(Orders.OrderID) AS OrdersCount
FROM Employees
JOIN Orders ON Employees.EmployeeID = Orders.EmployeeID
GROUP BY Employees.LastName;


//Вывести минимальную стоимость товаров для каждой категории (проекция: названиекатегории, минстоимость_товаров)
SELECT Categories.CategoryName, MIN(Products.Price) AS MinProductPrice
FROM Categories
JOIN Products ON Categories.CategoryID = Products.CategoryID
GROUP BY Categories.CategoryName;

//Вывести данные о заказах (проекция: номерзаказа, стоимостьзаказа)



//Вывести доход каждого менеджера за весь период, исходя из ставки в 5% от суммы его заказов (проекция: фамилия_менеджера, доход)
