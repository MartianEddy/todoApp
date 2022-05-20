CREATE PROCEDURE insertTodo(@id int,@title varchar(225),@description varchar(225))
AS
BEGIN
INSERT INTO todo(id,title,description)
VALUES(@id,@title,@description)
END