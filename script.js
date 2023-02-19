// დავალება 1
// 1. შევქმნათ მარტივი input და button
// 2. ინფუთში ჩავწეროთ სახელები, შევინახოთ სიის სახით
// 3. დუბლირებები უნდა გამოვრიცხოთ
// 4. დავლოგოთ ელემენტები.

// ! გამოვიყენოთ set მონაცემთა სტრუქტურა.\

const form = document.getElementById("form");
const setArr = new Set();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  setArr.add(form.text.value);
  console.log(setArr);
});

// დავალება 2
// გვაქვს მოცემული მონაცემთა სტრუქტურა
const posts = [
  {
    id: 1,
    title: "my post 1",
    description: "my post 1",
  },
  {
    id: 2,
    title: "my post 3",
    description: "my post 2",
  },
  {
    id: 3,
    title: "my post 3",
    description: "my post 3",
  },
];

// 1. HTML დოკუმენტში დაბეჭდეთ სიის ყველა ელემენტი შემდეგი მარკაპით
// <h1>title</h1
// <p>description</>
// <button>delete</button>

// 2.button ღილაკის კლიკზე, წაშალეთ ელემენტი სიიდან და განაახლეთ
// ინტერფეისზე.

for (let i in posts) {
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  h1.innerText = posts[i].title;
  h1.setAttribute("class", posts[i].title);
  p.innerText = posts[i].description;
  document.body.appendChild(h1);
  document.body.appendChild(p);
  const deleteBut = document.createElement("button");
  deleteBut.innerText = "delete";
  document.body.appendChild(deleteBut);
  deleteBut.addEventListener("click", () => {
    document.body.removeChild(h1);
    document.body.removeChild(p);
    document.body.removeChild(deleteBut);
  });
}

// Render each post as an HTML element and attach it to the postList element

// დავალება 3
const posts2 = [
  {
    id: 1,
    title: "my post 1",
    description: "my post 1",
  },
  {
    id: 2,
    title: "my post 3",
    description: "my post 2",
  },
  {
    id: 3,
    title: "my post 3",
    description: "my post 3",
  },
];

// 1. HTML დოკუმენტში დაბეჭდეთ სიის ყველა ელემენტი შემდეგი მარკაპით
// <h1>title</h1
// <input value="<description>"/>
// <button>delete</button>
// 2. მომხმარებელს უნდა შეეძლოს პოსტის description ის შეცვლა
// ინფუთის შეცვლის დროს (როცა წერას დაამთვრებს) შესაბამისი პოსტის description
// მნიშვნელობა სიაში განაახლეთ map მეთოდის დახმარებით
// 3. განახლებული სია დალოგეთ კონსოლში

for (let i in posts2) {
  const h1 = document.createElement("h1");
  const input = document.createElement("input");
  h1.innerText = posts2[i].title;
  input.value = posts2[i].description;
  document.body.appendChild(h1);
  document.body.appendChild(input);
  const deleteBut = document.createElement("button");
  deleteBut.innerText = "delete";
  document.body.appendChild(deleteBut);
  deleteBut.addEventListener("click", () => {
    document.body.removeChild(h1);
    document.body.removeChild(input);
    document.body.removeChild(deleteBut);
  });
  input.addEventListener("change", (e) => {
    const updatedPosts2 = [...posts2];
    updatedPosts2[i] = { ...posts2[i], description: e.target.value };
    console.log(updatedPosts2);
  });
}
