

const url = '../Js/data.json';


const getData = fetch(url)
.then((res) => res.json())
.then((data) => {
    return data;
})



const showData = () => {

    const data = getData;
    data.then((res) => {
        

        return res.forEach(element => {
            
            console.log(element.title)
            console.log(element.timeframes.daily.current)
        });
    })
}


showData();