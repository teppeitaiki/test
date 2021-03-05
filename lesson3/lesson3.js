//array => Mảng, danh sách
let movies = ["Spiderman","Batman","Hitman"]
let age = [12,13,12,5,8,28]
console.log(movies)
//create
movies.push("Upin & Ipin") // thêm vào cuối
console.log(movies)
movies.unshift("Phim gì đấy")// thêm vào đầu

// tạo ra 1 danh sách các bạn trong lớp 
// hỏi người dùng có muốn thêm thành viên mới không 
// nếu có : thêm thành viên mới vào danh sách
//nếu không : In ra danh sách lớp và thoát chương trình

let peoplename = ["Hải","An","Đức"]
while (true) {
    let ans = prompt("Có thêm không? (Y/N)")
    if (ans == "Y") {
        let newstudent = prompt("Tên của học sinh? ")
        ans.push(newstudent)
    }else if {
        console.log(ans)
        break
    }
}

//Read
let firstmovie = movies(0)
console.log(firstmovie)

or
console.log(movies[0])

console.log(movies.length)
let len = movies.length
console.log(movies[len-1])

// for để in ra tất cả phần tử trong mảng
for (let i = 0;i < movies.length;i++ ){
    console.log(movies[i])
}

for (let movie of movies ){
    console.log(movie)
}

for (let movie in movies ){
    console.log(movie)
}

//Update
movies[0] = "wonder woman"
movies[3] = "pikachu"
movies[movies.length - 1] = "Thủy Tinh"

//Delete
movies.splice(0, 1)
movies.splice(movies.length - 1)
movies.splice(1,movies.length - 1)


//BTVN
// tạo ra 1 danh sách các bạn trong lớp 
// hỏi người dùng có muốn thao tác (C,R,U,D)
// nếu người dùng chọn "C" => Hỏi thêm học sinh nào,thêm vào danh sách
// nếu người dùng chọn "R" => Hỏi muốn xem học sinh ở vị trí bao nhiêu
//                         => alert tên của học sinh ở vị trí đó 
// nếu người dùng chọn "U" => 
// nếu không : In ra danh sách lớp và thoát chương trình