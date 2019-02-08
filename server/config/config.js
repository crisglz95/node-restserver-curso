//====================================
//Puerto
//===================================
process.env.PORT = process.env.PORT || 3000;

//====================================
//Vencimiento del token
//===================================
//60 seg * 60 min * 24 hrs * 30 dias
process.env.CADUCIDAD_TOKEN = '48hr';


//====================================
//SEED
//===================================
process.env.SEED = process.env.SEED || 'este-es-el-seed-desarrollo';

//====================================
//Google Client ID
//===================================
process.env.CLIENT_ID = process.env.CLIENT_ID || '323884541238-p0bs2jbdejs993bf1t2ms7js85b7cl2d.apps.googleusercontent.com';