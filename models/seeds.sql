INSERT INTO categorie (name, color, createdAt, updatedAt) 
VALUES ('Birthday', 'blue','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('Anniversarie', 'gold','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('Work', 'yellow','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('Personal', 'red','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('Random', 'purple','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('Appointment', 'pink','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('Payment', 'teal','2019-03-30 16:35:01','2019-03-30 16:35:01'),
        ('School', 'orange','2019-03-30 16:35:01','2019-03-30 16:35:01');
        
INSERT INTO user (name, email, createdAt, updatedAt) 
VALUES ('Liane', 'lianesuarez88@gmail.com','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('Diane', 'dsabra@wiseit.com','2019-03-30 16:35:01','2019-03-30 16:35:01'),
        ('Aaron', 'aarongladston456@gmail.com','2019-03-30 16:35:01','2019-03-30 16:35:01');
        
INSERT INTO event (UserId, CategorieId, eventName, notification, date, time, description, createdAt, updatedAt) 
VALUES ('1', '1', 'Mami birthay', '1', '2019/12/27', '10:00:00', 'Happy birthay mami','2019-03-30 16:35:01','2019-03-30 16:35:01'),
		('2', '2', 'Wedding aniversary', '0','2019/04/11', '7:00:00', 'Happy aniversary','2019-03-30 16:35:01','2019-03-30 16:35:01'),
        ('3', '6', 'Doctor appointment', '1', '2019/04/07', '2:00:00', "I am here",'2019-03-30 16:35:01','2019-03-30 16:35:01');


