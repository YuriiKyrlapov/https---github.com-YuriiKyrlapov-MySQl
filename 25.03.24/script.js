// Функция обращение к API 
async function fetchRandomUsers() {
    const response = await fetch('https://randomuser.me/api/?results=10');
    const data = await response.json();
    return data.results;
  }
  
  // Функция для отображения данных на странице


  async function displayRandomUsers() {
    const users = await fetchRandomUsers();
    const contactsList = document.getElementById('contacts');
    contactsList.innerHTML = ''; // Очистка списка перед добавлением новых пользователей
    users.forEach(user => {
      const li = document.createElement('li');
      li.classList.add('contact');
      li.innerHTML = `
        <p>Name: ${user.name.first} ${user.name.last}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
      `;
      contactsList.appendChild(li);
    });
  }
  
  // Вызов функции для отображения данных при загрузке 
  displayRandomUsers();
  
  // Обработчик события для фильтрации контактов по тексту
  document.getElementById('search').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const contacts = document.querySelectorAll('.contact');
    contacts.forEach(contact => {
      const name = contact.querySelector('p:first-child').textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        contact.style.display = 'block';
      } else {
        contact.style.display = 'none';
      }
    });
  });
  