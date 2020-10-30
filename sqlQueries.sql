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