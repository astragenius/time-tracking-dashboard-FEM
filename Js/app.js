

const url = '../Js/data.json';


const fetchData = fetch(url)
.then((res) => res.json())
.then((data) => {
    return data;
})

const getData = () => {
    
    const data = fetchData;
   
    data.then((res) => {
        return res.forEach(element => { showTitle(element); } );
    })
    data.then((res) => { 
        return res.forEach(element => { showDay(element.timeframes); } ); 
    })
    
   
}








const dailyBtn = document.getElementById('daily-btn');
const weeklyBtn = document.getElementById('weekly-btn');
const monthlyBtn = document.getElementById('monthly-btn');
const mainTime = [...document.getElementsByClassName('box-main-time')];
const boxFooter = [...document.getElementsByClassName('box-footer')];


console.log(boxFooter)

const newData = getData();

function showTitle(data) {

   console.log(data.title)

}

function showDay(data) {
   
    const newArr = []
    newArr.push(data);
    let dayCurrent = newArr[0].daily.current;
    let dayPrev = newArr[0].daily.previous;
    console.log(dayCurrent)
    console.log(dayPrev)
   
   
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


