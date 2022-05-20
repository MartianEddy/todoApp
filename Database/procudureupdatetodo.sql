CREATE PROCEDURE updateTodo(@id int,@title varchar(225),@description varchar(225))
AS
BEGIN
UPDATE todo SET title=@title, description=@description WHERE id=@id
END