'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
  {
    "id": 1,
    "nickname": "sofia",
    "nombre": "Sofia",
    "apellido": "Gonzalez",
    "fecha_nacimiento": "1984-07-04",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 2,
    "nickname": "mateo",
    "nombre": "Mateo",
    "apellido": "Rodriguez",
    "fecha_nacimiento": "1989-08-22",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 3,
    "nickname": "valentina",
    "nombre": "Valentina",
    "apellido": "Lopez",
    "fecha_nacimiento": "1991-03-27",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 4,
    "nickname": "santiago",
    "nombre": "Santiago",
    "apellido": "Martinez",
    "fecha_nacimiento": "1988-12-18",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 5,
    "nickname": "camila",
    "nombre": "Camila",
    "apellido": "Diaz",
    "fecha_nacimiento": "1992-04-03",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 6,
    "nickname": "benjamin",
    "nombre": "Benjamin",
    "apellido": "Fernandez",
    "fecha_nacimiento": "1996-11-02",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 7,
    "nickname": "isabella",
    "nombre": "Isabella",
    "apellido": "Torres",
    "fecha_nacimiento": "1986-09-13",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 8,
    "nickname": "sebastian",
    "nombre": "Sebastian",
    "apellido": "Ramirez",
    "fecha_nacimiento": "1996-12-08",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 9,
    "nickname": "luciana",
    "nombre": "Luciana",
    "apellido": "Flores",
    "fecha_nacimiento": "2000-02-13",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 10,
    "nickname": "facundo",
    "nombre": "Facundo",
    "apellido": "Acosta",
    "fecha_nacimiento": "1987-10-11",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 11,
    "nickname": "agustina",
    "nombre": "Agustina",
    "apellido": "Medina",
    "fecha_nacimiento": "2001-01-24",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 12,
    "nickname": "nicolas",
    "nombre": "Nicolas",
    "apellido": "Castillo",
    "fecha_nacimiento": "1992-05-10",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 13,
    "nickname": "martina",
    "nombre": "Martina",
    "apellido": "Rojas",
    "fecha_nacimiento": "1995-01-04",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 14,
    "nickname": "diego",
    "nombre": "Diego",
    "apellido": "Ortiz",
    "fecha_nacimiento": "2001-03-16",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 15,
    "nickname": "abigail",
    "nombre": "Abigail",
    "apellido": "Pereyra",
    "fecha_nacimiento": "2000-09-09",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 16,
    "nickname": "simon",
    "nombre": "Simon",
    "apellido": "Molina",
    "fecha_nacimiento": "1988-07-18",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 17,
    "nickname": "julieta",
    "nombre": "Julieta",
    "apellido": "Suarez",
    "fecha_nacimiento": "2001-03-26",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 18,
    "nickname": "tomas",
    "nombre": "Tomas",
    "apellido": "Navarro",
    "fecha_nacimiento": "1993-03-25",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 19,
    "nickname": "renata",
    "nombre": "Renata",
    "apellido": "Coronel",
    "fecha_nacimiento": "1996-09-13",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 20,
    "nickname": "emilio",
    "nombre": "Emilio",
    "apellido": "Rios",
    "fecha_nacimiento": "1986-01-01",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 21,
    "nickname": "lara",
    "nombre": "Lara",
    "apellido": "Paz",
    "fecha_nacimiento": "1994-05-16",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 22,
    "nickname": "maximo",
    "nombre": "Maximo",
    "apellido": "Vega",
    "fecha_nacimiento": "1987-03-07",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 23,
    "nickname": "bruno",
    "nombre": "Bruno",
    "apellido": "Campos",
    "fecha_nacimiento": "1997-09-26",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 24,
    "nickname": "malena",
    "nombre": "Malena",
    "apellido": "Herrera",
    "fecha_nacimiento": "1998-11-12",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 25,
    "nickname": "lorenzo",
    "nombre": "Lorenzo",
    "apellido": "Santos",
    "fecha_nacimiento": "1997-12-26",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 26,
    "nickname": "clara",
    "nombre": "Clara",
    "apellido": "Vargas",
    "fecha_nacimiento": "1983-03-01",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 27,
    "nickname": "felipe",
    "nombre": "Felipe",
    "apellido": "Caceres",
    "fecha_nacimiento": "1990-08-26",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 28,
    "nickname": "catalina",
    "nombre": "Catalina",
    "apellido": "Arias",
    "fecha_nacimiento": "1983-09-24",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 29,
    "nickname": "ignacio",
    "nombre": "Ignacio",
    "apellido": "Roldan",
    "fecha_nacimiento": "1984-01-10",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 30,
    "nickname": "andrea",
    "nombre": "Andrea",
    "apellido": "Sosa",
    "fecha_nacimiento": "1986-07-25",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 31,
    "nickname": "thiago",
    "nombre": "Thiago",
    "apellido": "Benitez",
    "fecha_nacimiento": "1985-01-09",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 32,
    "nickname": "florencia",
    "nombre": "Florencia",
    "apellido": "Mendez",
    "fecha_nacimiento": "1984-03-03",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 33,
    "nickname": "joaquin",
    "nombre": "Joaquin",
    "apellido": "Godoy",
    "fecha_nacimiento": "2001-09-11",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 34,
    "nickname": "antonella",
    "nombre": "Antonella",
    "apellido": "Peralta",
    "fecha_nacimiento": "2003-07-28",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 35,
    "nickname": "lautaro",
    "nombre": "Lautaro",
    "apellido": "Lucero",
    "fecha_nacimiento": "1981-12-22",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 36,
    "nickname": "candela",
    "nombre": "Candela",
    "apellido": "Gimenez",
    "fecha_nacimiento": "1995-12-21",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 37,
    "nickname": "franco",
    "nombre": "Franco",
    "apellido": "Moreno",
    "fecha_nacimiento": "1982-07-26",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 38,
    "nickname": "lourdes",
    "nombre": "Lourdes",
    "apellido": "Vera",
    "fecha_nacimiento": "1982-05-25",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 39,
    "nickname": "bautista",
    "nombre": "Bautista",
    "apellido": "Mansilla",
    "fecha_nacimiento": "1992-04-13",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 40,
    "nickname": "milagros",
    "nombre": "Milagros",
    "apellido": "Rivas",
    "fecha_nacimiento": "1990-07-25",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 41,
    "nickname": "geronimo",
    "nombre": "Geronimo",
    "apellido": "Farias",
    "fecha_nacimiento": "1987-11-10",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 42,
    "nickname": "sol",
    "nombre": "Sol",
    "apellido": "Silva",
    "fecha_nacimiento": "2001-04-02",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 43,
    "nickname": "guillermo",
    "nombre": "Guillermo",
    "apellido": "Cordoba",
    "fecha_nacimiento": "1990-10-21",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 44,
    "nickname": "jimena",
    "nombre": "Jimena",
    "apellido": "Bustos",
    "fecha_nacimiento": "1999-08-01",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 45,
    "nickname": "esteban",
    "nombre": "Esteban",
    "apellido": "Leiva",
    "fecha_nacimiento": "1995-11-03",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 46,
    "nickname": "noelia",
    "nombre": "Noelia",
    "apellido": "Duarte",
    "fecha_nacimiento": "1982-02-15",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 47,
    "nickname": "ramiro",
    "nombre": "Ramiro",
    "apellido": "Carrizo",
    "fecha_nacimiento": "1983-12-22",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 48,
    "nickname": "carolina",
    "nombre": "Carolina",
    "apellido": "Cuello",
    "fecha_nacimiento": "2001-11-04",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 49,
    "nickname": "alan",
    "nombre": "Alan",
    "apellido": "Rey",
    "fecha_nacimiento": "1995-12-13",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  },
  {
    "id": 50,
    "nickname": "daniela",
    "nombre": "Daniela",
    "apellido": "Luna",
    "fecha_nacimiento": "2002-03-15",
    "createdAt": "2026-07-01T15:16:37.414Z",
    "updatedAt": "2026-07-01T15:16:37.414Z"
  }
]);
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
