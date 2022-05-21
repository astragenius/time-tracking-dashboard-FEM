

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






dailyBtn.addEventListener('click', showDay);
weeklyBtn.addEventListener('click', showWeek);
monthlyBtn.addEventListener('click', showMonth);

function renderData(current, prev, index, param) {
    const mainTime = [...document.getElementsByClassName('box-main-time')];
    const boxFooter = [...document.getElementsByClassName('time-last')];
    
   mainTime[index].textContent = `${current}hrs`;
   boxFooter[index].textContent = `${prev}hrs`
   boxFooter[index].previousElementSibling.textContent = `Last ${param} `;
}

function showDay() {
   
    const data = fetchData;
    let param = 'Day';
    let dayPrev
    let dayCurrent
    
    data.then((res) => {
        
        return res.forEach((element, index) => {
            
            dayCurrent = element.timeframes.daily.current;
            dayPrev = element.timeframes.daily.previous;
            
            renderData(dayCurrent, dayPrev, index, param)

        })
                 
    })

   
}

function showMonth() {
   
    const data = fetchData;
    let param = 'Month';
    let Prev
    let Current
    
    data.then((res) => {
        
        return res.forEach((element, index) => {
            
            Current = element.timeframes.monthly.current;
            Prev = element.timeframes.monthly.previous;
            
            renderData(Current, Prev, index, param)

        })
                 
    })

   
}

function showWeek() {
   
    const data = fetchData;
    let param = 'Week';
    let dayPrev
    let dayCurrent
    
    data.then((res) => {
        
        return res.forEach((element, index) => {
            
            dayCurrent = element.timeframes.weekly.current;
            dayPrev = element.timeframes.weekly.previous;
            
            renderData(dayCurrent, dayPrev, index, param)

        })
                 
    })

   
}

