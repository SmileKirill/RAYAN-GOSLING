document.addEventListener('DOMContentLoaded', () => {
console.log("СТАРТ ОТЛАДКИ");
const skills = ["HTML", "CSS", "JavaScript", "GitHub", "LocalStorage"];
const list = document.getElementById('skills-list');
console.log("Переменная list сейчас:", list);
if (list) {
renderSkills(skills, list);
}
console.log("КОНЕЦ ОТЛАДКИ");
});


function renderSkills(data, container) {
container.innerHTML = '';
data.forEach(skill => {
const li = document.createElement('li');
li.textContent = skill;
безопасности
container.appendChild(li);
console.log("Итерация цикла для элемента: " + skill);
});
}