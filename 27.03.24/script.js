// https://jsonplaceholder.typicode.com/users/

// async function userApi(){
//     const url = "https://jsonplaceholder.typicode.com/users/"
//     try{
//         const response = await fetch (url);
//         if(!response.ok) {
//             throw new Error('Ошибка при получении данных')
//         }
//         const data = await response.json();
//         // console.log(data);
//         data.forEach((item) => {
//             console.log(item)
//             const userCard = document.createElement('div');
//             userCard.classList.add('user_card')

//             const userImage = document.createElement('img')
//             userImage.classList.add('user_img')
//             const userName = document.createElement('p')
//             userName.textContent = 'имя:'

//             const nicName = document.createElement('p')
//             nicName.textContent = 'username:'

//             const email = document.createElement('p')
//             email.textContent = 'email:'

//             const adress = document.createElement('p')
//             adress.textContent = 'adress:'

//             userCard.append(userImage, nicName, email, adress)
            
//             const userContainer = document.querySelector('.user_container')

//             userContainer.append(userCard)

//         })

        


//     }catch(error) {
//         console.error('Ошибка при получении:', error)

//     }
// }
// userApi();


let num = 1;
while (num<=5) {
    console.log(num);
    num++;
}


