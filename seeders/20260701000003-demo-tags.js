'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', [
  {
    "id": 1,
    "nombre": "hermoso",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 2,
    "nombre": "campo",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 3,
    "nombre": "ciudad",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 4,
    "nombre": "playa",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 5,
    "nombre": "arboles",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 6,
    "nombre": "paisajes",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 7,
    "nombre": "aestetic",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 8,
    "nombre": "viaje",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 9,
    "nombre": "comida",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 10,
    "nombre": "moda",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 11,
    "nombre": "fitness",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 12,
    "nombre": "musica",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 13,
    "nombre": "arte",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 14,
    "nombre": "tecnologia",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 15,
    "nombre": "mascotas",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 16,
    "nombre": "familia",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 17,
    "nombre": "nocturno",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 18,
    "nombre": "deporte",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 19,
    "nombre": "lectura",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  },
  {
    "id": 20,
    "nombre": "cocina",
    "createdAt": "2026-07-01T15:16:37.420Z",
    "updatedAt": "2026-07-01T15:16:37.420Z"
  }
]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
