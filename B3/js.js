let a = String(prompt("Vui lòng nhập phần tử các nhau dấu ,"));
let b = a.slice(',');
alert(b);
let arr = [];
for(let i = 0; i < b.length; i++)
{
    if(arr.indexOf(b[i]) === -1 && b[i] != ',')
    arr.push(b[i]);
    
}
alert(arr);
// let newArr = [];
// for(let i = 0; i < arr.length; i++)
// {
//     for(let j = i+1; j < arr.length; j++)
//     {
//         if(arr[i] === arr[j])
//         {
//             arr[j] = ",";
//             console.log(1);
//         }
//     }
//     if(arr[i] != ",")
//     newArr.push(arr[i]);
// }
// alert(arr);
// alert(newArr);