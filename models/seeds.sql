INSERT INTO categories (name, color) 
VALUES ('Birthday', 'purple'),
		('Anniversarie', 'pink'),
		('Work', 'blue'),
		('Personal', 'black'),
		('Random', 'green'),
		('Appointment', 'orange'),
		('Payment', 'red');
        
INSERT INTO users (name, last_name, email) 
VALUES ('Liane', 'Suarez Curbelo', 'lianesuarez88@gmail.com'),
		('Diane', 'Sabra', 'dsabra@wiseit.com'),
        ('Aaron', 'Gladstone', 'aarongladston456@gmail.com');
        
INSERT INTO events (id_user, id_categorie, name, notification, date, time, description) 
VALUES ('1', '8', 'Mami birthay', '1', '2019/12/27', '10:00:00', 'Happy birthay mami'),
		('3', '9', 'Wedding aniversary', '0','2019/04/11', '7:00:00', 'Happy aniversary'),
        ('4', '13', 'Doctor appointment', '1', '2019/04/07', '2:00:00', null);


