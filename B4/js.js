let nv = [
    {
        id: 1,
        Name: "Kien",
        Luong: 10,
        chucVu: "Nhan vien"
    },
    {
        id: 2,
        Name: "Trung",
        Luong: 20,
        chucVu: "Truong Phong"
    },
    {
        id: 3,
        Name: "Hieu",
        Luong: 30,
        chucVu: "Giam doc"
    },
];
function In() {
    for (let i = 0; i < nv.length; i++) {
        console.table(nv[i]);
    }
}
let chon = prompt("Vui lòng chọn (New, Delete, Update, Read)");
if (chon === "new" || chon === "New") {
    let newName = prompt("Vui lòng nhập tên: ");
    let newLuong = prompt("Vui lòng nhập lương: ");
    let newChucVu = prompt("Vui lòng nhập chức vụ: ");
    let id = nv.length + 1;
    let newObj = {
        ID: id,
        Name: newName,
        Luong: newLuong,
        chucVu: newChucVu,
    }
    nv.push(newObj);
    In();
}
else if (chon === "update" || chon === "Update") {
    let newID = prompt("Vui lòng nhập id muốn thay đổi: ")
    if (newID > nv.length)
        console.log("Không có id cần thay đổi");
    else {
        let newName = prompt("Vui lòng nhập tên: ");
        let newLuong = prompt("Vui lòng nhập lương: ");
        let newChucVu = prompt("Vui lòng nhập chức vụ: ");
        nv[newID - 1].Name = newName;
        nv[newID-1].Luong = newLuong;
        nv[newID-1].chucVu = newChucVu;
        In();
    }
}
else if (chon === "Read" || chon === "read") {
    In();
}
else if (chon === "Delete" || chon === "delete") {
    let newID = prompt("Vui lòng nhập id muốn thay đổi: ")
    if (newID > nv.length)
        console.log("Không có id cần xóa");
    else {
        nv.splice(newID - 1, 1)
        In();
    }
}
