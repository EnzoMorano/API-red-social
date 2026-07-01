const fs = require("fs");
const path = require("path");

const SEEDERS_DIR = __dirname;
const TS = (n) => `2026070100000${n}`;

const firstNames = [
  "Sofia", "Mateo", "Valentina", "Santiago", "Camila", "Benjamin", "Isabella",
  "Sebastian", "Luciana", "Facundo", "Agustina", "Nicolas", "Martina", "Diego",
  "Abigail", "Simon", "Julieta", "Tomas", "Renata", "Emilio", "Lara", "Maximo",
  "Bruno", "Malena", "Lorenzo", "Clara", "Felipe", "Catalina", "Ignacio", "Andrea",
  "Thiago", "Florencia", "Joaquin", "Antonella", "Lautaro", "Candela", "Franco",
  "Lourdes", "Bautista", "Milagros", "Geronimo", "Sol", "Guillermo", "Jimena",
  "Esteban", "Noelia", "Ramiro", "Carolina", "Alan", "Daniela",
];

const lastNames = [
  "Gonzalez", "Rodriguez", "Lopez", "Martinez", "Diaz", "Fernandez", "Torres",
  "Ramirez", "Flores", "Acosta", "Medina", "Castillo", "Rojas", "Ortiz", "Pereyra",
  "Molina", "Suarez", "Navarro", "Coronel", "Rios", "Paz", "Vega", "Campos",
  "Herrera", "Santos", "Vargas", "Caceres", "Arias", "Roldan", "Sosa", "Benitez",
  "Mendez", "Godoy", "Peralta", "Lucero", "Gimenez", "Moreno", "Vera", "Mansilla",
  "Rivas", "Farias", "Silva", "Cordoba", "Bustos", "Leiva", "Duarte", "Carrizo",
  "Cuello", "Rey", "Luna",
];

const tagNames = [
  "hermoso", "campo", "ciudad", "playa", "arboles", "paisajes", "aestetic",
  "viaje", "comida", "moda", "fitness", "musica", "arte", "tecnologia",
  "mascotas", "familia", "nocturno", "deporte", "lectura", "cocina",
];

const postDescriptions = [
  "Amanecer en la montaña, una experiencia única",
  "Mi rincón favorito de la ciudad",
  "El mejor café de especialidad que probé",
  "Atardecer en la costa, colores increíbles",
  "Nueva receta vegana que salió perfecta",
  "Entrenamiento de hoy: pierna completa",
  "Mi gato durmiendo en posiciones imposibles",
  "Concierto anoche, vibras increíbles",
  "Mi rincón de lectura favorito",
  "Probando un nuevo restaurante tailandés",
  "Caminata por el bosque, paz total",
  "Mi outfit del día",
  "Atardecer desde mi terraza",
  "Nuevo proyecto personal emocionante",
  "Día de playa con amigos",
  "Mi planta que no para de crecer",
  "Receta de pasta casera paso a paso",
  "Mi lugar feliz",
  "Reflexiones de un domingo lluvioso",
  "Nuevo libro que me tiene atrapado",
  "Desayuno saludable para empezar el día",
  "Ruta de fin de semana por la montaña",
  "Mi soundtrack de la semana",
  "Arte callejero que me encontré hoy",
  "Cena romántica preparada en casa",
  "Mi nueva rutina de skincare",
  "Paseo en bici al atardecer",
  "El postre más rico del mundo",
  "Domingo de películas y mantita",
  "Nuevo espacio de trabajo en casa",
  "Mi primer tatuaje, dolió pero valió la pena",
  "Finde escapada a las sierras",
  "Clase de yoga al aire libre",
  "Mi colección de vinilos",
  "Noche de juegos con amigos",
  "Cosecha de mi huerta urbana",
  "Atardecer desde el avión",
  "Mi café favorito de especialidad",
  "Nuevo podcast que recomiendo mucho",
  "Mi rincón de plantas",
  "Día de mercado de pulgas",
  "Cena de Navidad en familia",
  "Runner: 10K completados hoy",
  "Mi nueva cámara analógica",
  "Tarde de lluvia y libro",
  "Improvisando cena con lo que había en casa",
  "Paseo dominical en bici",
  "Mi nueva playlist para entrenar",
  "El mural más lindo de la ciudad",
  "Domingo de pancakes",
  "Mi gato es fotogénico",
  "Noche de vinos y charlas",
  "Mi nuevo emprendimiento",
  "Día de campo con la familia",
  "Receta de smoothie energético",
  "Mi lugar secreto en la ciudad",
  "Aventura de fin de semana",
  "Reseña del último libro que leí",
  "Mi outfit favorito del otoño",
  "Día de spa en casa",
  "Nuevo álbum que no paro de escuchar",
  "Mi desayuno fitness",
  "Atardecer en el lago",
  "Encuentro de arte local",
  "Mi nueva planta suculenta",
  "Rutina de ejercicios en casa",
  "Picnic en el parque",
  "Mi serie favorita del momento",
  "Día de playa y libro",
  "Nuevo café del barrio",
  "Mi huerta en primavera",
  "Noche de pizza casera",
  "Paseo en kayak",
  "Mi colección de tazas",
  "Día de lluvia y música",
  "Nuevo curso que estoy haciendo",
  "Brunch con amigas",
  "Mi rutina matutina",
  "Atardecer en el puerto",
  "Cena al aire libre",
  "Mi nueva planta de lavanda",
  "Finde de desconexión total",
  "Receta de pan casero",
  "Mi lugar favorito para leer",
  "Día de surf",
  "Noche de estrellas",
  "Mi nuevo proyecto creativo",
  "Caminata al amanecer",
  "Receta de postre saludable",
  "Mi salsa favorita para pasta",
  "Día de piscina",
  "Mi álbum de fotos favoritas",
  "Nuevo hobby: cerámica",
  "Cena express entre semana",
  "Mi vista favorita de la ciudad",
  "Rutina de cuidado facial",
  "Domingo de siesta",
  "Mi playlist de la semana",
  "Paseo en bicicleta por la costa",
  "Nueva receta de ensalada",
  "Mi película favorita del año",
  "Día de playa y surf",
];

const imgUrls = [
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1470071459604-7b8ec44ffd7a?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1518173946687-a36f968f7ecc?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1504333638930-c8787321eee0?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1447750250834-d8f8f6d4b7b0?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1504198266287-1659872f6590?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1505144808419-1957a94ca61e?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1500530855697-3b3e2f96c8b0?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1504198458649-0f5b3a2f3d3a?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1511984799969-4b1a34d6b0c5?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1470071459604-7b8ec44ffd7a?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1518173946687-a36f968f7ecc?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800",
];

const commentsTexts = [
  "Qué hermoso lugar!",
  "Me encanta! 😍",
  "Increíble foto!",
  "Qué envidia!",
  "Wow, espectacular!",
  "Comparto totalmente",
  "Me hace falta una escapada así",
  "Hermoso!",
  "Qué genial!",
  "Me encantaría estar ahí",
  "Precioso!",
  "Qué lindo momento",
  "Gracias por compartir!",
  "Espectacular!",
  "Qué buena idea!",
  "Lo voy a probar!",
  "Me encanta!",
  "Qué talento!",
  "Increíble!",
  "Qué paz transmite",
  "Que lindo!",
  "Excelente!",
  "Me too!",
  "Qué buena onda!",
  "Comparto",
  "Totalmente de acuerdo",
  "Qué hermoso momento",
  "Genial!",
  "Me encantó!",
  "Que lindo finde!",
];

// Helper
function rand(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
function pick(arr) { return arr[rand(0, arr.length - 1)]; }
function dateStr(y, m, d) { return `${y}-${String(m).padStart(2,"0")}-${String(d).padStart(2,"0")}`; }
function randomDate(start, end) { return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())); }

// ==============================
// 1. USERS (50)
// ==============================
const usedNicknames = new Set();
const users = [];
for (let i = 0; i < 50; i++) {
  const fn = firstNames[i];
  const ln = lastNames[i];
  let nickname = fn.toLowerCase();
  while (usedNicknames.has(nickname)) {
    nickname = fn.toLowerCase() + rand(10, 9999);
  }
  usedNicknames.add(nickname);
  users.push({
    id: i + 1,
    nickname,
    nombre: fn,
    apellido: ln,
    fecha_nacimiento: dateStr(rand(1980, 2003), rand(1, 12), rand(1, 28)),
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
fs.writeFileSync(path.join(SEEDERS_DIR, `${TS(1)}-demo-users.js`), `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', ${JSON.stringify(users, null, 2)});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
`);
console.log("1/7 Users OK");

// ==============================
// 2. FOLLOWERS (cada usuario sigue a 2-5 otros usuarios, evitando duplicados)
// ==============================
const followers = [];
for (let i = 1; i <= 50; i++) {
  const targets = [];
  const numFollows = rand(2, 5);
  for (let j = 0; j < numFollows; j++) {
    let target = rand(1, 50);
    let attempts = 0;
    while ((target === i || targets.includes(target)) && attempts < 50) {
      target = target >= 50 ? 1 : target + 1;
      attempts++;
    }
    if (target !== i && !targets.includes(target)) {
      targets.push(target);
      followers.push({
        seguidorId: i,
        seguidoId: target,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
  }
}
fs.writeFileSync(path.join(SEEDERS_DIR, `${TS(2)}-demo-followers.js`), `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Followers', ${JSON.stringify(followers, null, 2)});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Followers', null, {});
  },
};
`);
console.log("2/7 Followers OK");

// ==============================
// 3. TAGS (20)
// ==============================
const tags = tagNames.map((n, i) => ({ id: i + 1, nombre: n, createdAt: new Date(), updatedAt: new Date() }));
fs.writeFileSync(path.join(SEEDERS_DIR, `${TS(3)}-demo-tags.js`), `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Tags', ${JSON.stringify(tags, null, 2)});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Tags', null, {});
  },
};
`);
console.log("3/7 Tags OK");

// ==============================
// 4. POSTS (100)
// ==============================
const posts = [];
for (let i = 0; i < 100; i++) {
  const daysAgo = rand(0, 180);
  const postDate = new Date();
  postDate.setDate(postDate.getDate() - daysAgo);
  posts.push({
    id: i + 1,
    descripcion: postDescriptions[i],
    fecha: postDate,
    userId: rand(1, 50),
    createdAt: postDate,
    updatedAt: postDate,
  });
}
fs.writeFileSync(path.join(SEEDERS_DIR, `${TS(4)}-demo-posts.js`), `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Posts', ${JSON.stringify(posts, null, 2)});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Posts', null, {});
  },
};
`);
console.log("4/7 Posts OK");

// ==============================
// 5. POST_IMAGES (~40 imagenes en ~25 posts)
// ==============================
const postImages = [];
const postsWithImages = new Set();
for (let i = 0; i < 40; i++) {
  let postId = rand(1, 100);
  postsWithImages.add(postId);
  postImages.push({
    postId,
    URL: imgUrls[i % imgUrls.length],
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
fs.writeFileSync(path.join(SEEDERS_DIR, `${TS(5)}-demo-post_images.js`), `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Post_Images', ${JSON.stringify(postImages, null, 2)});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Post_Images', null, {});
  },
};
`);
console.log(`5/7 Post_Images OK (${postsWithImages.size} posts con imagenes)`);

// ==============================
// 6. POSTTAGS (~200 relaciones, deterministico para evitar duplicados)
// ==============================
const postTags = [];
for (let postId = 1; postId <= 100; postId++) {
  const numTags = rand(1, 4);
  const usedTags = new Set();
  for (let j = 0; j < numTags; j++) {
    let tagId = rand(1, 20);
    let attempts = 0;
    while (usedTags.has(tagId) && attempts < 20) {
      tagId = tagId >= 20 ? 1 : tagId + 1;
      attempts++;
    }
    usedTags.add(tagId);
    postTags.push({
      postId,
      tagId,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }
}
fs.writeFileSync(path.join(SEEDERS_DIR, `${TS(6)}-demo-posttags.js`), `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('PostTags', ${JSON.stringify(postTags, null, 2)});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('PostTags', null, {});
  },
};
`);
console.log("6/7 PostTags OK");

// ==============================
// 7. COMMENTS (~200, mezclando visible/no visible, recientes/antiguos)
// ==============================
const comments = [];
for (let i = 0; i < 200; i++) {
  const isVisible = Math.random() > 0.15;
  const isOld = Math.random() > 0.6;
  const commentDate = isOld
    ? randomDate(new Date("2025-01-01"), new Date("2025-06-01"))
    : randomDate(new Date("2026-01-01"), new Date());
  comments.push({
    descripcion: pick(commentsTexts) + (i % 3 === 0 ? " " + pick(postDescriptions).slice(0, 30) : ""),
    visible: isVisible,
    fecha: commentDate,
    userId: rand(1, 50),
    postId: rand(1, 100),
    createdAt: commentDate,
    updatedAt: commentDate,
  });
}
fs.writeFileSync(path.join(SEEDERS_DIR, `${TS(7)}-demo-comments.js`), `'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Comments', ${JSON.stringify(comments, null, 2)});
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
`);
console.log("7/7 Comments OK");

console.log("\nTodos los seeders generados correctamente!");
console.log("Ejecutá: npm run seed");
