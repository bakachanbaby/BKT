let a = prompt("Vui lòng nhập chuỗi cần đảo")
let b = String("");
for(let i = a.length-1; i >= 0; i--)
{
    b += a[i];
}
alert(`Chuỗi đão sẽ là: ${b}`)