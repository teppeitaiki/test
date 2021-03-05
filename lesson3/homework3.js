Bài 1:
let a = 5;
let b =6;
[a,b] = [b,a];
console.log(a,b)

Bài 2:
const s = 'Hello beauty there';
const a = Array(s);
console.log(a)
let b = s.split(" ");
console.log(b)

Bài 3:
const a = [4, 5, 7, -8];
console.log(...a);

Bài 4:
let clothes = ["Jean", "T-Shirt", "Socks"];
console.log(clothes);
while(true)
{
    let hi = prompt("Hi there, welcome to shop admin panel, what do you want (C, R, U, D) ? ");
    if(hi == "C" || hi == "c")
    {
        let addClothes = prompt("Enter the name of the new item ");
        clothes.push(addClothes);
        alert("Done");
    }
    else if(hi == "R" || hi == "r");
    {
        console.log("The current item are: ");
        for(i = 0; i < clothes.length; i++)
        {
                console.log(`${i + 1}. ${clothes[i]}`);
        }
    }
    else if(hi == "U" || hi == "u");
    {
        let updateClothes = prompt("Enter the position you want to update");
        let newClothes = prompt("Enter the new name");
        for(a = 0; a <= clothes.length; a++)
        {
            if(updateClothes == a)
            {
                clothes[a - 1] = newClothes;
            }
        }
        alert("Done");
    }
    else if(hi == "D" || hi == "d");
    {
        let del = prompt("Enter the position you want delete ");
        clothes.splice(del - 1, 1);
        alert("Done");
    }
    else
    {
        alert("This command is not supported");
        break;
    }
}

Bài 5:
var num = prompt("Enter a squence of Number, separated by commas (,) ");
num = num.split(",");
let sum = 0;
for(let i of num)
{
    sum += Number(i);
}
alert(`The sum of them is ${sum}`);

Bài 6:
let num = prompt("Enter a squence of numbers, separated by ","");
num = num.split(",");
let min = Math.min.apply(Math, num);
alert(`The smallest number is ${min}`);

Bài 7:
const num = [1, 2, 3, 4, -13];
let input = Number(prompt("Enter a number "));
let check = num.indexOf(input);
if(check != -1)
{
    alert(`${input} is FOUND in my array at index ${check}`);
}
else
{
    alert(`${input} is NOT found in my array`);
}

Bài 8:
8.1
const flockOfSheep = [5,7,300,90,24,50,75]
console.log("Hello, my name is Bach here is my sheep size")
console.log(...flockOfSheep)
console.log("\n")

8.2
let max = Math.max.apply(Math, flockOfSheep);
console.log(`Now my biggest sheep has size ${max}, let's shave it `);
console.log("\n");

8.3
let maxSheep = flockOfSheep.indexOf(max)
flockOfSheep[maxSheep]=8
console.log("After shearing, here is ma flock")
console.log(...flockOfSheep)
console.log("\n")

8.4
let new_flockOfSheep = [];
for(let i of flockOfSheep)
{
    i += 50;
    new_flockOfSheep.push(i);
}
console.log("MONTH 1");
console.log("One month has, passed, my sheeps have grown, here are their sizes ");
console.log(...new_flockOfSheep);
console.log("\n");

8.5: 
//Làm 4 tháng tiếp theo, hoặc tùy người nhập
let month = Number(prompt("Enter the month you want: "));
for(a = 2; i <= month; a++)
{

// Tìm size max trong array mới
let max1=Math.max.apply(Math,new_flockOfSheep)
console.log(`Now my biggest sheep has size ${max1}, let's shave it`)
console.log("\n")

// Trả size max về giá trị defaul = 8
let maxSheep1 = new_flockOfSheep.indexOf(max1);
new_flockOfSheep[maxSheep1] = 8;
console.log(`After shearing, here is my flock`);
console.log(...new_flockOfSheep);
console.log("\n");

//Cộng tất cả thêm 50
for(let b = 0; b< new_flockOfSheep.length;b++){
    new_flockOfSheep[b]+=50
}
console.log(`MONTH ${a}`)
console.log("One month has, passed, my sheep have grown, here are their sizes")
console.log(...new_flockOfSheep)
console.log("\n")
}

8.6
