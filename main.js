const axios = require('axios');
var gitUser;
var public;
var private;
var url;
function submit(){
    var gitUser = document.getElementById('gitUser').value;
    var public = (document.getElementById('publicRepos').checked)
    var private = (document.getElementById('privateRepos').checked)
    var url = ('https://api.github.com/users'+gitUser+'/repo')
    console.log(url)
}

params = {
    type: 'all',
    sort: 'created',
    direction: 'asc'
}

axios.get(url, params).then(data=>console.log(data)).catch(err=>console.log(err))
