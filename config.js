var config = {};


config.port = process.env.WEB_PORT || 3000;
config.dbuser = "station";
config.dbpassword = "station900";
config.dbaddress = "ds151108.mlab.com:51108/station";
config.dbhost = 'mongodb://' + config.dbuser + ':' + config.dbpassword + '@' + config.dbaddress;
config.title = "RG Station 900";
config.slogan = "Espace Coworking App";


module.exports = config;