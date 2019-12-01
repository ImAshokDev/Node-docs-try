// mysql install in your root path

sudo apt-get update
sudo apt-get install mysql-server
mysql --version
service mysql start 
service mysql status

mysql -u root -p
GRANT ALL PRIVILEGES ON *.* TO 'khristyohan'@'localhost' IDENTIFIED BY 'rootmysql';
\q
mysql -u khristyohan -p
CREATE DATABASE nodejsmysql;
\q;

// Notes:
//sudo mysql
// set password by using  =>
// 1)GRANT ALL PRIVILEGES ON *.* TO 'root'@'localhost' IDENTIFIED BY 'password'; //(paste in root terminal)
// 1)GRANT ALL PRIVILEGES ON *.* TO 'username'@'localhost' IDENTIFIED BY 'password'; //(paste in root terminal)
// 2)flush privileges;
// -----------------------------------------------------------------------------------------------------------------------------------------------
// Note:
// sudo apt update
// sudo apt install mysql-server
// sudo mysql
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// FLUSH PRIVILEGES;
// exit
// mysql -u root -p

// enter root password for mysql
// -----------------------------------------------------------------
// Note:
// For Database creation:
// 1)mysql -u root -p
// on that line:
// 2)show databases;
// 3)create database dummy;



