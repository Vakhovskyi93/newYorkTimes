
// пользователь выбирает категорию статей и получает их/ все или какие-то конкретные/ популярные или популярные на фб/
// получить статьи за сегодня + из категории...
// получить статьи из фб + из категории...
// получить самые просматриваемые статьи за 7дней + из категории...
// поиск статей по году и месяцу?

// получить все статьи
// отобрать те, которые выбрал пользователь
// вывести в разметку        



let appId = 'fc56634f-d6de-4136-bc93-41579ce5c37e';
let appKey = 'qs6THAQQGG1my522N1G4kwfxY95VJeqA';
let appSecret = '4sC0sq7HNuoaUPV0';
let year = 2010;
let month = 10;


// get articles 

const server = new addToHtml;
    server.pullData()
  
    

 function getArt( time, category) {
     
    server.getSortNews(appKey, time, category)




 }   
        
    // .then(data => {
    //     console.log(data)
    //     return data})
    // .then(data => {
    //     return data.forEach(element => {
    //         console.log(element)
    //     });
    //         })
    // //.then(comments => console.log(comments))
        
    // .catch(err => {
    //     console.log(err)
    // })


// let adder;
// fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${appKey}`,{
//     method: 'GET',

// })
//     .then(res => {
//         console.log(res.status);
//         console.log(res.headers.get('Content-type'));
        
//         return res.json()
        
//     })
//     .then(data => {
//         // data.results.forEach(element => {
//         //     console.log(element)
//         // });
//         new addToHtml(data)
//         return data
       
//         })
         
    
//     .catch(err => {
//         console.log(err)
//     })

 
// get categories

//  fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${appKey}`,{
//     method: 'GET',

// })
//     .then(res => {
        
//         return res.json()
        
//     })
//     .then(data => {
//                getCategories(data)

//         })
//         .catch(err => {
//             console.log(err)
//         })


// const server = new JsonPlaseholder;
//     server.getPosts()
//             .then(data => {
//                 console.log(data)
//                 return data})
//             .then(data => {
//                 return data.forEach(element => {
//                     console.log(element)
//                 });
//                  })
//             //.then(comments => console.log(comments))
             
//             .catch(err => {
//                 console.log(err)
//             })