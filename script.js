function searchProfile() {
    let request = new XMLHttpRequest();
    let profile = document.querySelector('#login').value;
    request.open('GET',`https://api.github.com/users/${profile}`);
    request.onreadystatechange = function() {
    if (request.readyState == 4 && request.status == 200) {
        getProfile(request.responseText);
        }
    }
    request.send();
}

function getProfile(information) {
    let objectProfile = JSON.parse(information);
    document.querySelector('img').src = objectProfile.avatar_url;
    document.querySelector('img').removeAttribute('hidden');
    document.querySelector('#url').innerHTML = `<b>URL to github: </b><a href="${objectProfile.html_url}">${objectProfile.html_url}</a>`;
    document.querySelector('#location').innerHTML = `<b>City: </b> ${objectProfile.location}`;
    document.querySelector('#name').innerHTML = `<b>Name: </b> ${objectProfile.name}`;
    document.querySelector('#followers').innerHTML = `<b>Followers: </b> ${objectProfile.followers}`;
    document.querySelector('#following').innerHTML = `<b>Following: </b> ${objectProfile.following}`;
}