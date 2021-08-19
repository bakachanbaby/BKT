let ngay = Number(prompt("Vui lòng nhập ngày"));
let thang = Number(prompt("Vui lòng nhập tháng"));
let nam = Number(prompt("Vui lòng nhập năm"));
let flat = false;
function namNhuan(year) {
    if (((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0))
        return true;
    return false;
}
switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        {
            if (ngay > 0 && ngay <= 31)
                flat = true;
            break;
        }
    case 4:
    case 6:
    case 9:
    case 11:
        {
            if (ngay > 0 && ngay <= 30)
                flat = true;
            break;
        }
    case 2:
        {
            if (namNhuan(nam)) {
                if (ngay > 0 && ngay <= 29)
                    flat = true;
                break;
            }
            else {
                if (ngay > 0 && ngay <= 28)
                    flat = true;
                break;
            }
        }
    default: {
        break;
    }
}
if (flat)
    alert(`Ngày ${ngay}/${thang}/${nam} là ngày hợp lệ`);
else
    alert(`Ngày ${ngay}/${thang}/${nam} là ngày không hợp lệ`);

switch (thang) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
        {
            if (ngay > 0 && ngay < 31) {
                ngay++;
            }
            else if (ngay == 31) {
                ngay = 1;
                thang++;
            }
            break;
        }
    case 12:
        {
            if (ngay > 0 && ngay < 31) {
                ngay++;
            }
            else if (ngay == 31) {
                ngay = 1;
                thang = 1;
                nam++;
            }
            break;
        }
    case 4:
    case 6:
    case 9:
    case 11:
        {
            if (ngay > 0 && ngay < 30) {
                ngay++;
            }
            else if (ngay == 30) {
                ngay = 1;
                thang++;
            }
            break;
        }
    case 2:
        {
            if (namNhuan(nam)) {
                if (ngay > 0 && ngay < 29) {
                    ngay++;
                }
                else if (ngay == 29) {
                    ngay = 1;
                    thang++;
                }
                break;
            }
            else {
                if (ngay > 0 && ngay < 28) {
                    ngay++;
                }
                else if (ngay == 28) {
                    ngay = 1;
                    thang++;
                }
                break;
            }
        }
    default: {
        break;
    }
}
if(flat)
alert(`Ngày tiếp theo là: ${ngay}/${thang}/${nam}`)