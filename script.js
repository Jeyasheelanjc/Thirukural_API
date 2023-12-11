// var array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]


// var button = document.getElementById("button")
// var p1 = document.getElementById("p")
// var p2=document.getElementById("iyal")
// const appid = "tcjf7sa637ank";  // Replace with your actual app ID
// const format = "json";  // You can use "xml" for XML format

// var kuralNumber = Math.floor(Math.random() * 20)
// const apiUrl = `https://getthirukkural.appspot.com/api/3.0/kural/${kuralNumber}?appid=${appid}&format=${format}`;

// async function thiru() {

//     const response = await fetch(apiUrl)
//     var data = await response.json()
//     console.log(data);
//     p1.innerHtml = data.line1 +" "+data.line2
//     p2.innerHTML=data.iyal
// }
// button.addEventListener("click", () => {
//     thiru()
// })

var athigaram = document.getElementById("athigaram")
var iyal = document.getElementById("iyal")
var kural = document.getElementById("kural")
var thirukural = document.getElementById("thirukural")
var kuralnum = document.getElementById("kuralnum")
// var line2 =document.getElementById("line2")

var button = document.getElementById("button");
var p = document.getElementById("p");
const appid = "tcjf7sa637ank";  // Replace with your actual app ID
const format = "json";  // You can use "xml" for XML format

button.addEventListener("click", async () => {
    // Generate a random kural number
    let kuralNumber = Math.floor(Math.random() * 1330);  // Assuming you have 20 kural numbers

    const apiUrl = `https://getthirukkural.appspot.com/api/3.0/kural/${kuralNumber}?appid=${appid}&format=${format}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);
        thirukural.innerHTML = '" '+data.line1 + data.line2 + ' "';
        athigaram.innerHTML ="அதிகாரம் : "+ data.athigaram
        iyal.innerHTML = "இயல் :"+data.iyal
        kural.innerHTML ="குறள் பால் : " + data.paal
        kuralnum.innerHTML ="குறள் எண் : " + data.number
    } catch (error) {
        console.error('Error:', error);
    }
});

