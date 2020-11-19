var mydata = 
[
    {
        "id": 0,
        "name": "test0",
        "price": "$0"
    },
    {
        "id": 1,
        "name": "test1",
        "price": "$1"
    },
    {
        "id": 2,
        "name": "test2",
        "price": "$2"
    },
   
];

$(function () {
    $('#table').bootstrapTable({
        data: mydata
    });
    console.log(mydata);
});