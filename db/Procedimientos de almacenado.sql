CREATE DEFINER=`root`@`localhost` PROCEDURE `UsersAddOrEdit`(
       in _id int,
       in _nombre varchar(45),
       in _apellido varchar(45),
       in _email varchar(45),
       in _PhoneNumber int(20),
       in _isAdmin boolean,
       in _isClient boolean,
       in _PASSWORD varchar(45)
)
begin
     if _id = 0 then
		insert into Users(nombre, apellido, email, PhoneNumber, isAdmin, isClient, PASSWORD)
        values(_nombre, _apellido, _email, _PhoneNumber, _isAdmin, _isClient, _PASSWORD);
        set _id = last_insert_id();
	 else
         update Users
         set 
            nombre =_nombre,
            apellido = _apellido,
            email = _email,
            PhoneNumber = _PhoneNumber,
            isAdmin =_isAdmin,
            isClient =_isClient,
            PASSWORD = _PASSWORD
            WHERE id = _id;
	end if;
    select _id as id;
end