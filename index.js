const itemsList = [
  {
    id: "1",
    name: `The Sad Onion`,
    description: `+0,7 Слёзы`,
    type: "Пассивный",
    pool: "Treasure Room, Crane Game, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/0/0d/001collectibles.png/revision/latest/scale-to-width-down/64?cb=20170116101246&path-prefix=ru",
  },
  {
    id: "2",
    name: `The Inner Eye`,
    description: `Тройной выстрел.

Добавляет третий глаз, стрельба ведется из всех глаз одновременно.

x0,51 Множитель скорострельности`,
    type: "Пассивный",
    pool: "Treasure Room, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/f/f5/002collectibles.png/revision/latest/scale-to-width-down/48?cb=20170116101153&path-prefix=ru",
  },
  {
    id: "3",
    name: `Spoon Bender`,
    description: `Выстрелы самонаводятся.`,
    type: "Пассивный",
    pool: "Treasure Room, Crane Game, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/1/1d/003collectibles.png/revision/latest/scale-to-width-down/48?cb=20170116101259&path-prefix=ru",
  },
  {
    id: "4",
    name: `Cricket's Head`,
    description: `+0,5 Урон
x1,5 Множитель урона
Множители урона от Cricket's Head, Magic Mushroom и The Book of Belial + Blood of the Martyr не складываются между собой.`,
    type: "Пассивный",
    pool: "Treasure Room, Crane Game, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/6/6b/004collectibles.png/revision/latest/scale-to-width-down/48?cb=20191122063613&path-prefix=ru",
  },
  {
    id: "5",
    name: `My Reflection`,
    description: `После некоторой дистанции, выстрелы разворачиваются и летят к стреляющему.

x1,6 Множитель Дальности

+1,5 Плоская Дальность

x1,6 Множитель Скорости Выстрела

+1 Высота полета слёз`,
    type: "Пассивный",
    pool: "Treasure Room, Crane Game, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/c/ce/005collectibles.png/revision/latest/scale-to-width-down/48?cb=20141110205927&path-prefix=ru",
  },
  {
    id: "6",
    name: `Number One`,
    description: `Повышает скорострельность, но сильно уменьшает дальность.

+1,5 Слезы

-1,5 Дальность

x0,8 Множитель Дальности

+0,76 Высота полета слёз
`,
    type: "Пассивный",
    pool: "Treasure Room, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/a/a4/006collectibles.png/revision/latest/scale-to-width-down/48?cb=20141110210006&path-prefix=ru",
  },
  {
    id: "7",
    name: `Blood of the Martyr`,
    description: `+1 Урон`,
    type: "Пассивный",
    pool: "Treasure Room, Angel Room, Wooden Chest, Greed Treasure Room, Greed Angel Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/2/28/007collectibles.png/revision/latest/scale-to-width-down/48?cb=20141110211716&path-prefix=ru",
  },
  {
    id: "8",
    name: `Brother Bobby`,
    description: `Фамильяр, который следует за персонажем.

Стреляет с уроном 3,5 и скорострельностью 2 слезы в секунду.`,
    type: "Пассивный",
    pool: "Treasure Room, Devil Room, Baby Shop, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/b/bd/008collectibles.png/revision/latest/scale-to-width-down/48?cb=20211209152234&path-prefix=ru",
  },
  {
    id: "9",
    name: `Skatole`,
    description: `Вражеские мухи становятся медленными или пассивными, не наносят контактный урон, но все еще могут наносить урон слезами.

Единственный предмет в награду у Наперсточника`,
    type: "Пассивный",
    pool: "Отсутствует",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/0/0a/009collectibles.png/revision/latest/scale-to-width-down/48?cb=20210803124447&path-prefix=ru",
  },
  {
    id: "10",
    name: `Halo of Flies`,
    description: `Дает 2 орбитальные мухи, которые защищают от вражеских слёз и могут убивать мелких вражеских мух.
Когда орбиталов этой категории больше 3, вместо добавления четвертого будет удалена одна из орбитальных мух. Правило не распространяется на любые другие орбиталы.`,
    type: "Пассивный",
    pool: "Treasure Room, Key Master, Baby Shop, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/2/28/010collectibles.png/revision/latest/scale-to-width-down/48?cb=20210803124822&path-prefix=ru",
  },
  {
    id: "11",
    name: `1UP!`,
    description: `

При смерти воскрешает в предыдущей комнате с полностью восстановленным здоровьем. Если красных сердец не было, воскрешает с половиной синего.

Часть превращения Fun Guy
`,
    type: "Пассивный",
    pool: "Secret Room, Greed Shop, Greed Secret Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/e/e0/011collectibles.png/revision/latest/scale-to-width-down/48?cb=20141110210704&path-prefix=ru",
  },

  {
    id: "12",
    name: `Magic Mushroom`,
    description: `


+1 HP

Полностью восстанавливает здоровье.

+0,3 Скорость

+0,3 Урон

x1,5 Множитель урона

+1,5 Дальность

+0,5 Высота полета слёз

Увеличивает размер персонажа. Хитбокс не может стать больше стандартного.

Может выпасть при разрушении грибов с шансом 0,5%

Часть превращения Fun Guy

Часть превращения Stompy
`,
    type: "Пассивный",
    pool: "Treasure Room, Ultra Secret Room, Greed Boss Item Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/b/bb/012collectibles.png/revision/latest/scale-to-width-down/48?cb=20141111191121&path-prefix=ru",
  },

  {
    id: "13",
    name: `The Virus`,
    description: `


+0,2 Скорость

При контакте с врагами персонаж наносит 24 урона дважды в секунду и также отравляет их.

Отравление 6 раз наносит урон, который зависит от количества красных контейнеров и костяных сердец.

Это отравление игнорирует сопротивление боссов к статусам.

Может выпасть с Похоти

Часть превращения Spun

`,
    type: "Пассивный",
    pool: "Treasure Room, Devil Beggar, Ultra Secret Room, Greed Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/2/2a/013collectibles.png/revision/latest/scale-to-width-down/48?cb=20141111080247&path-prefix=ru",
  },

  {
    id: "14",
    name: `Roid Rage`,
    description: `


+0,3 Скорость

+1,5 Дальность

+0,5 Высота полета слёз

Часть превращения Spun

`,
    type: "Пассивный",
    pool: "Treasure Room, Boss, Devil Beggar, Greed Boss Item Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/e/eb/14collectibles.png/revision/latest/scale-to-width-down/48?cb=20141111071437&path-prefix=ru",
  },
  {
    id: "15",
    name: `<3`,
    description: `



+1 HP

Полностью восстанавливает здоровье.

Один из 12 предметов, которые можно получить от босса Бамбино, если дать ему 12 пенни

Может выпасть с Чревоугодия

`,
    type: "Пассивный",
    pool: "Treasure Room, Ultra Secret Room, Greed Boss Item Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/5/56/15collectibles.png/revision/latest/scale-to-width-down/48?cb=20190724033217&path-prefix=ru",
  },
  {
    id: "16",
    name: `Raw Liver`,
    description: `


+2 HP

Полностью восстанавливает здоровье.


`,
    type: "Пассивный",
    pool: "Secret Room, Greed Boss Item Room, Greed Secret Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/d/d9/16collectibles.png/revision/latest/scale-to-width-down/48?cb=20141111071503&path-prefix=ru",
  },
  {
    id: "17",
    name: `Skeleton Key`,
    description: `
+99 ключей.
`,
    type: "Пассивный",
    pool: "Treasure Room, Secret Room, Greed Secret Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/a/a3/17collectibles.png/revision/latest/scale-to-width-down/48?cb=20191124045103&path-prefix=ru",
  },
  {
    id: "18",
    name: `A Dollar`,
    description: `
+100 монет.

Можно получить при игре на слот-машине
`,
    type: "Пассивный",
    pool: "Без пула",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/5/55/18collectibles.png/revision/latest/scale-to-width-down/48?cb=20141111071615&path-prefix=ru",
  },
  {
    id: "19",
    name: `Boom!`,
    description: `
+10 бомб
`,
    type: "Пассивный",
    pool: "Treasure Room",
    category: "Rebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/6/66/19collectibles.png/revision/latest/scale-to-width-down/48?cb=20141111073606&path-prefix=ru",
  },
  {
    id: "20",
    name: `Transcendence`,
    description: `


Полет.

Тело становится невидимым.

`,
    type: "Пассивный",
    pool: "Secret Room, Greed Secret Room",
    category: "NOTNOITSRebirth Item",
    imgUrl:
      "https://static.wikia.nocookie.net/bindingofisaac/images/7/7c/20collectibles.png/revision/latest/scale-to-width-down/48?cb=20141111071709&path-prefix=ru",
  },
];

const itemsListNode = document.querySelector(".items");
const sideContent = document.querySelector(".side-content");

const modalDiv = document.querySelector(".modal");
const overlayDiv = document.querySelector(".overlay");

const closeBtn = document.getElementById("close");

const inputSearch = document.getElementById("search");

inputSearch.addEventListener("change", function (event) {
  console.log(event.target.value);
  const searchString = event.target.value.toLowerCase();

  const searchedItems = itemsList.filter( (item) => {
    return item.description.toLowerCase().includes(searchString) ||
    item.name.toLowerCase().includes(searchString)
});
  render(searchedItems);
});

function render(list) {
  itemsListNode.innerHTML = "";
  const categoryObj = {}
  list.forEach(function (listItem) {
    categoryObj[listItem.category] = list.filter(function(node) {
      return node.category === listItem.category;
    })
  })
    console.log(categoryObj)

    renderHeadersMenu(Object.keys(categoryObj));

    for(category in categoryObj) {
      const section = document.createElement("section");
      const heading = document.createElement("h2")
      heading.innerText = category.toUpperCase();
      const underLine = document.createElement("hr");

      const itemsContainerDiv = document.createElement('div');
      itemsContainerDiv.classList.add('items-container');
      section.id = category;
      section.appendChild(heading);
      section.appendChild(underLine);
      
      categoryObj[category].forEach((item) => {
        const elementDiv = document.createElement("div");
        const img = document.createElement("img");
        img.src = item.imgUrl;
        img.style.width = " 34px";
        img.style.height = "34px";
        img.role = "button";
        elementDiv.classList.add("item");
        elementDiv.id = item.id;
        elementDiv.appendChild(img);
        itemsContainerDiv.appendChild(elementDiv);
      });
      section.appendChild(itemsContainerDiv);
      itemsListNode.appendChild(section);
    }

    
}

  // sectionList = [ 'sectionName1', 'sectionName2' ]
  function renderHeadersMenu (sectionsList) {
    const navigation = document.querySelector('.navigation');

    for (let index = 0; index < sectionsList.length; index++) {
      const section = sectionsList[index];
      const li = document.createElement('li');
      const link = document.createElement('a');
      link.href = '#' + section;
      link.innerHTML = section;
      
      li.appendChild(link);
      navigation.appendChild(li);
    }}

function toggleModal() {
  modalDiv.classList.toggle("active");
  overlayDiv.classList.toggle("active");
}
document.addEventListener("DOMContentLoaded", function () {
  render(itemsList)
});

itemsListNode.addEventListener("click", function (event) {
  const hoverItemId = event.target.id || event.target.parentElement.id;
  if (!hoverItemId) return;
  const guiltyItem = itemsList.find((item) => item.id === hoverItemId);

  modalDiv.innerHTML = ` <p>${guiltyItem.name}</p>
                          <p class = "text"> ${guiltyItem.description}</p>
                          <p>${guiltyItem.type}</p>`;

  toggleModal();
});

closeBtn.addEventListener("click", () => {
  toggleModal();
});

itemsListNode.addEventListener("mouseover", function (event) {
  const hoverItemId = event.target.id || event.target.parentElement.id;
  if (!hoverItemId) return;

  const guiltyItem = itemsList.find((item) => item.id === hoverItemId);

  const template = `<p class = "name"> ${guiltyItem.name} </p>
  <p class = "description"> ${guiltyItem.description} </p>
  <p> ID: ${guiltyItem.id} </p>`;

  sideContent.innerHTML = template;
});
