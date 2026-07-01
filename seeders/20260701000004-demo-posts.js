'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', [
  {
    "id": 1,
    "descripcion": "Amanecer en la montaña, una experiencia única",
    "fecha": "2026-03-27T15:16:37.420Z",
    "userId": 13,
    "createdAt": "2026-03-27T15:16:37.420Z",
    "updatedAt": "2026-03-27T15:16:37.420Z"
  },
  {
    "id": 2,
    "descripcion": "Mi rincón favorito de la ciudad",
    "fecha": "2026-04-15T15:16:37.420Z",
    "userId": 29,
    "createdAt": "2026-04-15T15:16:37.420Z",
    "updatedAt": "2026-04-15T15:16:37.420Z"
  },
  {
    "id": 3,
    "descripcion": "El mejor café de especialidad que probé",
    "fecha": "2026-03-17T15:16:37.420Z",
    "userId": 48,
    "createdAt": "2026-03-17T15:16:37.420Z",
    "updatedAt": "2026-03-17T15:16:37.420Z"
  },
  {
    "id": 4,
    "descripcion": "Atardecer en la costa, colores increíbles",
    "fecha": "2026-04-02T15:16:37.420Z",
    "userId": 11,
    "createdAt": "2026-04-02T15:16:37.420Z",
    "updatedAt": "2026-04-02T15:16:37.420Z"
  },
  {
    "id": 5,
    "descripcion": "Nueva receta vegana que salió perfecta",
    "fecha": "2026-02-04T15:16:37.420Z",
    "userId": 27,
    "createdAt": "2026-02-04T15:16:37.420Z",
    "updatedAt": "2026-02-04T15:16:37.420Z"
  },
  {
    "id": 6,
    "descripcion": "Entrenamiento de hoy: pierna completa",
    "fecha": "2026-02-16T15:16:37.420Z",
    "userId": 8,
    "createdAt": "2026-02-16T15:16:37.420Z",
    "updatedAt": "2026-02-16T15:16:37.420Z"
  },
  {
    "id": 7,
    "descripcion": "Mi gato durmiendo en posiciones imposibles",
    "fecha": "2026-04-18T15:16:37.420Z",
    "userId": 10,
    "createdAt": "2026-04-18T15:16:37.420Z",
    "updatedAt": "2026-04-18T15:16:37.420Z"
  },
  {
    "id": 8,
    "descripcion": "Concierto anoche, vibras increíbles",
    "fecha": "2026-04-05T15:16:37.420Z",
    "userId": 15,
    "createdAt": "2026-04-05T15:16:37.420Z",
    "updatedAt": "2026-04-05T15:16:37.420Z"
  },
  {
    "id": 9,
    "descripcion": "Mi rincón de lectura favorito",
    "fecha": "2026-02-24T15:16:37.420Z",
    "userId": 11,
    "createdAt": "2026-02-24T15:16:37.420Z",
    "updatedAt": "2026-02-24T15:16:37.420Z"
  },
  {
    "id": 10,
    "descripcion": "Probando un nuevo restaurante tailandés",
    "fecha": "2026-05-18T15:16:37.420Z",
    "userId": 38,
    "createdAt": "2026-05-18T15:16:37.420Z",
    "updatedAt": "2026-05-18T15:16:37.420Z"
  },
  {
    "id": 11,
    "descripcion": "Caminata por el bosque, paz total",
    "fecha": "2026-04-07T15:16:37.420Z",
    "userId": 27,
    "createdAt": "2026-04-07T15:16:37.420Z",
    "updatedAt": "2026-04-07T15:16:37.420Z"
  },
  {
    "id": 12,
    "descripcion": "Mi outfit del día",
    "fecha": "2026-05-09T15:16:37.420Z",
    "userId": 20,
    "createdAt": "2026-05-09T15:16:37.420Z",
    "updatedAt": "2026-05-09T15:16:37.420Z"
  },
  {
    "id": 13,
    "descripcion": "Atardecer desde mi terraza",
    "fecha": "2026-06-17T15:16:37.420Z",
    "userId": 46,
    "createdAt": "2026-06-17T15:16:37.420Z",
    "updatedAt": "2026-06-17T15:16:37.420Z"
  },
  {
    "id": 14,
    "descripcion": "Nuevo proyecto personal emocionante",
    "fecha": "2026-05-13T15:16:37.420Z",
    "userId": 31,
    "createdAt": "2026-05-13T15:16:37.420Z",
    "updatedAt": "2026-05-13T15:16:37.420Z"
  },
  {
    "id": 15,
    "descripcion": "Día de playa con amigos",
    "fecha": "2026-01-18T15:16:37.420Z",
    "userId": 1,
    "createdAt": "2026-01-18T15:16:37.420Z",
    "updatedAt": "2026-01-18T15:16:37.420Z"
  },
  {
    "id": 16,
    "descripcion": "Mi planta que no para de crecer",
    "fecha": "2026-01-11T15:16:37.420Z",
    "userId": 41,
    "createdAt": "2026-01-11T15:16:37.420Z",
    "updatedAt": "2026-01-11T15:16:37.420Z"
  },
  {
    "id": 17,
    "descripcion": "Receta de pasta casera paso a paso",
    "fecha": "2026-05-26T15:16:37.420Z",
    "userId": 24,
    "createdAt": "2026-05-26T15:16:37.420Z",
    "updatedAt": "2026-05-26T15:16:37.420Z"
  },
  {
    "id": 18,
    "descripcion": "Mi lugar feliz",
    "fecha": "2026-02-08T15:16:37.420Z",
    "userId": 3,
    "createdAt": "2026-02-08T15:16:37.420Z",
    "updatedAt": "2026-02-08T15:16:37.420Z"
  },
  {
    "id": 19,
    "descripcion": "Reflexiones de un domingo lluvioso",
    "fecha": "2026-03-23T15:16:37.420Z",
    "userId": 15,
    "createdAt": "2026-03-23T15:16:37.420Z",
    "updatedAt": "2026-03-23T15:16:37.420Z"
  },
  {
    "id": 20,
    "descripcion": "Nuevo libro que me tiene atrapado",
    "fecha": "2026-02-03T15:16:37.420Z",
    "userId": 19,
    "createdAt": "2026-02-03T15:16:37.420Z",
    "updatedAt": "2026-02-03T15:16:37.420Z"
  },
  {
    "id": 21,
    "descripcion": "Desayuno saludable para empezar el día",
    "fecha": "2026-03-02T15:16:37.420Z",
    "userId": 27,
    "createdAt": "2026-03-02T15:16:37.420Z",
    "updatedAt": "2026-03-02T15:16:37.420Z"
  },
  {
    "id": 22,
    "descripcion": "Ruta de fin de semana por la montaña",
    "fecha": "2026-01-26T15:16:37.420Z",
    "userId": 49,
    "createdAt": "2026-01-26T15:16:37.420Z",
    "updatedAt": "2026-01-26T15:16:37.420Z"
  },
  {
    "id": 23,
    "descripcion": "Mi soundtrack de la semana",
    "fecha": "2026-01-20T15:16:37.420Z",
    "userId": 29,
    "createdAt": "2026-01-20T15:16:37.420Z",
    "updatedAt": "2026-01-20T15:16:37.420Z"
  },
  {
    "id": 24,
    "descripcion": "Arte callejero que me encontré hoy",
    "fecha": "2026-01-18T15:16:37.420Z",
    "userId": 44,
    "createdAt": "2026-01-18T15:16:37.420Z",
    "updatedAt": "2026-01-18T15:16:37.420Z"
  },
  {
    "id": 25,
    "descripcion": "Cena romántica preparada en casa",
    "fecha": "2026-01-28T15:16:37.420Z",
    "userId": 21,
    "createdAt": "2026-01-28T15:16:37.420Z",
    "updatedAt": "2026-01-28T15:16:37.420Z"
  },
  {
    "id": 26,
    "descripcion": "Mi nueva rutina de skincare",
    "fecha": "2026-03-21T15:16:37.420Z",
    "userId": 38,
    "createdAt": "2026-03-21T15:16:37.420Z",
    "updatedAt": "2026-03-21T15:16:37.420Z"
  },
  {
    "id": 27,
    "descripcion": "Paseo en bici al atardecer",
    "fecha": "2026-01-26T15:16:37.420Z",
    "userId": 2,
    "createdAt": "2026-01-26T15:16:37.420Z",
    "updatedAt": "2026-01-26T15:16:37.420Z"
  },
  {
    "id": 28,
    "descripcion": "El postre más rico del mundo",
    "fecha": "2026-04-05T15:16:37.420Z",
    "userId": 12,
    "createdAt": "2026-04-05T15:16:37.420Z",
    "updatedAt": "2026-04-05T15:16:37.420Z"
  },
  {
    "id": 29,
    "descripcion": "Domingo de películas y mantita",
    "fecha": "2026-04-09T15:16:37.420Z",
    "userId": 21,
    "createdAt": "2026-04-09T15:16:37.420Z",
    "updatedAt": "2026-04-09T15:16:37.420Z"
  },
  {
    "id": 30,
    "descripcion": "Nuevo espacio de trabajo en casa",
    "fecha": "2026-04-15T15:16:37.420Z",
    "userId": 42,
    "createdAt": "2026-04-15T15:16:37.420Z",
    "updatedAt": "2026-04-15T15:16:37.420Z"
  },
  {
    "id": 31,
    "descripcion": "Mi primer tatuaje, dolió pero valió la pena",
    "fecha": "2026-05-10T15:16:37.420Z",
    "userId": 1,
    "createdAt": "2026-05-10T15:16:37.420Z",
    "updatedAt": "2026-05-10T15:16:37.420Z"
  },
  {
    "id": 32,
    "descripcion": "Finde escapada a las sierras",
    "fecha": "2026-02-04T15:16:37.420Z",
    "userId": 32,
    "createdAt": "2026-02-04T15:16:37.420Z",
    "updatedAt": "2026-02-04T15:16:37.420Z"
  },
  {
    "id": 33,
    "descripcion": "Clase de yoga al aire libre",
    "fecha": "2026-05-22T15:16:37.420Z",
    "userId": 11,
    "createdAt": "2026-05-22T15:16:37.420Z",
    "updatedAt": "2026-05-22T15:16:37.420Z"
  },
  {
    "id": 34,
    "descripcion": "Mi colección de vinilos",
    "fecha": "2026-01-13T15:16:37.420Z",
    "userId": 1,
    "createdAt": "2026-01-13T15:16:37.420Z",
    "updatedAt": "2026-01-13T15:16:37.420Z"
  },
  {
    "id": 35,
    "descripcion": "Noche de juegos con amigos",
    "fecha": "2026-02-10T15:16:37.420Z",
    "userId": 43,
    "createdAt": "2026-02-10T15:16:37.420Z",
    "updatedAt": "2026-02-10T15:16:37.420Z"
  },
  {
    "id": 36,
    "descripcion": "Cosecha de mi huerta urbana",
    "fecha": "2026-05-20T15:16:37.420Z",
    "userId": 27,
    "createdAt": "2026-05-20T15:16:37.420Z",
    "updatedAt": "2026-05-20T15:16:37.420Z"
  },
  {
    "id": 37,
    "descripcion": "Atardecer desde el avión",
    "fecha": "2026-06-09T15:16:37.420Z",
    "userId": 5,
    "createdAt": "2026-06-09T15:16:37.420Z",
    "updatedAt": "2026-06-09T15:16:37.420Z"
  },
  {
    "id": 38,
    "descripcion": "Mi café favorito de especialidad",
    "fecha": "2026-01-31T15:16:37.420Z",
    "userId": 25,
    "createdAt": "2026-01-31T15:16:37.420Z",
    "updatedAt": "2026-01-31T15:16:37.420Z"
  },
  {
    "id": 39,
    "descripcion": "Nuevo podcast que recomiendo mucho",
    "fecha": "2026-05-16T15:16:37.420Z",
    "userId": 23,
    "createdAt": "2026-05-16T15:16:37.420Z",
    "updatedAt": "2026-05-16T15:16:37.420Z"
  },
  {
    "id": 40,
    "descripcion": "Mi rincón de plantas",
    "fecha": "2026-01-30T15:16:37.420Z",
    "userId": 24,
    "createdAt": "2026-01-30T15:16:37.420Z",
    "updatedAt": "2026-01-30T15:16:37.420Z"
  },
  {
    "id": 41,
    "descripcion": "Día de mercado de pulgas",
    "fecha": "2026-05-15T15:16:37.420Z",
    "userId": 4,
    "createdAt": "2026-05-15T15:16:37.420Z",
    "updatedAt": "2026-05-15T15:16:37.420Z"
  },
  {
    "id": 42,
    "descripcion": "Cena de Navidad en familia",
    "fecha": "2026-02-18T15:16:37.420Z",
    "userId": 1,
    "createdAt": "2026-02-18T15:16:37.420Z",
    "updatedAt": "2026-02-18T15:16:37.420Z"
  },
  {
    "id": 43,
    "descripcion": "Runner: 10K completados hoy",
    "fecha": "2026-04-10T15:16:37.420Z",
    "userId": 7,
    "createdAt": "2026-04-10T15:16:37.420Z",
    "updatedAt": "2026-04-10T15:16:37.420Z"
  },
  {
    "id": 44,
    "descripcion": "Mi nueva cámara analógica",
    "fecha": "2026-01-16T15:16:37.420Z",
    "userId": 19,
    "createdAt": "2026-01-16T15:16:37.420Z",
    "updatedAt": "2026-01-16T15:16:37.420Z"
  },
  {
    "id": 45,
    "descripcion": "Tarde de lluvia y libro",
    "fecha": "2026-05-05T15:16:37.420Z",
    "userId": 12,
    "createdAt": "2026-05-05T15:16:37.420Z",
    "updatedAt": "2026-05-05T15:16:37.420Z"
  },
  {
    "id": 46,
    "descripcion": "Improvisando cena con lo que había en casa",
    "fecha": "2026-02-21T15:16:37.420Z",
    "userId": 20,
    "createdAt": "2026-02-21T15:16:37.420Z",
    "updatedAt": "2026-02-21T15:16:37.420Z"
  },
  {
    "id": 47,
    "descripcion": "Paseo dominical en bici",
    "fecha": "2026-06-16T15:16:37.420Z",
    "userId": 7,
    "createdAt": "2026-06-16T15:16:37.420Z",
    "updatedAt": "2026-06-16T15:16:37.420Z"
  },
  {
    "id": 48,
    "descripcion": "Mi nueva playlist para entrenar",
    "fecha": "2026-04-13T15:16:37.420Z",
    "userId": 31,
    "createdAt": "2026-04-13T15:16:37.420Z",
    "updatedAt": "2026-04-13T15:16:37.420Z"
  },
  {
    "id": 49,
    "descripcion": "El mural más lindo de la ciudad",
    "fecha": "2026-05-23T15:16:37.420Z",
    "userId": 2,
    "createdAt": "2026-05-23T15:16:37.420Z",
    "updatedAt": "2026-05-23T15:16:37.420Z"
  },
  {
    "id": 50,
    "descripcion": "Domingo de pancakes",
    "fecha": "2026-03-20T15:16:37.420Z",
    "userId": 33,
    "createdAt": "2026-03-20T15:16:37.420Z",
    "updatedAt": "2026-03-20T15:16:37.420Z"
  },
  {
    "id": 51,
    "descripcion": "Mi gato es fotogénico",
    "fecha": "2026-01-25T15:16:37.420Z",
    "userId": 10,
    "createdAt": "2026-01-25T15:16:37.420Z",
    "updatedAt": "2026-01-25T15:16:37.420Z"
  },
  {
    "id": 52,
    "descripcion": "Noche de vinos y charlas",
    "fecha": "2026-04-01T15:16:37.420Z",
    "userId": 11,
    "createdAt": "2026-04-01T15:16:37.420Z",
    "updatedAt": "2026-04-01T15:16:37.420Z"
  },
  {
    "id": 53,
    "descripcion": "Mi nuevo emprendimiento",
    "fecha": "2026-06-26T15:16:37.420Z",
    "userId": 48,
    "createdAt": "2026-06-26T15:16:37.420Z",
    "updatedAt": "2026-06-26T15:16:37.420Z"
  },
  {
    "id": 54,
    "descripcion": "Día de campo con la familia",
    "fecha": "2026-01-28T15:16:37.420Z",
    "userId": 18,
    "createdAt": "2026-01-28T15:16:37.420Z",
    "updatedAt": "2026-01-28T15:16:37.420Z"
  },
  {
    "id": 55,
    "descripcion": "Receta de smoothie energético",
    "fecha": "2026-03-19T15:16:37.420Z",
    "userId": 48,
    "createdAt": "2026-03-19T15:16:37.420Z",
    "updatedAt": "2026-03-19T15:16:37.420Z"
  },
  {
    "id": 56,
    "descripcion": "Mi lugar secreto en la ciudad",
    "fecha": "2026-05-24T15:16:37.420Z",
    "userId": 2,
    "createdAt": "2026-05-24T15:16:37.420Z",
    "updatedAt": "2026-05-24T15:16:37.420Z"
  },
  {
    "id": 57,
    "descripcion": "Aventura de fin de semana",
    "fecha": "2026-01-31T15:16:37.420Z",
    "userId": 44,
    "createdAt": "2026-01-31T15:16:37.420Z",
    "updatedAt": "2026-01-31T15:16:37.420Z"
  },
  {
    "id": 58,
    "descripcion": "Reseña del último libro que leí",
    "fecha": "2026-02-22T15:16:37.420Z",
    "userId": 2,
    "createdAt": "2026-02-22T15:16:37.420Z",
    "updatedAt": "2026-02-22T15:16:37.420Z"
  },
  {
    "id": 59,
    "descripcion": "Mi outfit favorito del otoño",
    "fecha": "2026-06-21T15:16:37.420Z",
    "userId": 38,
    "createdAt": "2026-06-21T15:16:37.420Z",
    "updatedAt": "2026-06-21T15:16:37.420Z"
  },
  {
    "id": 60,
    "descripcion": "Día de spa en casa",
    "fecha": "2026-03-11T15:16:37.420Z",
    "userId": 38,
    "createdAt": "2026-03-11T15:16:37.420Z",
    "updatedAt": "2026-03-11T15:16:37.420Z"
  },
  {
    "id": 61,
    "descripcion": "Nuevo álbum que no paro de escuchar",
    "fecha": "2026-01-26T15:16:37.420Z",
    "userId": 38,
    "createdAt": "2026-01-26T15:16:37.420Z",
    "updatedAt": "2026-01-26T15:16:37.420Z"
  },
  {
    "id": 62,
    "descripcion": "Mi desayuno fitness",
    "fecha": "2026-06-05T15:16:37.420Z",
    "userId": 31,
    "createdAt": "2026-06-05T15:16:37.420Z",
    "updatedAt": "2026-06-05T15:16:37.420Z"
  },
  {
    "id": 63,
    "descripcion": "Atardecer en el lago",
    "fecha": "2026-01-21T15:16:37.420Z",
    "userId": 30,
    "createdAt": "2026-01-21T15:16:37.420Z",
    "updatedAt": "2026-01-21T15:16:37.420Z"
  },
  {
    "id": 64,
    "descripcion": "Encuentro de arte local",
    "fecha": "2026-04-11T15:16:37.420Z",
    "userId": 50,
    "createdAt": "2026-04-11T15:16:37.420Z",
    "updatedAt": "2026-04-11T15:16:37.420Z"
  },
  {
    "id": 65,
    "descripcion": "Mi nueva planta suculenta",
    "fecha": "2026-03-20T15:16:37.420Z",
    "userId": 11,
    "createdAt": "2026-03-20T15:16:37.420Z",
    "updatedAt": "2026-03-20T15:16:37.420Z"
  },
  {
    "id": 66,
    "descripcion": "Rutina de ejercicios en casa",
    "fecha": "2026-05-26T15:16:37.420Z",
    "userId": 16,
    "createdAt": "2026-05-26T15:16:37.420Z",
    "updatedAt": "2026-05-26T15:16:37.420Z"
  },
  {
    "id": 67,
    "descripcion": "Picnic en el parque",
    "fecha": "2026-02-14T15:16:37.420Z",
    "userId": 25,
    "createdAt": "2026-02-14T15:16:37.420Z",
    "updatedAt": "2026-02-14T15:16:37.420Z"
  },
  {
    "id": 68,
    "descripcion": "Mi serie favorita del momento",
    "fecha": "2026-06-23T15:16:37.420Z",
    "userId": 40,
    "createdAt": "2026-06-23T15:16:37.420Z",
    "updatedAt": "2026-06-23T15:16:37.420Z"
  },
  {
    "id": 69,
    "descripcion": "Día de playa y libro",
    "fecha": "2026-02-13T15:16:37.420Z",
    "userId": 7,
    "createdAt": "2026-02-13T15:16:37.420Z",
    "updatedAt": "2026-02-13T15:16:37.420Z"
  },
  {
    "id": 70,
    "descripcion": "Nuevo café del barrio",
    "fecha": "2026-06-01T15:16:37.420Z",
    "userId": 9,
    "createdAt": "2026-06-01T15:16:37.420Z",
    "updatedAt": "2026-06-01T15:16:37.420Z"
  },
  {
    "id": 71,
    "descripcion": "Mi huerta en primavera",
    "fecha": "2026-02-08T15:16:37.420Z",
    "userId": 27,
    "createdAt": "2026-02-08T15:16:37.420Z",
    "updatedAt": "2026-02-08T15:16:37.420Z"
  },
  {
    "id": 72,
    "descripcion": "Noche de pizza casera",
    "fecha": "2026-05-07T15:16:37.420Z",
    "userId": 45,
    "createdAt": "2026-05-07T15:16:37.420Z",
    "updatedAt": "2026-05-07T15:16:37.420Z"
  },
  {
    "id": 73,
    "descripcion": "Paseo en kayak",
    "fecha": "2026-04-30T15:16:37.420Z",
    "userId": 40,
    "createdAt": "2026-04-30T15:16:37.420Z",
    "updatedAt": "2026-04-30T15:16:37.420Z"
  },
  {
    "id": 74,
    "descripcion": "Mi colección de tazas",
    "fecha": "2026-04-02T15:16:37.420Z",
    "userId": 30,
    "createdAt": "2026-04-02T15:16:37.420Z",
    "updatedAt": "2026-04-02T15:16:37.420Z"
  },
  {
    "id": 75,
    "descripcion": "Día de lluvia y música",
    "fecha": "2026-01-11T15:16:37.420Z",
    "userId": 20,
    "createdAt": "2026-01-11T15:16:37.420Z",
    "updatedAt": "2026-01-11T15:16:37.420Z"
  },
  {
    "id": 76,
    "descripcion": "Nuevo curso que estoy haciendo",
    "fecha": "2026-02-01T15:16:37.420Z",
    "userId": 50,
    "createdAt": "2026-02-01T15:16:37.420Z",
    "updatedAt": "2026-02-01T15:16:37.420Z"
  },
  {
    "id": 77,
    "descripcion": "Brunch con amigas",
    "fecha": "2026-01-28T15:16:37.420Z",
    "userId": 10,
    "createdAt": "2026-01-28T15:16:37.420Z",
    "updatedAt": "2026-01-28T15:16:37.420Z"
  },
  {
    "id": 78,
    "descripcion": "Mi rutina matutina",
    "fecha": "2026-04-29T15:16:37.420Z",
    "userId": 45,
    "createdAt": "2026-04-29T15:16:37.420Z",
    "updatedAt": "2026-04-29T15:16:37.420Z"
  },
  {
    "id": 79,
    "descripcion": "Atardecer en el puerto",
    "fecha": "2026-06-19T15:16:37.420Z",
    "userId": 24,
    "createdAt": "2026-06-19T15:16:37.420Z",
    "updatedAt": "2026-06-19T15:16:37.420Z"
  },
  {
    "id": 80,
    "descripcion": "Cena al aire libre",
    "fecha": "2026-05-12T15:16:37.420Z",
    "userId": 37,
    "createdAt": "2026-05-12T15:16:37.420Z",
    "updatedAt": "2026-05-12T15:16:37.420Z"
  },
  {
    "id": 81,
    "descripcion": "Mi nueva planta de lavanda",
    "fecha": "2026-04-19T15:16:37.420Z",
    "userId": 33,
    "createdAt": "2026-04-19T15:16:37.420Z",
    "updatedAt": "2026-04-19T15:16:37.420Z"
  },
  {
    "id": 82,
    "descripcion": "Finde de desconexión total",
    "fecha": "2026-01-31T15:16:37.420Z",
    "userId": 25,
    "createdAt": "2026-01-31T15:16:37.420Z",
    "updatedAt": "2026-01-31T15:16:37.420Z"
  },
  {
    "id": 83,
    "descripcion": "Receta de pan casero",
    "fecha": "2026-05-24T15:16:37.420Z",
    "userId": 12,
    "createdAt": "2026-05-24T15:16:37.420Z",
    "updatedAt": "2026-05-24T15:16:37.420Z"
  },
  {
    "id": 84,
    "descripcion": "Mi lugar favorito para leer",
    "fecha": "2026-02-06T15:16:37.420Z",
    "userId": 41,
    "createdAt": "2026-02-06T15:16:37.420Z",
    "updatedAt": "2026-02-06T15:16:37.420Z"
  },
  {
    "id": 85,
    "descripcion": "Día de surf",
    "fecha": "2026-06-10T15:16:37.420Z",
    "userId": 37,
    "createdAt": "2026-06-10T15:16:37.420Z",
    "updatedAt": "2026-06-10T15:16:37.420Z"
  },
  {
    "id": 86,
    "descripcion": "Noche de estrellas",
    "fecha": "2026-06-11T15:16:37.420Z",
    "userId": 16,
    "createdAt": "2026-06-11T15:16:37.420Z",
    "updatedAt": "2026-06-11T15:16:37.420Z"
  },
  {
    "id": 87,
    "descripcion": "Mi nuevo proyecto creativo",
    "fecha": "2026-03-23T15:16:37.420Z",
    "userId": 37,
    "createdAt": "2026-03-23T15:16:37.420Z",
    "updatedAt": "2026-03-23T15:16:37.420Z"
  },
  {
    "id": 88,
    "descripcion": "Caminata al amanecer",
    "fecha": "2026-06-30T15:16:37.420Z",
    "userId": 13,
    "createdAt": "2026-06-30T15:16:37.420Z",
    "updatedAt": "2026-06-30T15:16:37.420Z"
  },
  {
    "id": 89,
    "descripcion": "Receta de postre saludable",
    "fecha": "2026-03-24T15:16:37.420Z",
    "userId": 44,
    "createdAt": "2026-03-24T15:16:37.420Z",
    "updatedAt": "2026-03-24T15:16:37.420Z"
  },
  {
    "id": 90,
    "descripcion": "Mi salsa favorita para pasta",
    "fecha": "2026-04-07T15:16:37.420Z",
    "userId": 44,
    "createdAt": "2026-04-07T15:16:37.420Z",
    "updatedAt": "2026-04-07T15:16:37.420Z"
  },
  {
    "id": 91,
    "descripcion": "Día de piscina",
    "fecha": "2026-06-07T15:16:37.420Z",
    "userId": 26,
    "createdAt": "2026-06-07T15:16:37.420Z",
    "updatedAt": "2026-06-07T15:16:37.420Z"
  },
  {
    "id": 92,
    "descripcion": "Mi álbum de fotos favoritas",
    "fecha": "2026-03-07T15:16:37.420Z",
    "userId": 33,
    "createdAt": "2026-03-07T15:16:37.420Z",
    "updatedAt": "2026-03-07T15:16:37.420Z"
  },
  {
    "id": 93,
    "descripcion": "Nuevo hobby: cerámica",
    "fecha": "2026-03-19T15:16:37.420Z",
    "userId": 1,
    "createdAt": "2026-03-19T15:16:37.420Z",
    "updatedAt": "2026-03-19T15:16:37.420Z"
  },
  {
    "id": 94,
    "descripcion": "Cena express entre semana",
    "fecha": "2026-07-01T15:16:37.420Z",
    "userId": 30,
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 95,
    "descripcion": "Mi vista favorita de la ciudad",
    "fecha": "2026-06-20T15:16:37.420Z",
    "userId": 38,
    "createdAt": "2026-06-20T15:16:37.420Z",
    "updatedAt": "2026-06-20T15:16:37.420Z"
  },
  {
    "id": 96,
    "descripcion": "Rutina de cuidado facial",
    "fecha": "2026-02-18T15:16:37.420Z",
    "userId": 11,
    "createdAt": "2026-02-18T15:16:37.420Z",
    "updatedAt": "2026-02-18T15:16:37.420Z"
  },
  {
    "id": 97,
    "descripcion": "Domingo de siesta",
    "fecha": "2026-03-30T15:16:37.420Z",
    "userId": 33,
    "createdAt": "2026-03-30T15:16:37.420Z",
    "updatedAt": "2026-03-30T15:16:37.420Z"
  },
  {
    "id": 98,
    "descripcion": "Mi playlist de la semana",
    "fecha": "2026-05-11T15:16:37.420Z",
    "userId": 29,
    "createdAt": "2026-05-11T15:16:37.420Z",
    "updatedAt": "2026-05-11T15:16:37.420Z"
  },
  {
    "id": 99,
    "descripcion": "Paseo en bicicleta por la costa",
    "fecha": "2026-05-22T15:16:37.420Z",
    "userId": 18,
    "createdAt": "2026-05-22T15:16:37.420Z",
    "updatedAt": "2026-05-22T15:16:37.420Z"
  },
  {
    "id": 100,
    "descripcion": "Nueva receta de ensalada",
    "fecha": "2026-04-20T15:16:37.420Z",
    "userId": 27,
    "createdAt": "2026-04-20T15:16:37.420Z",
    "updatedAt": "2026-04-20T15:16:37.420Z"
  }
]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
