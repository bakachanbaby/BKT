let a = String(prompt("Vui lòng nhập chuỗi để xử lý"));
let b = String("");
b+=a[0].toUpperCase();
for(let i = 1; i < a.length; i++)
{
    if(a[i-1] === " " && a[i] != " ")
    {
        if(a[i] >= "a" && a[i] <= "z")
        {
            b+=a[i].toUpperCase();
        }
    }
    else 
    b+=a[i];
}
alert(b);
