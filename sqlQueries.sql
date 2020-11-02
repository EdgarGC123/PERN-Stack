create database egc;

\c egc

create table videos (id SERIAl, header text, description text,video text);

insert into videos (header , description ,video ) VALUES ('First Tenth Hour Video', 'some description', '<iframe width="791" height="445" src="https://www.youtube.com/embed/t6EiXCAgBc4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');


ALTER TABLE videos RENAME COLUMN video to link;


insert into videos (header , description ,link ) VALUES ('First Tenth Hour Video', 'some description', 'https://www.youtube.com/embed/t6EiXCAgBc4');



-- sudo npm install -g create-react-app
-- create-react-app person-brand
-- cd person-brand
-- git init
-- heroku create -b https://github.com/mars/create-react-app-buildpack.git
-- git add .
-- git commit -m "react-create-app on Heroku"
-- git push heroku master
-- heroku open

create table photos (id SERIAl, header text, description text,photo text);


UPDATE photos SET header = 'EGC', description = 'Edgars logo', photo ='https://scontent-ort2-1.xx.fbcdn.net/v/t1.0-0/s640x640/70146707_2366386613468814_4976009771816583168_o.jpg?_nc_cat=101&ccb=2&_nc_sid=84a396&_nc_ohc=N7QyNrlio3wAX9C3GH5&_nc_ht=scontent-ort2-1.xx&tp=7&oh=0b0762a3b47a88d421909db8a6e4aab2&oe=5FC45C65' WHERE id = 1;