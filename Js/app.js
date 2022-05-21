

const url = '../Js/data.json';


const fetchData = fetch(url)
.then((res) => res.json())
.then((data) => {
    return data;
})

/* const getData = () => {
    
    const data = fetchData;
   
    return data.then((res) => {
        return res.forEach(element => { element.timeframes; } );
   
   
    });
}
 */







const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const mainTime = [...document.getElementsByClassName('box-main-time')];
const boxFooter = [...document.getElementsByClassName('box-footer')];



console.log(mainTime);



dailyBtn.addEventListener('click', showDay);
weeklyBtn.addEventListener('click', showWeek);
monthlyBtn.addEventListener('click', showMonth);

function renderData(current, prev, index) {

    console.log(mainTime[index])
}

function showDay() {
   
    const data = fetchData;
    let dayPrev
    let dayCurrent
    
    data.then((res) => {
        
        return res.forEach((element, index) => {
            
            dayCurrent = element.timeframes.daily.current;
            dayPrev = element.timeframes.daily.previous;
            
            renderData(dayCurrent, dayPrev, index)

        })
           
           
      

    })

   
   
}

function showWeek(data) {
   
    const newArr = []
    newArr.push(data);
    let newData = newArr[0].weekly.current; 
   console.log(newData)
   
}

function showMonth(data) {
   
    const newArr = []
    newArr.push(data);
    let newData = newArr[0].monthly.current;
    console.log(newData)
   
}


