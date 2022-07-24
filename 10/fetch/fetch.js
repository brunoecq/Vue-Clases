fetch('https://62d8b1a29088313935937e1f.mockapi.io/api/users')
.then((response) => response.json())
.then((json) => {
    debugger
    json.forEach(element => { console.table(element) })
})
