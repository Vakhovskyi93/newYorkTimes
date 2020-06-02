// название статьи
// фото
// автор
// дата

 

// let title;
// let subtitle;
// let section;
// let subsection;
// let published_date;
// let articleLink;
// let ingSrc;
// let newsWrap = document.querySelector('.news__wrap');


// function getRes(data) {
//     let title = data.results[2].title;
//     let subtitle = data.results[2].abstract;
//     let section = data.results[2].section;
//     let subsection = data.results[2].subsection;
//     let published_date = data.results[2].published_date;
//     let articleLink = data.results[2].url;
//     let ingSrc = data.results[2].media[0]['media-metadata'][2].url;
//     let autor = 'ggg'

//     console.log(title,section)

//     newsWrap.innerHTML += `
    

    
//                 <div class="col-sm-6 col-md-4">
//                   <div class="thumbnail">
//                          <div class="row  ">
                             
//                             <p class="col-12 text-right">${published_date}</p>
//                         </div>
//                     <p>${subsection}</p>
//                     <img src="${ingSrc}" alt="...">
//                     <div class="caption">
//                         <h3> <strong>${title}</strong></h3>
//                         <p class='text-center'>${subtitle}</p>
//                         <p class='text-center'>${subtitle}</p>
//                         <div class="row">
//                             <p class="pl-3 col-6"><a href="${articleLink}" class="btn btn-primary" role="button">READ MORE</a> 
//                             <p class="pl-3 mt-2 col-6 text-right">${autor}</p>
//                         </div>
                         
//                       </div>
//                   </div>
//                 </div>
              
// `;



   
// }

class addToHtml{

    constructor(data) {
        this.appKey = 'qs6THAQQGG1my522N1G4kwfxY95VJeqA';


        this.newsWrap = document.querySelector('.news__wrap');
        this.title;
        this.subtitle;
        this.section;
        this.subsection;
        this.published_date;
        this.articleLink;
        this.ingSrc;
        this.articlesType =  document.querySelector('.articlesType');
        this.articlesGroup = document.querySelector('.articlesGroup');
        this.btn = document.querySelector('.btn');
        this.dataSet = this.articlesType.querySelectorAll('[data-set]')
        this.form = document.querySelector('form');
        

     
    }
    init() {
        
        this.btn.addEventListener('click', function(e) {e.preventDefault()
        } );
        this.btn.addEventListener('click', function(e) {start.getInputValue(type, group)
        } );
       
        let type;
        let group;
        this.articlesType.addEventListener('change', function(e) {
            type = e.target.options[event.target.selectedIndex].dataset.set;
            start.getAllNews(type)})
        this.articlesGroup.addEventListener('change', function(e) {
            group = e.target.options[event.target.selectedIndex].dataset.group;})
        
        

    }


 getAllNews(data) {
    
    fetch( `https://api.nytimes.com/svc/mostpopular/v2/${data}.json?api-key=${this.appKey}`, {
        method: 'GET',

    })
    .then(res => {return res.json()})
    .then(data => {
        this.getCategoriesForGroupSection(data)
        this.sort(data.results, '')
        
    } )
    //.then(data => {this.sort(data)})
    
    
    .catch(err => {
        console.log(err)})

 }










    pullData() {
        //let appKey = 'qs6THAQQGG1my522N1G4kwfxY95VJeqA';
        // this.title = data.results[2].title
        // this.subtitle = data.results[2].abstract;
        // this.section = data.results[2].section;
        // this.subsection = data.results[2].subsection;
        // this.published_date = data.results[2].published_date;
        // this.articleLink = data.results[2].url;
        // this.ingSrc = data.results[2].media[0]['media-metadata'][2].url;
        fetch(`https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json?api-key=${appKey}`,{
                method: 'GET',

            })
            .then(res => {
                
                return res.json()})
            .then(data => { 

                //console.log(data.results);
                //this.test(data)
                this.sort(data.results)
                this.getNewsWithCategories(data)

                
            } )
            
            
            .catch(err => {
                console.log(err)})




    }
    test(data){
        this.getCategories(data);
        console.log( data.results)
        this.title = data.results.title
        this.subtitle = data.results.abstract;
        this.section = data.results.section;
        this.subsection = data.results.subsection;
        this.published_date = data.results.published_date;
        this.articleLink = data.results.url;
        //this.ingSrc = data.results.media[0]['media-metadata'][2].url;
        console.log( this.title)
         
    }
    getSortNews(appKey, time, category) {
        appKey = 'qs6THAQQGG1my522N1G4kwfxY95VJeqA';
        time = "emailed/1";
        fetch( `https://api.nytimes.com/svc/mostpopular/v2/${time}.json?api-key=${appKey}`, {
            method: 'GET',

        })
        .then(res => {
                
            return res.json()})
        .then(data => {this.sortWithCategory(data.results, category)} )
        
        
        .catch(err => {
            console.log(err)})
       
    }
    sort(data, category){
        
        this.cleanGrid();
         
        for(let i = 0; i < data.length; i++){
            
           this.getRes(data[i])
        }
    }
    
    sortWithCategory(data, category) {
        for(let i = 0; i < data.length; i++){
             if (data[i].section == category){ 
                 this.cleanGrid('ee');
                this.getRes(data[i])}
            // console.log(data[i] )
            //this.getRes(data[i])
         }
    }
    

    getInputValue(e,t) {// инпут и категория для поиска/сортировки
        
        if(typeof(e) !== 'string') return console.log('нет инфы')
        if(typeof(t) !== 'string') return console.log('нет категории')
         
        getArt( e,t)



    }

    getCategoriesForGroupSection(data) {
        this.clearCategoryItem()
        let newArr = data.results.map(item => item.section);
        
        let result = this.searchUniCategories(newArr)
        
        for(let i = 0; i < result.length; i++) {
            console.log(result[i])
        this.newCategoryItem(result[i])
        }
    }

    getNewsWithCategories(data) {
        //получаем уникальные категории для вывода в option
        // нужно вывести в section
        //let i = data.results;
       
        let newArr = data.results.map(item => item.section);
        console.log(newArr)
        let result = this.searchUniCategories(newArr)
        for(let i = 0; i < result.length; i++) {
            this.newCategoryItem(result[i])
            
        }
        
        //this.getInputValue()
        
    }
    searchUniCategories(newArr) {// перебираем масив, достаем уникальные категории
        
            let result = [];
          
            for (let str of newArr) {
              if (!result.includes(str)) {
                result.push(str);
              }
            }
            
            return result;
          
    }
    cleanGrid(t) { // очищает разметку перед выводом новых карточек
        
        return this.newsWrap.innerHTML = ''
    }

    getRes(data) {// получает один эл масива и выводит в разметку
        
        this.newsWrap.innerHTML += `
         <div class="col-sm-6 col-md-4">
                      <div class="thumbnail">
                             <div class="row  ">
                                <p class=" col-4">${data.section}</p>
                                <p class=" col-4">${data.subsection}</p>
                                <p class="col-4 text-right">${data.published_date}</p>
                            </div>
                         
                        <img src="${data.media[0]['media-metadata'][2].url}" alt="...">
                        <div class="caption">
                            <h3> <strong>${data.title}</strong></h3>
                            
                            <p class='text-center'>${data.abstract}</p>
                            <div class="row">
                                <p class="pl-3 col-6"><a href="${data.url}" class="btn btn-primary" role="button">READ MORE</a> 
                                
                            </div>
                             
                          </div>
                      </div>
                    </div>
                  
    `;
     
    }
     
    clearCategoryItem() {
        this.articlesGroup.innerHTML =  `
            <option data-group="All">${'All news'}</option>
        
        `
    }
    newCategoryItem(name) { //pull string


        this.articlesGroup.innerHTML +=  `
            <option data-group="${name}">${name}</option>
        
        `





    }
    
 


}
const start = new addToHtml();
start.init()

let articlesType =  document.querySelector('.articlesType');
let articlesGroup = document.querySelector('.articlesGroup');
let type ;
// let ty = articlesType.addEventListener('click', function(e) {
//     let type = e.target.options[event.target.selectedIndex].dataset.set;
//     console.log(type)
//     f(e)
    
// })

// let cat = articlesGroup.addEventListener('change', function(e) {
//     let group = e.target.options[event.target.selectedIndex].dataset.group;
//     console.log(group)
//     f( group)
    
// })
// console.log(type)

// function f() {

   
//     console.log(ty)


    
// }

